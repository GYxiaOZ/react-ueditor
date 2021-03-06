"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Link = _interopRequireDefault(require("./Link"));

var _Modal = _interopRequireDefault(require("./Modal"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _VideoUploader = _interopRequireDefault(require("./VideoUploader"));

var _AudioUploader = _interopRequireDefault(require("./AudioUploader"));

var utils = _interopRequireWildcard(require("./utils"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MODE = {
  INTERNAL_MODAL: 'internal-modal',
  MODAL: 'modal',
  NORMAL: 'normal'
};

function isModalMode(mode) {
  return mode === MODE.INTERNAL_MODAL || mode === MODE.MODAL;
}

var simpleInsertCodeIcon = 'data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB9klEQVRYR+2Wy' + '23CQBCGZxwUASdKgA7IIdIukhF0QCoI6YAS6CB0EDpIOgjCEbs3nApCB+EEKFI80ToYgR/7IEhIEb4hvPN/8/jHi3DmB8+sDxeA/1GBdosNi' + 'TAMhHhxnamTVMDnfAEAo0CI0ckBOs1mbRKGy6LArdZtswSl+VdEDSmlAtk9prPqRW0FfMb66OGjt1o3iiB8zgcAMAiEqKfFo0p5QQSDQMpxU' + 'QKFAFvxJ4roQRfA52yCgOFUCAVy8NjEyAWwOaiUVImjauWTCO6KBtAUKwNgOrCfos95DxGepzNh08rcah4cdBFXID5nY0CsBTPRM01/Uewdg' + 'Ku4EmxztiTAoa398jRigGPEdfbTVSOthUkfTdOeDrrdfv20/UytSCeMKhAQ3HvrzY1u4WQs1mIhEk7y7GeCiN1TKc8J8R3Vj+9qWXmZvNW6a' + 'wOR2C+KqPsm5cQkmFlQ1corAeHVatOJZ8AVIu4jwmgqZO0v4irZnQtcIFzslwBuq7bLPKn0wR6whYjtZ9jxurLvtzmzwUwQrvYryjwBzF2hO' + 'ojYfgC9YCabpv6bxLWf4yII39J+NuLG+8BvkPJgOpND9TJjrH7t4Yet/VS1vNVmpLO205XsWPvpWuUGoD6/AJ1jtp/zjcg0YKf636kCpxLdj' + '3MBOHsFfgBLLaBN8r49lAAAAABJRU5ErkJggg==';
var uploadAudioIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACBUlEQVRYR+1VwXHbMBC8' + 'qyBxBXI6cCqwUkEOFUSuIHYFliuwUoGVCrAdWOlA6UCuIOpgPashNRQIOtJkHH2ID2eIA25vD7vndublZ85vI4CRgZGBkxmIiI9mdm9mMzNb' + 'AHgYknJEzM3sA4C7oZiTAEREmNmTuwvEi5lNSH4GsK4liIiFu38nuQRwU4s5CkBTtRILwAvJWzPbuvszyS8AVhFxZWbXAH50E0XE0t2/kbwB' + 'sCxBVAFExKW7TxRMUhfPVTVJXT4HsI2IaQHg1t0fFQNAAPcrpbQhqVZc/BWAaHb3XASq6pkqbf+XAPQ/pQQz+9qy0omdufsTyQRAMfvVYyCl' + 'pCSXLc1N5FpVF9QeMKA9tcrd/5D8CUCPdLc6/3vsDAGwnPP0rUFVY6BhYUVyAuBT0QYVsC7vfQ8AuzbknA/ubpjtFfYeANTCq5yzpNp9iJLq' + '9n8wIKpXOWdJtguA5dvQZpUB9dDdd1pXEMnfRz5CyfW+1HyrrJoX9ADUZEhyY2YykkEZds79KmnuyPOiLGTIiNQ/GZCWTGkhTyep78OAEck/' + 'Zo1f7CXbUUtPgtUW1KTX6Fg2KpPR5fL1AyseONfODhnZtKz+aAAdQ1GVYkFDaOPuMqzBYdRITxZeTX4ygNbVmtkgujWONXKrqxliVqu8PXDU' + 'NHzLEf91bwQwMjAycHYGXgGLbI8w70amwwAAAABJRU5ErkJggg==';

var ReactUeditor =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ReactUeditor, _React$Component);

  function ReactUeditor(props) {
    var _this;

    _classCallCheck(this, ReactUeditor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactUeditor).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "createScript", function (url) {
      var container = _this.props.container;
      var scriptTags = container.document.querySelectorAll('script');
      var len = scriptTags.length;
      var i = 0;

      var _url = container.location.origin + url;

      return new Promise(function (resolve, reject) {
        for (i = 0; i < len; i++) {
          var src = scriptTags[i].src;

          if (src && src === _url) {
            scriptTags[i].parentElement.removeChild(scriptTags[i]);
          }
        }

        var node = container.document.createElement('script');
        node.src = url;
        node.onload = resolve;
        container.document.body.appendChild(node);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "registerInternalPlugin", function (pluginName) {
      switch (pluginName) {
        case 'uploadImage':
          return _this.registerImageUpload();

        case 'insertCode':
          return _this.registerSimpleInsertCode();

        case 'uploadVideo':
          return _this.registerUploadVideo();

        case 'uploadAudio':
          return _this.registerUploadAudio();

        case 'insertLink':
          return _this.registerLink();

        default:
          return;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "registerPlugin", function (plugin) {
      var container = _this.props.container;
      var name = Math.random().toString(36).slice(2);
      container.UE.registerUI(name, function (ueditor, uiName) {
        var config = plugin(ueditor);

        if (!config.mode) {
          config.mode = MODE.MODAL;
        }

        var btn = new container.UE.ui.Button({
          name: uiName,
          title: config.menuText,
          cssRules: config.cssRules || '',
          onclick: isModalMode(config.mode) ? function () {
            _this.setState(_defineProperty({}, _this.getVisibleName(name), true));

            config.onIconClick && config.onIconClick();
          } : config.onIconClick
        });

        if (config.render) {
          _this.setState(function (prevState) {
            return {
              pluginsWithCustomRender: [].concat(_toConsumableArray(prevState.pluginsWithCustomRender), [_objectSpread({
                name: name
              }, config)])
            };
          });
        }

        return btn;
      }, undefined, _this.containerID);
    });

    _defineProperty(_assertThisInitialized(_this), "registerImageUpload", function () {
      return _this.registerPlugin(function () {
        return {
          menuText: '图片上传',
          cssRules: 'background-position: -726px -77px;',
          mode: MODE.NORMAL,
          onIconClick: function onIconClick() {
            _this.tempfileInput.click();
          }
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "registerSimpleInsertCode", function () {
      return _this.registerPlugin(function (ueditor) {
        return {
          menuText: '插入代码',
          cssRules: 'background: url(' + simpleInsertCodeIcon + ') !important; background-size: 20px 20px !important;',
          mode: MODE.NORMAL,
          onIconClick: function onIconClick() {
            ueditor.focus();
            ueditor.execCommand('insertcode');
          }
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "registerUploadVideo", function () {
      var _this$props = _this.props,
          uploadVideo = _this$props.uploadVideo,
          progress = _this$props.progress;
      return _this.registerPlugin(function (ueditor) {
        return {
          menuText: '上传视频',
          cssRules: 'background-position: -320px -20px;',
          mode: MODE.INTERNAL_MODAL,
          render: function render() {
            return _react["default"].createElement(_VideoUploader["default"], {
              upload: uploadVideo,
              progress: progress,
              onChange: _this.videoChange
            });
          },
          onConfirm: function onConfirm() {
            ueditor.execCommand('insertparagraph');
            ueditor.execCommand('inserthtml', _this.state.videoHtml, true);
            ueditor.execCommand('insertparagraph');
            ueditor.execCommand('insertparagraph');
          }
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "registerUploadAudio", function () {
      var _this$props2 = _this.props,
          uploadAudio = _this$props2.uploadAudio,
          progress = _this$props2.progress;
      return _this.registerPlugin(function (ueditor) {
        return {
          menuText: '上传音频',
          cssRules: 'background: url(' + uploadAudioIcon + ') !important; background-size: 20px 20px !important;',
          mode: MODE.INTERNAL_MODAL,
          render: function render() {
            return _react["default"].createElement(_AudioUploader["default"], {
              upload: uploadAudio,
              progress: progress,
              onChange: _this.audioChange
            });
          },
          onConfirm: function onConfirm() {
            ueditor.execCommand('insertparagraph');
            ueditor.execCommand('inserthtml', _this.state.audioHtml, true);
            ueditor.execCommand('insertparagraph');
            ueditor.execCommand('insertparagraph');
          }
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "registerLink", function () {
      return _this.registerPlugin(function (ueditor) {
        return {
          menuText: '超链接',
          cssRules: 'background-position: -504px 0px;',
          mode: MODE.INTERNAL_MODAL,
          render: function render() {
            return _react["default"].createElement(_Link["default"], {
              onChange: _this.linkChange
            });
          },
          onConfirm: function onConfirm() {
            ueditor && ueditor.execCommand('inserthtml', _this.state.linkHtml, true);
          }
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "videoChange", function (videoHtml) {
      _this.setState({
        videoHtml: videoHtml
      });
    });

    _defineProperty(_assertThisInitialized(_this), "audioChange", function (audioHtml) {
      _this.setState({
        audioHtml: audioHtml
      });
    });

    _defineProperty(_assertThisInitialized(_this), "linkChange", function (linkHtml) {
      _this.setState({
        linkHtml: linkHtml
      });
    });

    _defineProperty(_assertThisInitialized(_this), "uploadImage", function (e) {
      var uploadImage = _this.props.uploadImage;

      if (uploadImage) {
        var promise = uploadImage(e);

        if (!!promise && typeof promise.then == 'function') {
          promise.then(function (imageUrl) {
            if (imageUrl instanceof Array) {
              imageUrl.forEach(function (url) {
                _this.insertImage(url);
              });
            } else {
              _this.insertImage(imageUrl);
            }
          });
        }
      }

      _this.tempfileInput.value = '';
    });

    _defineProperty(_assertThisInitialized(_this), "insertImage", function (imageUrl) {
      if (_this.ueditor) {
        _this.ueditor.focus();

        _this.ueditor.execCommand('inserthtml', '<img src="' + imageUrl + '" />');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handlePasteImage", function () {
      var _this$props3 = _this.props,
          pasteImageStart = _this$props3.pasteImageStart,
          handlePasteImage = _this$props3.handlePasteImage,
          pasteImageDone = _this$props3.pasteImageDone;
      if (!handlePasteImage) return;

      var html = _this.ueditor.getContent();

      var images = utils.extractImageSource(html);
      if (Object.prototype.toString.call(images) !== '[object Array]') return;
      _this.pasteImageAmount += images.length;
      pasteImageStart && pasteImageStart(_this.pasteImageAmount);
      images.forEach(function (src) {
        var promise = handlePasteImage(src);

        if (!!promise && typeof promise.then == 'function') {
          promise.then(function (newSrc) {
            --_this.pasteImageAmount;

            if (_this.pasteImageAmount === 0) {
              pasteImageDone && pasteImageDone();
            }

            var newHtml = utils.replaceImageSource(_this.ueditor.getContent(), src, newSrc);

            _this.ueditor.setContent(newHtml);
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getVisibleName", function (name) {
      return name + 'VisibleModal';
    });

    _defineProperty(_assertThisInitialized(_this), "getRegisterUIName", function (name) {
      return "".concat(name, "-").concat(_this.containerID);
    });

    _defineProperty(_assertThisInitialized(_this), "initEditor", function () {
      var _this$props4 = _this.props,
          config = _this$props4.config,
          plugins = _this$props4.plugins,
          onChange = _this$props4.onChange,
          value = _this$props4.value,
          getRef = _this$props4.getRef,
          onReady = _this$props4.onReady,
          container = _this$props4.container;

      if (plugins && Array.isArray(plugins)) {
        plugins.forEach(function (plugin) {
          if (typeof plugin === 'string') {
            return _this.registerInternalPlugin(plugin);
          } else {
            return _this.registerPlugin(plugin);
          }
        });
      } // 即将废弃


      _this.state.extendControls.forEach(function (control) {
        container.UE.registerUI(_this.getRegisterUIName(control.name), function (editor, uiName) {
          var btn = new container.UE.ui.Button({
            name: uiName,
            title: control.menuText,
            cssRules: control.cssRules ? control.cssRules : '',
            onclick: function onclick() {
              _this.setState(_defineProperty({}, _this.getVisibleName(control.name), true));
            }
          });
          return btn;
        }, undefined, _this.containerID);
      });

      _this.ueditor = config ? container.UE.getEditor(_this.containerID, config) : container.UE.getEditor(_this.containerID);
      _this.ueditor._react_ref = _assertThisInitialized(_this);
      getRef && getRef(_this.ueditor);

      _this.ueditor.ready(function () {
        var domUtils = container.UE.dom.domUtils; // 添加剪切时的监听事件，修复剪切不能触发onChang的bug

        domUtils.on(_this.ueditor.body, 'cut', function () {
          setTimeout(function () {
            var content = _this.ueditor.getContent();

            _this.content = _this.ueditor.getContent();
            onChange && onChange(content);
          });
        });

        _this.ueditor.addListener('contentChange', function () {
          // 由 componentWillReceiveProps 导致的 contentChange 不需要通知父组件
          if (_this.isContentChangedByWillReceiveProps) {
            _this.isContentChangedByWillReceiveProps = false;
          } else {
            _this.content = _this.ueditor.getContent();
            onChange && onChange(_this.content);
          }
        });

        _this.ueditor.addListener('afterpaste', function () {
          _this.handlePasteImage();
        });

        if (_this.isContentChangedByWillReceiveProps) {
          _this.isContentChangedByWillReceiveProps = false;

          _this.ueditor.setContent(_this.content);
        } else {
          _this.ueditor.setContent(value);
        }

        onReady && onReady();
      });
    });

    _this.content = props.value || ''; // 存储编辑器的实时数据，用于传递给父组件

    _this.ueditor = null;
    _this.isContentChangedByWillReceiveProps = false;
    _this.tempfileInput = null;
    _this.containerID = 'reactueditor' + Math.random().toString(36).substr(2);
    _this.fileInputID = 'fileinput' + Math.random().toString(36).substr(2);
    _this.pasteImageAmount = 0;
    _this.state = {
      videoSource: '',
      audioSource: '',
      extendControls: _this.props.extendControls ? _this.props.extendControls : [],
      videoHtml: '',
      audioHtml: '',
      pluginsWithCustomRender: []
    };
    return _this;
  }

  _createClass(ReactUeditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props5 = this.props,
          ueditorPath = _this$props5.ueditorPath,
          container = _this$props5.container;

      if (container.UE) {
        this.tempfileInput = container.document.getElementById(this.fileInputID);
        this.initEditor();
        return;
      }

      if (!container.UE && !container.UE_LOADING_PROMISE) {
        container.UE_LOADING_PROMISE = this.createScript(ueditorPath + '/ueditor.config.js').then(function () {
          return _this2.props.debug ? _this2.createScript(ueditorPath + '/ueditor.all.js') : _this2.createScript(ueditorPath + '/ueditor.all.min.js');
        });
      }

      container.UE_LOADING_PROMISE.then(function () {
        _this2.tempfileInput = container.document.getElementById(_this2.fileInputID);

        _this2.initEditor();
      });
    }
    /**
     * 这里存在两种情况会改变编辑器的内容：
     * 1. 父组件初始化传递的 value。父组件 value 的获取是异步的，因此会触发一次 componentWillReceiveProps，这种情况不需要将更新再通知父组件
     * 2. 用户对编辑器进行编辑
     */

  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      if ('value' in nextProps && this.props.value !== nextProps.value && this.content !== nextProps.value) {
        this.isContentChangedByWillReceiveProps = true;
        this.content = nextProps.value;

        if (this.ueditor) {
          this.ueditor.ready(function () {
            _this3.ueditor.setContent(nextProps.value);
          });
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.ueditor) {
        this.ueditor.destroy();
      }

      var container = this.props.container; // 将自定义控件中有id的清空，解决卸载后不能重新渲染自定义控件的问题

      if (container && container.UE) {
        for (var key in container.UE._customizeUI) {
          if (container.UE._customizeUI[key].id) {
            delete container.UE._customizeUI[key];
          }
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var extendControls = this.state.extendControls;
      var multipleImagesUpload = this.props.multipleImagesUpload;
      return _react["default"].createElement("div", null, _react["default"].createElement("script", {
        id: this.containerID,
        name: this.containerID,
        type: "text/plain"
      }), _react["default"].createElement("input", {
        type: "file",
        id: this.fileInputID,
        onChange: this.uploadImage,
        style: {
          visibility: 'hidden',
          width: 0,
          height: 0,
          margin: 0,
          padding: 0,
          fontSize: 0
        },
        multiple: multipleImagesUpload
      }), this.state.pluginsWithCustomRender.map(function (plugin) {
        var visible = !!_this4.state[_this4.getVisibleName(plugin.name)];

        var onClose = function onClose() {
          if (isModalMode(plugin.mode)) {
            _this4.setState(_defineProperty({}, _this4.getVisibleName(plugin.name), false));
          }

          plugin.onClose && typeof plugin.onClose === 'function' && plugin.onClose();
        };

        if (plugin.mode === MODE.INTERNAL_MODAL) {
          return _react["default"].createElement(_Modal["default"], {
            key: plugin.name,
            title: plugin.title || plugin.menuText,
            zIndex: plugin.zIndex,
            alignStyle: plugin.alignStyle,
            visible: visible,
            beforeClose: plugin.beforeClose,
            onClose: onClose,
            onConfirm: plugin.onConfirm,
            component: plugin.render()
          });
        } else if (plugin.mode === MODE.MODAL) {
          return _react["default"].createElement("div", {
            key: plugin.name
          }, plugin.render(visible, onClose));
        } else if (plugin.mode === MODE.NORMAL) {
          return _react["default"].createElement("div", {
            key: plugin.name
          }, plugin.render());
        }
      }), // 即将废弃
      extendControls.map(function (control) {
        return _react["default"].createElement(_Modal["default"], {
          key: control.name + _this4.containerID,
          name: control.name,
          menuText: control.menuText,
          title: control.title,
          zIndex: control.zIndex,
          alignStyle: control.alignStyle,
          visible: _this4.state[_this4.getVisibleName(control.name)] ? _this4.state[_this4.getVisibleName(control.name)] : false,
          beforeClose: control.beforeClose,
          onClose: function onClose() {
            _this4.setState(_defineProperty({}, _this4.getVisibleName(control.name), false));
          },
          onConfirm: control.onConfirm,
          component: control.component
        });
      }));
    }
  }]);

  return ReactUeditor;
}(_react["default"].Component);

_defineProperty(ReactUeditor, "propTypes", {
  value: _propTypes["default"].string,
  ueditorPath: _propTypes["default"].string.isRequired,
  plugins: _propTypes["default"].array,
  onChange: _propTypes["default"].func,
  uploadImage: _propTypes["default"].func,
  getRef: _propTypes["default"].func,
  multipleImagesUpload: _propTypes["default"].bool,
  onReady: _propTypes["default"].func,
  pasteImageStart: _propTypes["default"].func,
  handlePasteImage: _propTypes["default"].func,
  pasteImageDone: _propTypes["default"].func,
  extendControls: _propTypes["default"].array,
  debug: _propTypes["default"].bool,
  container: _propTypes["default"].object
});

_defineProperty(ReactUeditor, "defaultProps", {
  value: '',
  multipleImagesUpload: false,
  extendControls: [],
  debug: false,
  container: window
});

var _default = ReactUeditor;
exports["default"] = _default;