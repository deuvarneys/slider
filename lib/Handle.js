'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Handle = function (_React$Component) {
    _inherits(Handle, _React$Component);

    function Handle() {
        _classCallCheck(this, Handle);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    Handle.prototype.render = function render() {
        var _props = this.props,
            className = _props.className,
            vertical = _props.vertical,
            offset = _props.offset,
            minimumTrackTintColor = _props.minimumTrackTintColor,
            disabled = _props.disabled,
            ariaLabel = _props.ariaLabel,
            ariaValueText = _props.ariaValueText,
            ariaValueNow = _props.ariaValueNow,
            ariaValueMin = _props.ariaValueMin,
            ariaValueMax = _props.ariaValueMax,
            restProps = _objectWithoutProperties(_props, ['className', 'vertical', 'offset', 'minimumTrackTintColor', 'disabled', 'ariaLabel', 'ariaValueText', 'ariaValueNow', 'ariaValueMin', 'ariaValueMax']);

        var style = vertical ? { bottom: offset + '%' } : { left: offset + '%' };
        var ariaOrientation = vertical ? 'vertical' : 'horizontal';
        if (minimumTrackTintColor && !disabled) {
            style.borderColor = minimumTrackTintColor;
        }
        return _react2["default"].createElement('div', _extends({}, restProps, {
            className: className,
            tabIndex: 0,
            role: 'slider',
            style: style,
            'aria-label': ariaLabel,
            'aria-valuenow': ariaValueNow,
            'aria-orientation': ariaOrientation,
            'aria-valuetext': ariaValueText,
            'aria-valuemin': ariaValueMin,
            'aria-valuemax': ariaValueMax
        }));
    };

    return Handle;
}(_react2["default"].Component);

exports["default"] = Handle;


Handle.propTypes = {
    className: _propTypes2["default"].string,
    vertical: _propTypes2["default"].bool,
    offset: _propTypes2["default"].number,
    minimumTrackTintColor: _propTypes2["default"].string,
    disabled: _propTypes2["default"].bool,
    ariaLabel: _propTypes2["default"].string,
    ariaValueText: _propTypes2["default"].string,
    ariaValueNow: _propTypes2["default"].number,
    ariaValueMin: _propTypes2["default"].number,
    ariaValueMax: _propTypes2["default"].number
};
module.exports = exports['default'];