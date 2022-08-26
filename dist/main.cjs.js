'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

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
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
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
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
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
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var EventEmitter = /*#__PURE__*/function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this._events = new Map();
  } // Key functions.


  _createClass(EventEmitter, [{
    key: "on",
    value: function on(_ref) {
      var name = _ref.name,
          cb = _ref.cb;

      this._addEvent(name, cb);
    }
  }, {
    key: "off",
    value: function off(_ref2) {
      var name = _ref2.name,
          cb = _ref2.cb;

      this._removeCallback(name, cb);
    }
  }, {
    key: "emit",
    value: function emit(_ref3) {
      var name = _ref3.name,
          _ref3$data = _ref3.data,
          data = _ref3$data === void 0 ? {} : _ref3$data;

      this._triggerEvent(name, data);
    }
  }, {
    key: "hasEvent",
    value: function hasEvent(_ref4) {
      var name = _ref4.name;
      return this._events.has(name);
    } // Private helpers.

  }, {
    key: "_createEvent",
    value: function _createEvent(name) {
      this._events.set(name, []);
    }
  }, {
    key: "_addEvent",
    value: function _addEvent(name, cb) {
      if (typeof cb !== "function") {
        throw new Error("Can't add callback to event (".concat(name, ")! Callback is not a function."));
      }

      if (!this.hasEvent({
        name: name
      })) {
        this._createEvent(name);
      }

      this._events.get(name).push({
        cb: cb
      });
    }
  }, {
    key: "_removeCallback",
    value: function _removeCallback(name, rmCb) {
      if (!this.hasEvent({
        name: name
      })) {
        return;
      }

      var filter = function filter(entry) {
        return entry.cb !== rmCb;
      };

      var filteredEvents = this._events.get(name).filter(filter);

      this._events.set(name, filteredEvents);
    }
  }, {
    key: "_triggerEvent",
    value: function _triggerEvent(name, data) {
      if (!this.hasEvent({
        name: name
      })) {
        return;
      }

      this._events.get(name).forEach(function (entry) {
        entry.cb(data);
      });
    }
  }]);

  return EventEmitter;
}();

