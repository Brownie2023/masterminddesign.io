import React from "react";

class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            full_name: "",
            email: "",
            message: "",
            robot: null,
            post_message: { value: "", message: "" }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitContactForm = this.submitContactForm.bind(this);
        this.setPostMessage = this.setPostMessage.bind(this);
    }

    handleInputChange(e) {
        const target = e.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    setPostMessage(val, msg) {
        this.setState({
            post_message: { value: val, message: msg }
        });
    }

    submitContactForm(e) {
        var self;
        e.preventDefault();
        self = this;
        if (this.state.robot === "true") this.state.robot = true;
        if (this.state.robot === "false") this.state.robot = false;
        // Submit form via jQuery/AJAX
        var data = {
            name: this.state.full_name,
            email: this.state.email,
            message: this.state.message,
            robot: this.state.robot
        };
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "https://mastermind-api.azurewebsites.net/api/contact",
            data: JSON.stringify(data),
            beforeSend: function() {
                self.setPostMessage("Loading", "Trying to send your message");
            }
        })
            .done(function(data) {
                var return_data = data;
                self.setPostMessage(data.value, data.message);
            })
            .fail(function(jqXhr) {
                self.setPostMessage("Error", "Something Went Wrong");
            });
    }

    render() {
        return (
            <form className="contact_form" onSubmit={this.submitContactForm}>
                <h2 className="title has-text-centered">Contact Me</h2>
                <SubmitMessage
                    postMessageValProp={this.state.post_message.value}
                    postMessageMsgProp={this.state.post_message.message}
                />
                <TextInput
                    labelProp="Name*"
                    nameProp="full_name"
                    iconProp="fa fa-user"
                    stateProp={this.state.full_name}
                    updateStateProp={this.handleInputChange}
                />
                <TextInput
                    labelProp="Email*"
                    nameProp="email"
                    iconProp="fa fa-envelope"
                    stateProp={this.state.email}
                    updateStateProp={this.handleInputChange}
                />
                <TextAreaInput
                    labelProp="Message*"
                    nameProp="message"
                    stateProp={this.state.message}
                    updateStateProp={this.handleInputChange}
                />
                <RobotRadios
                    labelProp="Are You A Robot?*"
                    nameProp="robot"
                    stateProp={this.state.robot}
                    updateStateProp={this.handleInputChange}
                />
                <div className="field is-horizontal">
                    <div className="field-label" />
                    <div className="field-body">
                        <div className="field">
                            <div className="control">
                                <input
                                    type="submit"
                                    value="Send Message"
                                    className="button is-primary form_send_button"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

class TextInput extends React.Component {
    render() {
        return (
            <div className="field is-horizontal">
                <div className="field-label">
                    <label className="label">{this.props.labelProp}</label>
                </div>
                <div className="field-body">
                    <p className="control has-icons-left">
                        <input
                            className="input"
                            type="text"
                            name={this.props.nameProp}
                            placeholder={this.props.labelProp}
                            value={this.props.stateProp}
                            onChange={this.props.updateStateProp}
                        />
                        <span className="icon is-small is-left">
                            <i className={this.props.iconProp} />
                        </span>
                    </p>
                </div>
            </div>
        );
    }
}

class TextAreaInput extends React.Component {
    render() {
        return (
            <div className="field is-horizontal">
                <div className="field-label">
                    <label className="label">{this.props.labelProp}</label>
                </div>
                <div className="field-body">
                    <p className="control">
                        <textarea
                            className="textarea"
                            name={this.props.nameProp}
                            placeholder={this.props.labelProp}
                            value={this.props.stateProp}
                            onChange={this.props.updateStateProp}
                        />
                    </p>
                </div>
            </div>
        );
    }
}

class RobotRadios extends React.Component {
    render() {
        return (
            <div className="field is-horizontal">
                <div className="field-label">
                    <label className="label">{this.props.labelProp}</label>
                </div>
                <div className="field-body">
                    <div className="field is-narrow">
                        <div className="control">
                            <label className="radio">
                                <input
                                    type="radio"
                                    name={this.props.nameProp}
                                    value={true}
                                    onChange={this.props.updateStateProp}
                                />
                                Yes
                            </label>
                            <label className="radio">
                                <input
                                    type="radio"
                                    name={this.props.nameProp}
                                    value={false}
                                    onChange={this.props.updateStateProp}
                                />
                                No (This is the correct answer)
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class SubmitMessage extends React.Component {
    render() {
        let MessageVal = this.props.postMessageValProp;
        if (MessageVal == "Error") {
            return (
                <Alert
                    alertClass="notification is-danger"
                    alertVal={this.props.postMessageValProp}
                    alertMsg={this.props.postMessageMsgProp}
                />
            );
        }
        if (MessageVal == "Success") {
            return (
                <Alert
                    alertClass="notification is-success"
                    alertVal={this.props.postMessageValProp}
                    alertMsg={this.props.postMessageMsgProp}
                />
            );
        }
        if (MessageVal == "Loading") {
            return (
                <Alert
                    alertClass="notification is-warning"
                    alertVal={this.props.postMessageValProp}
                    alertMsg={this.props.postMessageMsgProp}
                />
            );
        } else {
            return null;
        }
    }
}

class Alert extends React.Component {
    render() {
        return (
            <div className={this.props.alertClass}>
                <h1>
                    {this.props.alertVal}: {this.props.alertMsg}
                </h1>
            </div>
        );
    }
}

export default ContactForm;
