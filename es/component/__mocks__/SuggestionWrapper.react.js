import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';

var SuggestionWrapper = function (_React$Component) {
  _inherits(SuggestionWrapper, _React$Component);

  function SuggestionWrapper() {
    _classCallCheck(this, SuggestionWrapper);

    return _possibleConstructorReturn(this, (SuggestionWrapper.__proto__ || Object.getPrototypeOf(SuggestionWrapper)).apply(this, arguments));
  }

  _createClass(SuggestionWrapper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.renderReady();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.props.renderReady();
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return SuggestionWrapper;
}(React.Component);

export default SuggestionWrapper;