import React, { PropTypes } from 'react';

export default class Handle extends React.Component {
  render() {
    const {
      className,
      vertical,
      offset,
      minimumTrackTintColor,
      disabled,
      ariaLabel,
      ariaValueText,
      ariaValueNow,
      ariaValueMin,
      ariaValueMax,
      ...restProps,
    } = this.props;
    const style = vertical ? { bottom: `${offset}%` } : { left: `${offset}%` };
    const ariaOrientation = vertical ? 'vertical' : 'horizontal';
    if (minimumTrackTintColor && !disabled) {
      style.borderColor = minimumTrackTintColor;
    }
    return (
      <div
        {...restProps}
        className={className}
        tabIndex={0}
        role={'slider'}
        style={style}
        aria-label={ariaLabel}
        aria-valuenow={ariaValueNow}
        aria-orientation={ariaOrientation}
        aria-valuetext={ariaValueText}
        aria-valuemin={ariaValueMin}
        aria-valuemax={ariaValueMax}
      />);
  }
}

Handle.propTypes = {
  className: PropTypes.string,
  vertical: PropTypes.bool,
  offset: PropTypes.number,
  minimumTrackTintColor: PropTypes.string,
  disabled: PropTypes.bool,
  ariaLabel: PropTypes.string,
  ariaValueText: PropTypes.string,
  ariaValueNow: PropTypes.number,
  ariaValueMin: PropTypes.number,
  ariaValueMax: PropTypes.number,
};
