import React from 'react';
import AtvImg from 'react-atv-img';

export default class logo extends React.Component {
  render() {
    return (
        <div>
            <AtvImg
                layers={[
                'http://masterminddesign.io/abstract.png',
                'http://masterminddesign.io/beaker.png',
                ]}
                staticFallback="http://kloc.pm/images/kloc-icon-flattened.jpg"
                isStatic={false}
                style={{ width: 375, height: 375, marginLeft: -15 }}
                className="react_image"
            />
        </div>
    );
  }
}