var _default = /*#__PURE__*/function (_EventEmitter) {
  _inherits(_default, _EventEmitter);

  var _super = _createSuper(_default);

  function _default(options) {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this);
    _this.mAttr = 'data-' + options.dataName;
    _this.mCaptureEvents = ['mouseenter', 'mouseleave'];
    _this.el = options.el;
    return _this;
  }

  _createClass(_default, [{
    key: "mInit",
    value: function mInit(modules) {
      var _this2 = this;

      this.modules = modules;
      this.mCheckEventTarget = this.mCheckEventTarget.bind(this);

      if (this.events) {
        Object.keys(this.events).forEach(function (event) {
          return _this2.mAddEvent(event);
        });
      }
    }
  }, {
    key: "mUpdate",
    value: function mUpdate(modules) {
      this.modules = modules;
    }
  }, {
    key: "mDestroy",
    value: function mDestroy() {
      var _this3 = this;

      if (this.events) {
        Object.keys(this.events).forEach(function (event) {
          return _this3.mRemoveEvent(event);
        });
      }
    }
  }, {
    key: "mAddEvent",
    value: function mAddEvent(event) {
      var capture = this.mCaptureEvents.includes(event) ? true : false;
      this.el.addEventListener(event, this.mCheckEventTarget, capture);
    }
  }, {
    key: "mRemoveEvent",
    value: function mRemoveEvent(event) {
      var capture = this.mCaptureEvents.includes(event) ? true : false;
      this.el.removeEventListener(event, this.mCheckEventTarget, capture);
    }
  }, {
    key: "mCheckEventTarget",
    value: function mCheckEventTarget(e) {
      var event = this.events[e.type];

      if (typeof event === "string") {
        this[event](e);
      } else {
        var data = '[' + this.mAttr + ']';
        var target = e.target;

        if (this.mCaptureEvents.includes(e.type)) {
          if (target.matches(data)) {
            this.mCallEventMethod(e, event, target);
          }
        } else {
          while (target && target !== document) {
            if (target.matches(data)) {
              if (this.mCallEventMethod(e, event, target)) {
                break;
              }
            }

            target = target.parentNode;
          }
        }
      }
    }
  }, {
    key: "mCallEventMethod",
    value: function mCallEventMethod(e, event, target) {
      var name = target.getAttribute(this.mAttr);

      if (event.hasOwnProperty(name)) {
        var method = event[name];

        if (!e.hasOwnProperty('currentTarget')) {
          Object.defineProperty(e, 'currentTarget', {
            value: target
          });
        }

        if (!e.hasOwnProperty('curTarget')) {
          Object.defineProperty(e, 'curTarget', {
            value: target
          }); // For IE 11
        }

        this[method](e);
        return true;
      }

      return false;
    }
  }, {
    key: "$",
    value: function $(query, context) {
      var classIndex = query.indexOf('.');
      var idIndex = query.indexOf('#');
      var attrIndex = query.indexOf('[');
      var indexes = [classIndex, idIndex, attrIndex].filter(function (index) {
        return index != -1;
      });
      var index = false;
      var name = query;
      var more = '';
      var parent = this.el;

      if (indexes.length) {
        index = Math.min.apply(Math, _toConsumableArray(indexes));
        name = query.slice(0, index);
        more = query.slice(index);
      }

      if (_typeof(context) == 'object') {
        parent = context;
      }

      return parent.querySelectorAll('[' + this.mAttr + '=' + name + ']' + more);
    }
  }, {
    key: "parent",
    value: function parent(query, context) {
      var data = '[' + this.mAttr + '=' + query + ']';
      var parent = context.parentNode;

      while (parent && parent !== document) {
        if (parent.matches(data)) {
          return parent;
        }

        parent = parent.parentNode;
      }
    }
  }, {
    key: "getData",
    value: function getData(name, context) {
      var target = context || this.el;
      return target.getAttribute(this.mAttr + '-' + name);
    }
  }, {
    key: "setData",
    value: function setData(name, value, context) {
      var target = context || this.el;
      return target.setAttribute(this.mAttr + '-' + name, value);
    }
  }, {
    key: "call",
    value: function call(func, args, mod, id) {
      var _this4 = this;

      if (args && !mod) {
        mod = args;
        args = false;
      }

      if (mod === "*") {
        return Object.keys(this.modules).map(function (_mod) {
          return Object.keys(_this4.modules[_mod]).map(function (id) {
            return _this4.modules[_mod][id][func](args);
          });
        });
      }

      if (this.modules[mod]) {
        if (id) {
          if (this.modules[mod][id]) {
            return this.modules[mod][id][func](args);
          }
        } else {
          return Object.keys(this.modules[mod]).map(function (id) {
            return _this4.modules[mod][id][func](args);
          });
        }
      }

      return null;
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(e, mod, func, id) {
      var _this5 = this;

      if (this.modules[mod]) {
        if (id) {
          this.modules[mod][id].el.addEventListener(e, function (o) {
            return func(o);
          });
        } else {
          Object.keys(this.modules[mod]).forEach(function (i) {
            _this5.modules[mod][i].el.addEventListener(e, function (o) {
              return func(o);
            });
          });
        }
      }
    }
  }, {
    key: "init",
    value: function init() {}
  }, {
    key: "destroy",
    value: function destroy() {}
  }]);

  return _default;
}(EventEmitter);

