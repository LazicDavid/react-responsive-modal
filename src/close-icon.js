import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const CloseIcon = ({
  classes,
  classNames,
  styles,
  icon,
  closeIconSize,
  closeIconSvgPath,
  onClickCloseIcon,
}) => !icon
  ? (
    <button
      className={cx(classes.closeButton, classNames.closeButton)}
      style={styles.closeButton}
      onClick={onClickCloseIcon}
    >
      <svg
        className={cx(classes.closeIcon, classNames.closeIcon)}
        style={styles.closeIcon}
        xmlns="http://www.w3.org/2000/svg"
        width={closeIconSize}
        height={closeIconSize}
        viewBox="0 0 36 36"
      >
        {closeIconSvgPath}
      </svg>
    </button>
  )
  : icon;

CloseIcon.propTypes = {
  classNames: PropTypes.object.isRequired,
  icon: PropTypes.object,
  styles: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  closeIconSize: PropTypes.number.isRequired,
  closeIconSvgPath: PropTypes.node.isRequired,
  onClickCloseIcon: PropTypes.func.isRequired,
};

export default CloseIcon;
