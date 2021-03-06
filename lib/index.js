'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var cx = _interopDefault(require('classnames'));
var PropTypes = _interopDefault(require('prop-types'));
var reactLifecyclesCompat = require('react-lifecycles-compat');
var Portal = _interopDefault(require('react-minimalist-portal'));
var CSSTransition = _interopDefault(require('react-transition-group/CSSTransition'));
var noScroll = _interopDefault(require('no-scroll'));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var CloseIcon = function CloseIcon(_ref) {
  var classes = _ref.classes,
      classNames = _ref.classNames,
      styles = _ref.styles,
      icon = _ref.icon,
      closeIconSize = _ref.closeIconSize,
      closeIconSvgPath = _ref.closeIconSvgPath,
      onClickCloseIcon = _ref.onClickCloseIcon;
  return !icon ? React__default.createElement("button", {
    className: cx(classes.closeButton, classNames.closeButton),
    style: styles.closeButton,
    onClick: onClickCloseIcon
  }, React__default.createElement("svg", {
    className: cx(classes.closeIcon, classNames.closeIcon),
    style: styles.closeIcon,
    xmlns: "http://www.w3.org/2000/svg",
    width: closeIconSize,
    height: closeIconSize,
    viewBox: "0 0 36 36"
  }, closeIconSvgPath)) : icon;
};

CloseIcon.propTypes = {
  classNames: PropTypes.object.isRequired,
  icon: PropTypes.object,
  styles: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  closeIconSize: PropTypes.number.isRequired,
  closeIconSvgPath: PropTypes.node.isRequired,
  onClickCloseIcon: PropTypes.func.isRequired
};

var _modals = [];
/**
 * Handle the order of the modals.
 * Inspired by the material-ui implementation.
 */

