'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getOffset = require('../utils/getOffset');

var _getOffset2 = _interopRequireDefault(_getOffset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var SuggestionPortal = function (_React$Component) {
  (0, _inherits3['default'])(SuggestionPortal, _React$Component);

  function SuggestionPortal() {
    (0, _classCallCheck3['default'])(this, SuggestionPortal);
    return (0, _possibleConstructorReturn3['default'])(this, (SuggestionPortal.__proto__ || Object.getPrototypeOf(SuggestionPortal)).apply(this, arguments));
  }

  (0, _createClass3['default'])(SuggestionPortal, [{
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
          var rect = (0, _getOffset2['default'])(element);
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

      return _react2['default'].createElement(
        'span',
        { ref: function ref(node) {
            _this3.searchPortal = node;
          }, style: this.props.style },
        this.props.children
      );
    }
  }]);
  return SuggestionPortal;
}(_react2['default'].Component);

SuggestionPortal.propTypes = {
  offsetKey: _propTypes2['default'].any,
  mentionStore: _propTypes2['default'].object,
  decoratedText: _propTypes2['default'].string,
  children: _propTypes2['default'].any,
  callbacks: _propTypes2['default'].any,
  suggestionRegex: _propTypes2['default'].any
};
exports['default'] = SuggestionPortal;
module.exports = exports['default'];