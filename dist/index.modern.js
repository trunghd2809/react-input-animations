import React from 'react';
import PropTypes from 'prop-types';

var styles = {"input_wrapper":"_3LhE5","label_content":"_1VKUO"};

var ReactInputAnimations = function ReactInputAnimations(props) {
  var label = props.label,
      type = props.type,
      name = props.name,
      _onChange = props.onChange;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.input_wrapper
  }, /*#__PURE__*/React.createElement("input", {
    type: type,
    name: name,
    autoComplete: "off",
    required: true,
    onChange: function onChange(event) {
      var textVal = event.nativeEvent.target.value;

      if (typeof _onChange === 'function') {
        _onChange(textVal);
      }
    }
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "name",
    className: styles.label_wrapper
  }, /*#__PURE__*/React.createElement("span", {
    className: styles.label_content
  }, label)));
};
ReactInputAnimations.propsType = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func
};
ReactInputAnimations.defaultProps = {
  label: 'Name',
  type: 'text',
  name: 'name',
  onChange: null
};

export { ReactInputAnimations };
//# sourceMappingURL=index.modern.js.map