var modalManager = {
  /**
   * Return the modals array
   */
  modals: function modals() {
    return _modals;
  },

  /**
   * Register a new modal
   */
  add: function add(modal) {
    if (_modals.indexOf(modal) === -1) {
      _modals.push(modal);
    }
  },

  /**
   * Remove a modal
   */
  remove: function remove(modal) {
    var index = _modals.indexOf(modal);

    if (index !== -1) {
      _modals.splice(index, 1);
    }
  },

  /**
   * Check if the modal is the first one on the screen
   */
  isTopModal: function isTopModal(modal) {
    return !!_modals.length && _modals[_modals.length - 1] === modal;
  }
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".styles_overlay__CLSq- {\n  background: rgba(0, 0, 0, 0.75);\n  display: flex;\n  align-items: flex-start;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 1000;\n  padding: 1.2rem;\n}\n.styles_overlayCenter__YHoO7 {\n  align-items: center;\n}\n.styles_modal__gNwvD {\n  max-width: 800px;\n  position: relative;\n  padding: 1.2rem;\n  background: #ffffff;\n  background-clip: padding-box;\n  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.25);\n  margin: auto;\n}\n.styles_closeButton__20ID4 {\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  border: none;\n  padding: 0;\n  background-color: transparent;\n  display: flex;\n}\n.styles_closeIcon__1QwbI {\n}\n.styles_transitionEnter__3j_-a {\n  opacity: 0.01;\n}\n.styles_transitionEnterActive___eQs7 {\n  opacity: 1;\n  transition: opacity 500ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.styles_transitionExit__1KmEf {\n  opacity: 1;\n}\n.styles_transitionExitActive__1nQXw {\n  opacity: 0.01;\n  transition: opacity 500ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n";
var cssClasses = {"overlay":"styles_overlay__CLSq-","overlayCenter":"styles_overlayCenter__YHoO7","modal":"styles_modal__gNwvD","closeButton":"styles_closeButton__20ID4","closeIcon":"styles_closeIcon__1QwbI","transitionEnter":"styles_transitionEnter__3j_-a","transitionEnterActive":"styles_transitionEnterActive___eQs7","transitionExit":"styles_transitionExit__1KmEf","transitionExitActive":"styles_transitionExitActive__1nQXw"};
styleInject(css,{"insertAt":"top"});

var Modal =
/*#__PURE__*/
function (_Component) {
  _inherits(Modal, _Component);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOpen", function () {
      modalManager.add(_assertThisInitialized(_assertThisInitialized(_this)));

      if (_this.props.blockScroll) {
        _this.blockScroll();
      }

      document.addEventListener('keydown', _this.handleKeydown);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClose", function () {
      modalManager.remove(_assertThisInitialized(_assertThisInitialized(_this)));

      if (_this.props.blockScroll) {
        _this.unblockScroll();
      }

      document.removeEventListener('keydown', _this.handleKeydown);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClickOverlay", function (event) {
      if (_this.shouldClose === null) {
        _this.shouldClose = true;
      }

      if (!_this.shouldClose) {
        _this.shouldClose = null;
        return;
      }

      if (_this.props.onOverlayClick) {
        _this.props.onOverlayClick(event);
      }

      if (_this.props.closeOnOverlayClick) {
        _this.props.onClose(event);
      }

      _this.shouldClose = null;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClickCloseIcon", function (event) {
      _this.props.onClose(event);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeydown", function (event) {
      // Only the last modal need to be escaped when pressing the esc key
      if (event.keyCode !== 27 || !modalManager.isTopModal(_assertThisInitialized(_assertThisInitialized(_this)))) {
        return;
      }

      if (_this.props.onEscKeyDown) {
        _this.props.onEscKeyDown(event);
      }

      if (_this.props.closeOnEsc) {
        _this.props.onClose(event);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleModalEvent", function () {
      _this.shouldClose = false;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleEntered", function () {
      if (_this.props.onEntered) {
        _this.props.onEntered();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleExited", function () {
      if (_this.props.onExited) {
        _this.props.onExited();
      }

      _this.setState({
        showPortal: false
      });

      if (_this.props.blockScroll) {
        _this.unblockScroll();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "unblockScroll", function () {
      // Restore the scroll only if there is no modal on the screen
      if (modalManager.modals().length === 0) {
        noScroll.off();
      }
    });

    _this.state = {
      showPortal: props.open
    };
    _this.shouldClose = null;
    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Block scroll when initial prop is open
      if (this.props.open) {
        this.handleOpen();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.showPortal && !this.state.showPortal) {
        this.handleClose();
      } else if (!prevProps.open && this.props.open) {
        this.handleOpen();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.open) {
        this.handleClose();
      }
    }
  }, {
    key: "blockScroll",
    // eslint-disable-next-line class-methods-use-this
    value: function blockScroll() {
      noScroll.on();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          open = _this$props.open,
          center = _this$props.center,
          classes = _this$props.classes,
          classNames = _this$props.classNames,
          styles = _this$props.styles,
          showCloseIcon = _this$props.showCloseIcon,
          closeIconSize = _this$props.closeIconSize,
          closeIconSvgPath = _this$props.closeIconSvgPath,
          closeIcon = _this$props.closeIcon,
          animationDuration = _this$props.animationDuration,
          container = _this$props.container;
      var showPortal = this.state.showPortal;

      if (!showPortal) {
        return null;
      }

      return React__default.createElement(Portal, {
        container: container
      }, React__default.createElement(CSSTransition, {
        in: open,
        appear: true,
        classNames: {
          appear: classNames.transitionEnter || classes.transitionEnter,
          appearActive: classNames.transitionEnterActive || classes.transitionEnterActive,
          enter: classNames.transitionEnter || classes.transitionEnter,
          enterActive: classNames.transitionEnterActive || classes.transitionEnterActive,
          exit: classNames.transitionExit || classes.transitionExit,
          exitActive: classNames.transitionExitActive || classes.transitionExitActive
        },
        timeout: animationDuration,
        onEntered: this.handleEntered,
        onExited: this.handleExited
      }, React__default.createElement("div", {
        className: cx(classes.overlay, center ? classes.overlayCenter : null, classNames.overlay),
        onClick: this.handleClickOverlay,
        style: styles.overlay
      }, React__default.createElement("div", {
        className: cx(classes.modal, classNames.modal),
        style: styles.modal,
        onMouseDown: this.handleModalEvent,
        onMouseUp: this.handleModalEvent,
        onClick: this.handleModalEvent
      }, this.props.children, showCloseIcon && React__default.createElement(CloseIcon, {
        classes: classes,
        classNames: classNames,
        styles: styles,
        icon: closeIcon,
        closeIconSize: closeIconSize,
        closeIconSvgPath: closeIconSvgPath,
        onClickCloseIcon: this.handleClickCloseIcon
      })))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (!prevState.showPortal && nextProps.open) {
        return {
          showPortal: true
        };
      }

      return null;
    }
  }]);

  return Modal;
}(React.Component);

Modal.propTypes = {
  closeIcon: PropTypes.object,

  /**
   * Is the modal closable when user press esc key.
   */
  closeOnEsc: PropTypes.bool,

  /**
   * Is the modal closable when user click on overlay.
   */
  closeOnOverlayClick: PropTypes.bool,

  /**
   * Callback fired when the Modal is open and the animation is finished.
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired when the Modal has exited and the animation is finished.
   */
  onExited: PropTypes.func,

  /**
   * Callback fired when the Modal is requested to be closed by a click on the overlay or when user press esc key.
   */
  onClose: PropTypes.func.isRequired,

  /**
   * Callback fired when the escape key is pressed.
   */
  onEscKeyDown: PropTypes.func,

  /**
   * Callback fired when the overlay is clicked.
   */
  onOverlayClick: PropTypes.func,

  /**
   * Control if the modal is open or not.
   */
  open: PropTypes.bool.isRequired,

  /**
   * An object containing classNames to style the modal, can have properties 'overlay' (classname for overlay div), 'modal' (classname for modal content div), 'closeButton' (classname for the button that contain the close icon), 'closeIcon' (classname for close icon svg). You can customize the transition with 'transitionEnter', 'transitionEnterActive', 'transitionExit', 'transitionExitActive'
   */
  classNames: PropTypes.object,

  /**
   * An object containing the styles objects to style the modal, can have properties 'overlay', 'modal', 'closeButton', 'closeIcon'.
   */
  styles: PropTypes.object,

  /**
   * The content of the modal.
   */
  children: PropTypes.node,

  /**
   * @internal
   */
  classes: PropTypes.object,

  /**
   * Should the dialog be centered.
   */
  center: PropTypes.bool,

  /**
   * Show the close icon.
   */
  showCloseIcon: PropTypes.bool,

  /**
   * Close icon size.
   */
  closeIconSize: PropTypes.number,

  /**
   * A valid svg path to show as icon.
   */
  closeIconSvgPath: PropTypes.node,

  /**
   * Animation duration in milliseconds.
   */
  animationDuration: PropTypes.number,

  /**
   * You can specify a container prop which should be of type `Element`. The portal will be rendered inside that element. The default behavior will create a div node and render it at the at the end of document.body.
   */
  container: PropTypes.object,
  // eslint-disable-line

  /**
   * Whether to block scrolling when dialog is open
   */
  blockScroll: PropTypes.bool
};
Modal.defaultProps = {
  classes: cssClasses,
  closeOnEsc: true,
  closeOnOverlayClick: true,
  onEntered: null,
  onExited: null,
  onEscKeyDown: null,
  onOverlayClick: null,
  showCloseIcon: true,
  closeIcon: null,
  closeIconSize: 28,
  closeIconSvgPath: React__default.createElement("path", {
    d: "M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"
  }),
  classNames: {},
  styles: {},
  children: null,
  center: false,
  animationDuration: 500,
  blockScroll: true
};
reactLifecyclesCompat.polyfill(Modal);

module.exports = Modal;
//# sourceMappingURL=index.js.map
