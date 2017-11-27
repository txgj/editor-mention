import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import getOffset from '../utils/getOffset';

var SuggestionPortal = function (_React$Component) {
  _inherits(SuggestionPortal, _React$Component);

  function SuggestionPortal() {
    _classCallCheck(this, SuggestionPortal);

    return _possibleConstructorReturn(this, (SuggestionPortal.__proto__ || Object.getPrototypeOf(SuggestionPortal)).apply(this, arguments));
  }

  _createClass(SuggestionPortal, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          callbacks = _props.callbacks,
          suggestionRegex = _props.suggestionRegex,
          decoratedText = _props.decoratedText;

      var matches = suggestionRegex.exec(decoratedText);
      this.trigger = matches[2];
      this.updatePortalPosition(this.props);
      callbacks.setEditorState(callbacks.getEditorState());
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.updatePortalPosition(nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _props2 = this.props,
          offsetKey = _props2.offsetKey,
          mentionStore = _props2.mentionStore;

      mentionStore.inActiveSuggestion({ offsetKey: offsetKey });
    }
  }, {
    key: 'updatePortalPosition',
    value: function updatePortalPosition(props) {
      var _this2 = this;

      var offsetKey = props.offsetKey,
          mentionStore = props.mentionStore;

      mentionStore.updateSuggestion({
        offsetKey: offsetKey,
        trigger: this.trigger,
        position: function position() {
          var element = _this2.searchPortal;
          var rect = getOffset(element);
          return {
            left: rect.left,
            top: rect.top,
            width: element.offsetWidth,
            height: element.offsetHeight
          };
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return React.createElement(
        'span',
        { ref: function ref(node) {
            _this3.searchPortal = node;
          }, style: this.props.style },
        this.props.children
      );
    }
  }]);

  return SuggestionPortal;
}(React.Component);

SuggestionPortal.propTypes = {
  offsetKey: PropTypes.any,
  mentionStore: PropTypes.object,
  decoratedText: PropTypes.string,
  children: PropTypes.any,
  callbacks: PropTypes.any,
  suggestionRegex: PropTypes.any
};
export default SuggestionPortal;