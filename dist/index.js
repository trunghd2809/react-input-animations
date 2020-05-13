function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

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

exports.ReactInputAnimations = ReactInputAnimations;
//# sourceMappingURL=index.js.map