var _default$1 = /*#__PURE__*/function () {
  function _default(options) {
    _classCallCheck(this, _default);

    this.app;
    this.modules = options.modules;
    this.currentModules = {};
    this.activeModules = {};
    this.newModules = {};
    this.moduleId = 0;
  }

  _createClass(_default, [{
    key: "init",
    value: function init(app, scope) {
      var _this = this;

      var container = scope || document;
      var elements = container.querySelectorAll('*');

      if (app && !this.app) {
        this.app = app;
      }

      this.activeModules['app'] = {
        'app': this.app
      };
      elements.forEach(function (el) {
        Array.from(el.attributes).forEach(function (i) {
          if (i.name.startsWith('data-module')) {
            var moduleExists = false;
            var dataName = i.name.split('-').splice(2);

            var moduleName = _this.toCamel(dataName);

            if (_this.modules[moduleName]) {
              moduleExists = true;
            } else if (_this.modules[_this.toUpper(moduleName)]) {
              moduleName = _this.toUpper(moduleName);
              moduleExists = true;
            }

            if (moduleExists) {
              var options = {
                el: el,
                name: moduleName,
                dataName: dataName.join('-')
              };
              var module = new _this.modules[moduleName](options);
              var id = i.value;

              if (!id) {
                _this.moduleId++;
                id = 'm' + _this.moduleId;
                el.setAttribute(i.name, id);
              }

              _this.addActiveModule(moduleName, id, module);

              var moduleId = moduleName + '-' + id;

              if (scope) {
                _this.newModules[moduleId] = module;
              } else {
                _this.currentModules[moduleId] = module;
              }
            }
          }
        });
      });
      Object.entries(this.currentModules).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            id = _ref2[0],
            module = _ref2[1];

        if (scope) {
          var split = id.split('-');
          var moduleName = split.shift();
          var moduleId = split.pop();

          _this.addActiveModule(moduleName, moduleId, module);
        } else {
          _this.initModule(module);
        }
      });
    }
  }, {
    key: "initModule",
    value: function initModule(module) {
      module.mInit(this.activeModules);
      module.init();
    }
  }, {
    key: "addActiveModule",
    value: function addActiveModule(name, id, module) {
      if (this.activeModules[name]) {
        Object.assign(this.activeModules[name], _defineProperty({}, id, module));
      } else {
        this.activeModules[name] = _defineProperty({}, id, module);
      }
    }
  }, {
    key: "update",
    value: function update(scope) {
      var _this2 = this;

      this.init(this.app, scope);
      Object.entries(this.currentModules).forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            id = _ref4[0],
            module = _ref4[1];

        module.mUpdate(_this2.activeModules);
      });
      Object.entries(this.newModules).forEach(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            id = _ref6[0],
            module = _ref6[1];

        _this2.initModule(module);
      });
      Object.assign(this.currentModules, this.newModules);
    }
  }, {
    key: "destroy",
    value: function destroy(scope) {
      if (scope) {
        this.destroyScope(scope);
      } else {
        this.destroyModules();
      }
    }
  }, {
    key: "destroyScope",
    value: function destroyScope(scope) {
      var _this3 = this;

      var elements = scope.querySelectorAll('*');
      elements.forEach(function (el) {
        Array.from(el.attributes).forEach(function (i) {
          if (i.name.startsWith('data-module')) {
            var id = i.value;
            var dataName = i.name.split('-').splice(2);
            var moduleName = _this3.toCamel(dataName) + '-' + id;
            var moduleExists = false;

            if (_this3.currentModules[moduleName]) {
              moduleExists = true;
            } else if (_this3.currentModules[_this3.toUpper(moduleName)]) {
              moduleName = _this3.toUpper(moduleName);
              moduleExists = true;
            }

            if (moduleExists) {
              _this3.destroyModule(_this3.currentModules[moduleName]);

              delete _this3.currentModules[moduleName];
            }
          }
        });
      });
      this.activeModules = {};
      this.newModules = {};
    }
  }, {
    key: "destroyModules",
    value: function destroyModules() {
      var _this4 = this;

      Object.entries(this.currentModules).forEach(function (_ref7) {
        var _ref8 = _slicedToArray(_ref7, 2),
            id = _ref8[0],
            module = _ref8[1];

        _this4.destroyModule(module);
      });
      this.currentModules = [];
    }
  }, {
    key: "destroyModule",
    value: function destroyModule(module) {
      module.mDestroy();
      module.destroy();
    }
  }, {
    key: "toCamel",
    value: function toCamel(arr) {
      var _this5 = this;

      return arr.reduce(function (a, b) {
        return a + _this5.toUpper(b);
      });
    }
  }, {
    key: "toUpper",
    value: function toUpper(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  }]);

  return _default;
}();

exports.Module = _default;
exports.default = _default$1;
