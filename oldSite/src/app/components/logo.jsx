import React from 'react';
import AtvImg from 'react-atv-img';
//require('../../../src/images/card_back@2x.png');

export default class logo extends React.Component {
  render() {
    return (
        <div>
            <AtvImg
                layers={[
                './src/images/card_back@2x.png',
                './src/images/card_front@2x.png',
                ]}
                staticFallback="http://kloc.pm/images/kloc-icon-flattened.jpg"
                isStatic={false}
                style={{ width: 320, height: 190 }}
                className="react_image"
            />
        </div>
    );
  }
}
