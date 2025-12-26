(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // node_modules/tslib/tslib.es6.mjs
  var tslib_es6_exports = {};
  __export(tslib_es6_exports, {
    __addDisposableResource: () => __addDisposableResource,
    __assign: () => __assign,
    __asyncDelegator: () => __asyncDelegator,
    __asyncGenerator: () => __asyncGenerator,
    __asyncValues: () => __asyncValues,
    __await: () => __await,
    __awaiter: () => __awaiter,
    __classPrivateFieldGet: () => __classPrivateFieldGet,
    __classPrivateFieldIn: () => __classPrivateFieldIn,
    __classPrivateFieldSet: () => __classPrivateFieldSet,
    __createBinding: () => __createBinding,
    __decorate: () => __decorate,
    __disposeResources: () => __disposeResources,
    __esDecorate: () => __esDecorate,
    __exportStar: () => __exportStar,
    __extends: () => __extends,
    __generator: () => __generator,
    __importDefault: () => __importDefault,
    __importStar: () => __importStar,
    __makeTemplateObject: () => __makeTemplateObject,
    __metadata: () => __metadata,
    __param: () => __param,
    __propKey: () => __propKey,
    __read: () => __read,
    __rest: () => __rest,
    __rewriteRelativeImportExtension: () => __rewriteRelativeImportExtension,
    __runInitializers: () => __runInitializers,
    __setFunctionName: () => __setFunctionName,
    __spread: () => __spread,
    __spreadArray: () => __spreadArray,
    __spreadArrays: () => __spreadArrays,
    __values: () => __values,
    default: () => tslib_es6_default
  });
  function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  }
  function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  }
  function __param(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  }
  function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
      if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
      return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function(f) {
        if (done) throw new TypeError("Cannot add initializers after decoration has completed");
        extraInitializers.push(accept(f || null));
      };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
        if (result === void 0) continue;
        if (result === null || typeof result !== "object") throw new TypeError("Object expected");
        if (_ = accept(result.get)) descriptor.get = _;
        if (_ = accept(result.set)) descriptor.set = _;
        if (_ = accept(result.init)) initializers.unshift(_);
      } else if (_ = accept(result)) {
        if (kind === "field") initializers.unshift(_);
        else descriptor[key] = _;
      }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
  }
  function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
  }
  function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
  }
  function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
  }
  function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
  }
  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1) throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  }
  function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
  }
  function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
      next: function() {
        if (o && i >= o.length) o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  }
  function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
    return ar;
  }
  function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  }
  function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
  }
  function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
  }
  function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
      return this;
    }, i;
    function awaitReturn(f) {
      return function(v) {
        return Promise.resolve(v).then(f, reject);
      };
    }
    function verb(n, f) {
      if (g[n]) {
        i[n] = function(v) {
          return new Promise(function(a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
        if (f) i[n] = f(i[n]);
      }
    }
    function resume(n, v) {
      try {
        step(g[n](v));
      } catch (e) {
        settle(q[0][3], e);
      }
    }
    function step(r) {
      r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
      resume("next", value);
    }
    function reject(value) {
      resume("throw", value);
    }
    function settle(f, v) {
      if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
  }
  function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
      throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
      return this;
    }, i;
    function verb(n, f) {
      i[n] = o[n] ? function(v) {
        return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
      } : f;
    }
  }
  function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
      return this;
    }, i);
    function verb(n) {
      i[n] = o[n] && function(v) {
        return new Promise(function(resolve, reject) {
          v = o[n](v), settle(resolve, reject, v.done, v.value);
        });
      };
    }
    function settle(resolve, reject, d, v) {
      Promise.resolve(v).then(function(v2) {
        resolve({ value: v2, done: d });
      }, reject);
    }
  }
  function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  }
  function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
      for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
  }
  function __importDefault(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  }
  function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  }
  function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  }
  function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
  }
  function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
      if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
      var dispose, inner;
      if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
      }
      if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
        if (async) inner = dispose;
      }
      if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
      if (inner) dispose = function() {
        try {
          inner.call(this);
        } catch (e) {
          return Promise.reject(e);
        }
      };
      env.stack.push({ value, dispose, async });
    } else if (async) {
      env.stack.push({ async: true });
    }
    return value;
  }
  function __disposeResources(env) {
    function fail(e) {
      env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
      env.hasError = true;
    }
    var r, s = 0;
    function next() {
      while (r = env.stack.pop()) {
        try {
          if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
          if (r.dispose) {
            var result = r.dispose.call(r.value);
            if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
          } else s |= 1;
        } catch (e) {
          fail(e);
        }
      }
      if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
      if (env.hasError) throw env.error;
    }
    return next();
  }
  function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
        return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
      });
    }
    return path;
  }
  var extendStatics, __assign, __createBinding, __setModuleDefault, ownKeys, _SuppressedError, tslib_es6_default;
  var init_tslib_es6 = __esm({
    "node_modules/tslib/tslib.es6.mjs"() {
      extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      __assign = function() {
        __assign = Object.assign || function __assign2(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      }) : (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }) : function(o, v) {
        o["default"] = v;
      };
      ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
      };
      tslib_es6_default = {
        __extends,
        __assign,
        __rest,
        __decorate,
        __param,
        __esDecorate,
        __runInitializers,
        __propKey,
        __setFunctionName,
        __metadata,
        __awaiter,
        __generator,
        __createBinding,
        __exportStar,
        __values,
        __read,
        __spread,
        __spreadArrays,
        __spreadArray,
        __await,
        __asyncGenerator,
        __asyncDelegator,
        __asyncValues,
        __makeTemplateObject,
        __importStar,
        __importDefault,
        __classPrivateFieldGet,
        __classPrivateFieldSet,
        __classPrivateFieldIn,
        __addDisposableResource,
        __disposeResources,
        __rewriteRelativeImportExtension
      };
    }
  });

  // node_modules/@forge/bridge/out/router/targets.js
  var require_targets = __commonJS({
    "node_modules/@forge/bridge/out/router/targets.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.NavigationTarget = void 0;
      exports.NavigationTarget = {
        ContentView: "contentView",
        ContentEdit: "contentEdit",
        ContentList: "contentList",
        SpaceView: "spaceView",
        Module: "module",
        UserProfile: "userProfile",
        Dashboard: "dashboard",
        Issue: "issue",
        ProjectSettingsDetails: "projectSettingsDetails"
      };
    }
  });

  // node_modules/@forge/bridge/out/errors.js
  var require_errors = __commonJS({
    "node_modules/@forge/bridge/out/errors.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BridgeAPIError = void 0;
      var BridgeAPIError = class extends Error {
      };
      exports.BridgeAPIError = BridgeAPIError;
    }
  });

  // node_modules/@forge/bridge/out/bridge.js
  var require_bridge = __commonJS({
    "node_modules/@forge/bridge/out/bridge.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getCallBridge = void 0;
      var errors_1 = require_errors();
      function isBridgeAvailable(bridge) {
        return !!(bridge === null || bridge === void 0 ? void 0 : bridge.callBridge);
      }
      var getCallBridge = () => {
        if (!isBridgeAvailable(window.__bridge)) {
          throw new errors_1.BridgeAPIError(`
      Unable to establish a connection with the Custom UI bridge.
      If you are trying to run your app locally, Forge apps only work in the context of Atlassian products. Refer to https://go.atlassian.com/forge-tunneling-with-custom-ui for how to tunnel when using a local development server.
    `);
        }
        return window.__bridge.callBridge;
      };
      exports.getCallBridge = getCallBridge;
    }
  });

  // node_modules/@forge/bridge/out/utils/index.js
  var require_utils = __commonJS({
    "node_modules/@forge/bridge/out/utils/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.withRateLimiter = void 0;
      var errors_1 = require_errors();
      var withRateLimiter = (wrappedFn, maxOps, intervalInMs, exceededErrorMessage) => {
        let start = Date.now();
        let numOps = 0;
        return async (...args) => {
          const now = Date.now();
          const elapsed = now - start;
          if (elapsed > intervalInMs) {
            start = now;
            numOps = 0;
          }
          if (numOps >= maxOps) {
            throw new errors_1.BridgeAPIError(exceededErrorMessage || "Too many invocations.");
          }
          numOps = numOps + 1;
          return wrappedFn(...args);
        };
      };
      exports.withRateLimiter = withRateLimiter;
    }
  });

  // node_modules/@forge/bridge/out/invoke/invoke.js
  var require_invoke = __commonJS({
    "node_modules/@forge/bridge/out/invoke/invoke.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.makeInvoke = exports.invoke = void 0;
      var bridge_1 = require_bridge();
      var errors_1 = require_errors();
      var utils_1 = require_utils();
      var callBridge = (0, bridge_1.getCallBridge)();
      var validatePayload = (payload) => {
        if (!payload)
          return;
        if (Object.values(payload).some((val) => typeof val === "function")) {
          throw new errors_1.BridgeAPIError("Passing functions as part of the payload is not supported!");
        }
      };
      var _invoke = (functionKey, payload) => {
        if (typeof functionKey !== "string") {
          throw new errors_1.BridgeAPIError("functionKey must be a string!");
        }
        validatePayload(payload);
        return callBridge("invoke", { functionKey, payload });
      };
      exports.invoke = (0, utils_1.withRateLimiter)(_invoke, 500, 1e3 * 25, "Resolver calls are rate limited at 500req/25s");
      function makeInvoke() {
        return exports.invoke;
      }
      exports.makeInvoke = makeInvoke;
    }
  });

  // node_modules/@forge/bridge/out/invoke/index.js
  var require_invoke2 = __commonJS({
    "node_modules/@forge/bridge/out/invoke/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      tslib_1.__exportStar(require_invoke(), exports);
    }
  });

  // node_modules/@forge/bridge/out/invoke-endpoint/invoke-endpoint.js
  var require_invoke_endpoint = __commonJS({
    "node_modules/@forge/bridge/out/invoke-endpoint/invoke-endpoint.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports._invokeEndpointFn = exports.InvokeType = void 0;
      var bridge_1 = require_bridge();
      var errors_1 = require_errors();
      var utils_1 = require_utils();
      var MAX_NUM_OPERATIONS = 500;
      var OPERATION_INTERVAL_SEC = 25;
      var OPERATION_INTERVAL_MS = 1e3 * OPERATION_INTERVAL_SEC;
      var InvokeType;
      (function(InvokeType2) {
        InvokeType2["REMOTE"] = "Remote";
        InvokeType2["SERVICE"] = "Container";
      })(InvokeType = exports.InvokeType || (exports.InvokeType = {}));
      var callBridge = (0, bridge_1.getCallBridge)();
      var validatePayload = (payload) => {
        if (!payload)
          return;
        if (Object.values(payload).some((val) => typeof val === "function")) {
          throw new errors_1.BridgeAPIError("Passing functions as part of the payload is not supported!");
        }
      };
      var _setupInvokeEndpointFn = (invokeType) => async (input) => {
        validatePayload(input);
        const callBridgePayload = {
          ...input,
          invokeType: `ui-${invokeType.toLowerCase()}-fetch`
        };
        const bridgeResponse = await callBridge("invoke", callBridgePayload);
        const { success, payload, error } = bridgeResponse !== null && bridgeResponse !== void 0 ? bridgeResponse : {};
        const response = { ...success ? payload : error };
        if (response && response.headers) {
          for (const header in response.headers) {
            if (Array.isArray(response.headers[header])) {
              response.headers[header] = response.headers[header].join(",");
            }
          }
        }
        return response;
      };
      var _invokeEndpointFn = (invokeType) => {
        const invokeEndpointFn = _setupInvokeEndpointFn(invokeType);
        return (0, utils_1.withRateLimiter)(invokeEndpointFn, MAX_NUM_OPERATIONS, OPERATION_INTERVAL_MS, `${invokeType} invocation calls are rate limited at ${MAX_NUM_OPERATIONS}/${OPERATION_INTERVAL_SEC}s`);
      };
      exports._invokeEndpointFn = _invokeEndpointFn;
    }
  });

  // node_modules/@forge/bridge/out/invoke-endpoint/invoke-remote.js
  var require_invoke_remote = __commonJS({
    "node_modules/@forge/bridge/out/invoke-endpoint/invoke-remote.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.invokeRemote = void 0;
      var invoke_endpoint_1 = require_invoke_endpoint();
      var invokeRemote = (input) => {
        const invokeEndpoint = (0, invoke_endpoint_1._invokeEndpointFn)(invoke_endpoint_1.InvokeType.REMOTE);
        return invokeEndpoint(input);
      };
      exports.invokeRemote = invokeRemote;
    }
  });

  // node_modules/@forge/bridge/out/invoke-endpoint/invoke-service.js
  var require_invoke_service = __commonJS({
    "node_modules/@forge/bridge/out/invoke-endpoint/invoke-service.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.invokeService = void 0;
      var invoke_endpoint_1 = require_invoke_endpoint();
      var invokeService = (input) => {
        const invokeEndpoint = (0, invoke_endpoint_1._invokeEndpointFn)(invoke_endpoint_1.InvokeType.SERVICE);
        return invokeEndpoint(input);
      };
      exports.invokeService = invokeService;
    }
  });

  // node_modules/@forge/bridge/out/invoke-endpoint/index.js
  var require_invoke_endpoint2 = __commonJS({
    "node_modules/@forge/bridge/out/invoke-endpoint/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      tslib_1.__exportStar(require_invoke_remote(), exports);
      tslib_1.__exportStar(require_invoke_service(), exports);
    }
  });

  // node_modules/@forge/bridge/out/view/submit.js
  var require_submit = __commonJS({
    "node_modules/@forge/bridge/out/view/submit.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.submit = void 0;
      var bridge_1 = require_bridge();
      var errors_1 = require_errors();
      var callBridge = (0, bridge_1.getCallBridge)();
      var submit = async (payload) => {
        const success = await callBridge("submit", payload);
        if (success === false) {
          throw new errors_1.BridgeAPIError("this resource's view is not submittable.");
        }
      };
      exports.submit = submit;
    }
  });

  // node_modules/@forge/bridge/out/view/close.js
  var require_close = __commonJS({
    "node_modules/@forge/bridge/out/view/close.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.close = void 0;
      var bridge_1 = require_bridge();
      var errors_1 = require_errors();
      var callBridge = (0, bridge_1.getCallBridge)();
      var close = async (payload) => {
        try {
          const success = await callBridge("close", payload);
          if (success === false) {
            throw new errors_1.BridgeAPIError("this resource's view is not closable.");
          }
        } catch (e) {
          throw new errors_1.BridgeAPIError("this resource's view is not closable.");
        }
      };
      exports.close = close;
    }
  });

  // node_modules/@forge/bridge/out/view/open.js
  var require_open = __commonJS({
    "node_modules/@forge/bridge/out/view/open.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.open = void 0;
      var bridge_1 = require_bridge();
      var errors_1 = require_errors();
      var callBridge = (0, bridge_1.getCallBridge)();
      var open = async () => {
        try {
          const success = await callBridge("open");
          if (success === false) {
            throw new errors_1.BridgeAPIError("this resource's view is not openable.");
          }
        } catch (e) {
          throw new errors_1.BridgeAPIError("this resource's view is not openable.");
        }
      };
      exports.open = open;
    }
  });

  // node_modules/@forge/bridge/out/view/refresh.js
  var require_refresh = __commonJS({
    "node_modules/@forge/bridge/out/view/refresh.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.refresh = void 0;
      var bridge_1 = require_bridge();
      var errors_1 = require_errors();
      var callBridge = (0, bridge_1.getCallBridge)();
      var refresh = async (payload) => {
        const success = await callBridge("refresh", payload);
        if (success === false) {
          throw new errors_1.BridgeAPIError("this resource's view is not refreshable.");
        }
      };
      exports.refresh = refresh;
    }
  });

  // node_modules/@forge/bridge/out/view/createHistory.js
  var require_createHistory = __commonJS({
    "node_modules/@forge/bridge/out/view/createHistory.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createHistory = void 0;
      var bridge_1 = require_bridge();
      var callBridge = (0, bridge_1.getCallBridge)();
      var createHistory = async () => {
        const history = await callBridge("createHistory");
        history.listen((location2) => {
          history.location = location2;
        });
        return history;
      };
      exports.createHistory = createHistory;
    }
  });

  // node_modules/@forge/i18n/out/constants.js
  var require_constants = __commonJS({
    "node_modules/@forge/i18n/out/constants.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.FORGE_SUPPORTED_LOCALE_CODES = exports.I18N_BUNDLE_FOLDER_NAME = exports.I18N_INFO_FILE_NAME = void 0;
      exports.I18N_INFO_FILE_NAME = "i18n-info.json";
      exports.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__";
      exports.FORGE_SUPPORTED_LOCALE_CODES = [
        "zh-CN",
        "zh-TW",
        "cs-CZ",
        "da-DK",
        "nl-NL",
        "en-US",
        "en-GB",
        "et-EE",
        "fi-FI",
        "fr-FR",
        "de-DE",
        "hu-HU",
        "is-IS",
        "it-IT",
        "ja-JP",
        "ko-KR",
        "no-NO",
        "pl-PL",
        "pt-BR",
        "pt-PT",
        "ro-RO",
        "ru-RU",
        "sk-SK",
        "tr-TR",
        "es-ES",
        "sv-SE"
      ];
    }
  });

  // node_modules/@forge/i18n/out/translationsGetter.js
  var require_translationsGetter = __commonJS({
    "node_modules/@forge/i18n/out/translationsGetter.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TranslationsGetter = exports.TranslationGetterError = void 0;
      var pushIfNotExists = (array, item) => {
        if (!array.includes(item)) {
          array.push(item);
        }
      };
      var TranslationGetterError = class extends Error {
        constructor(message) {
          super(message);
          this.name = "TranslationGetterError";
        }
      };
      exports.TranslationGetterError = TranslationGetterError;
      var TranslationsGetter = class {
        constructor(resourcesAccessor) {
          __publicField(this, "resourcesAccessor");
          __publicField(this, "i18nInfoConfig", null);
          __publicField(this, "translationResources", /* @__PURE__ */ new Map());
          this.resourcesAccessor = resourcesAccessor;
        }
        async getTranslations(locale, options = { fallback: true }) {
          const i18nInfoConfig = await this.getI18nInfoConfig();
          const { fallback } = options;
          if (!fallback) {
            let translationResource;
            if (i18nInfoConfig.locales.includes(locale)) {
              translationResource = await this.getTranslationResource(locale);
            }
            return {
              translations: translationResource ?? null,
              locale
            };
          }
          for (const targetLocale of this.getLocaleLookupOrder(locale, i18nInfoConfig)) {
            const translationResource = await this.getTranslationResource(targetLocale);
            if (translationResource) {
              return {
                translations: translationResource,
                locale: targetLocale
              };
            }
          }
          return {
            translations: null,
            locale
          };
        }
        async getTranslationsByLocaleLookupOrder(locale) {
          const i18nInfoConfig = await this.getI18nInfoConfig();
          const lookupOrder = this.getLocaleLookupOrder(locale, i18nInfoConfig);
          return await Promise.all(lookupOrder.map(async (targetLocale) => {
            const translationResource = await this.getTranslationResource(targetLocale);
            return {
              locale: targetLocale,
              translations: translationResource
            };
          }));
        }
        reset() {
          this.i18nInfoConfig = null;
          this.translationResources.clear();
        }
        async getTranslationResource(locale) {
          let resource = this.translationResources.get(locale);
          if (!resource) {
            try {
              resource = await this.resourcesAccessor.getTranslationResource(locale);
              this.translationResources.set(locale, resource);
            } catch (error) {
              if (error instanceof TranslationGetterError) {
                throw error;
              }
              throw new TranslationGetterError(`Failed to get translation resource for locale: ${locale}`);
            }
          }
          return resource;
        }
        async getI18nInfoConfig() {
          if (!this.i18nInfoConfig) {
            try {
              this.i18nInfoConfig = await this.resourcesAccessor.getI18nInfoConfig();
            } catch (error) {
              if (error instanceof TranslationGetterError) {
                throw error;
              }
              throw new TranslationGetterError("Failed to get i18n info config");
            }
          }
          return this.i18nInfoConfig;
        }
        getLocaleLookupOrder(locale, config) {
          const { locales, fallback } = config;
          const lookupOrder = [locale];
          const fallbackLocales = fallback[locale];
          if (fallbackLocales && Array.isArray(fallbackLocales) && fallbackLocales.length > 0) {
            lookupOrder.push(...fallbackLocales);
          }
          pushIfNotExists(lookupOrder, config.fallback.default);
          return lookupOrder.filter((locale2) => locales.includes(locale2));
        }
      };
      exports.TranslationsGetter = TranslationsGetter;
    }
  });

  // node_modules/lodash/isArray.js
  var require_isArray = __commonJS({
    "node_modules/lodash/isArray.js"(exports, module) {
      var isArray = Array.isArray;
      module.exports = isArray;
    }
  });

  // node_modules/lodash/_freeGlobal.js
  var require_freeGlobal = __commonJS({
    "node_modules/lodash/_freeGlobal.js"(exports, module) {
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      module.exports = freeGlobal;
    }
  });

  // node_modules/lodash/_root.js
  var require_root = __commonJS({
    "node_modules/lodash/_root.js"(exports, module) {
      var freeGlobal = require_freeGlobal();
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      module.exports = root;
    }
  });

  // node_modules/lodash/_Symbol.js
  var require_Symbol = __commonJS({
    "node_modules/lodash/_Symbol.js"(exports, module) {
      var root = require_root();
      var Symbol2 = root.Symbol;
      module.exports = Symbol2;
    }
  });

  // node_modules/lodash/_getRawTag.js
  var require_getRawTag = __commonJS({
    "node_modules/lodash/_getRawTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var nativeObjectToString = objectProto.toString;
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = void 0;
          var unmasked = true;
        } catch (e) {
        }
        var result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }
      module.exports = getRawTag;
    }
  });

  // node_modules/lodash/_objectToString.js
  var require_objectToString = __commonJS({
    "node_modules/lodash/_objectToString.js"(exports, module) {
      var objectProto = Object.prototype;
      var nativeObjectToString = objectProto.toString;
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      module.exports = objectToString;
    }
  });

  // node_modules/lodash/_baseGetTag.js
  var require_baseGetTag = __commonJS({
    "node_modules/lodash/_baseGetTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var getRawTag = require_getRawTag();
      var objectToString = require_objectToString();
      var nullTag = "[object Null]";
      var undefinedTag = "[object Undefined]";
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function baseGetTag(value) {
        if (value == null) {
          return value === void 0 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
      }
      module.exports = baseGetTag;
    }
  });

  // node_modules/lodash/isObjectLike.js
  var require_isObjectLike = __commonJS({
    "node_modules/lodash/isObjectLike.js"(exports, module) {
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      module.exports = isObjectLike;
    }
  });

  // node_modules/lodash/isSymbol.js
  var require_isSymbol = __commonJS({
    "node_modules/lodash/isSymbol.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var symbolTag = "[object Symbol]";
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
      }
      module.exports = isSymbol;
    }
  });

  // node_modules/lodash/_isKey.js
  var require_isKey = __commonJS({
    "node_modules/lodash/_isKey.js"(exports, module) {
      var isArray = require_isArray();
      var isSymbol = require_isSymbol();
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
      var reIsPlainProp = /^\w*$/;
      function isKey(value, object) {
        if (isArray(value)) {
          return false;
        }
        var type = typeof value;
        if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
      }
      module.exports = isKey;
    }
  });

  // node_modules/lodash/isObject.js
  var require_isObject = __commonJS({
    "node_modules/lodash/isObject.js"(exports, module) {
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      module.exports = isObject;
    }
  });

  // node_modules/lodash/isFunction.js
  var require_isFunction = __commonJS({
    "node_modules/lodash/isFunction.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObject = require_isObject();
      var asyncTag = "[object AsyncFunction]";
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var proxyTag = "[object Proxy]";
      function isFunction(value) {
        if (!isObject(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      module.exports = isFunction;
    }
  });

  // node_modules/lodash/_coreJsData.js
  var require_coreJsData = __commonJS({
    "node_modules/lodash/_coreJsData.js"(exports, module) {
      var root = require_root();
      var coreJsData = root["__core-js_shared__"];
      module.exports = coreJsData;
    }
  });

  // node_modules/lodash/_isMasked.js
  var require_isMasked = __commonJS({
    "node_modules/lodash/_isMasked.js"(exports, module) {
      var coreJsData = require_coreJsData();
      var maskSrcKey = (function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      })();
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      module.exports = isMasked;
    }
  });

  // node_modules/lodash/_toSource.js
  var require_toSource = __commonJS({
    "node_modules/lodash/_toSource.js"(exports, module) {
      var funcProto = Function.prototype;
      var funcToString = funcProto.toString;
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      module.exports = toSource;
    }
  });

  // node_modules/lodash/_baseIsNative.js
  var require_baseIsNative = __commonJS({
    "node_modules/lodash/_baseIsNative.js"(exports, module) {
      var isFunction = require_isFunction();
      var isMasked = require_isMasked();
      var isObject = require_isObject();
      var toSource = require_toSource();
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var reIsNative = RegExp(
        "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      module.exports = baseIsNative;
    }
  });

  // node_modules/lodash/_getValue.js
  var require_getValue = __commonJS({
    "node_modules/lodash/_getValue.js"(exports, module) {
      function getValue(object, key) {
        return object == null ? void 0 : object[key];
      }
      module.exports = getValue;
    }
  });

  // node_modules/lodash/_getNative.js
  var require_getNative = __commonJS({
    "node_modules/lodash/_getNative.js"(exports, module) {
      var baseIsNative = require_baseIsNative();
      var getValue = require_getValue();
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : void 0;
      }
      module.exports = getNative;
    }
  });

  // node_modules/lodash/_nativeCreate.js
  var require_nativeCreate = __commonJS({
    "node_modules/lodash/_nativeCreate.js"(exports, module) {
      var getNative = require_getNative();
      var nativeCreate = getNative(Object, "create");
      module.exports = nativeCreate;
    }
  });

  // node_modules/lodash/_hashClear.js
  var require_hashClear = __commonJS({
    "node_modules/lodash/_hashClear.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      module.exports = hashClear;
    }
  });

  // node_modules/lodash/_hashDelete.js
  var require_hashDelete = __commonJS({
    "node_modules/lodash/_hashDelete.js"(exports, module) {
      function hashDelete(key) {
        var result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
      }
      module.exports = hashDelete;
    }
  });

  // node_modules/lodash/_hashGet.js
  var require_hashGet = __commonJS({
    "node_modules/lodash/_hashGet.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result = data[key];
          return result === HASH_UNDEFINED ? void 0 : result;
        }
        return hasOwnProperty.call(data, key) ? data[key] : void 0;
      }
      module.exports = hashGet;
    }
  });

  // node_modules/lodash/_hashHas.js
  var require_hashHas = __commonJS({
    "node_modules/lodash/_hashHas.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
      }
      module.exports = hashHas;
    }
  });

  // node_modules/lodash/_hashSet.js
  var require_hashSet = __commonJS({
    "node_modules/lodash/_hashSet.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
        return this;
      }
      module.exports = hashSet;
    }
  });

  // node_modules/lodash/_Hash.js
  var require_Hash = __commonJS({
    "node_modules/lodash/_Hash.js"(exports, module) {
      var hashClear = require_hashClear();
      var hashDelete = require_hashDelete();
      var hashGet = require_hashGet();
      var hashHas = require_hashHas();
      var hashSet = require_hashSet();
      function Hash(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      module.exports = Hash;
    }
  });

  // node_modules/lodash/_listCacheClear.js
  var require_listCacheClear = __commonJS({
    "node_modules/lodash/_listCacheClear.js"(exports, module) {
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      module.exports = listCacheClear;
    }
  });

  // node_modules/lodash/eq.js
  var require_eq = __commonJS({
    "node_modules/lodash/eq.js"(exports, module) {
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      module.exports = eq;
    }
  });

  // node_modules/lodash/_assocIndexOf.js
  var require_assocIndexOf = __commonJS({
    "node_modules/lodash/_assocIndexOf.js"(exports, module) {
      var eq = require_eq();
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      module.exports = assocIndexOf;
    }
  });

  // node_modules/lodash/_listCacheDelete.js
  var require_listCacheDelete = __commonJS({
    "node_modules/lodash/_listCacheDelete.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      var arrayProto = Array.prototype;
      var splice = arrayProto.splice;
      function listCacheDelete(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        --this.size;
        return true;
      }
      module.exports = listCacheDelete;
    }
  });

  // node_modules/lodash/_listCacheGet.js
  var require_listCacheGet = __commonJS({
    "node_modules/lodash/_listCacheGet.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheGet(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        return index < 0 ? void 0 : data[index][1];
      }
      module.exports = listCacheGet;
    }
  });

  // node_modules/lodash/_listCacheHas.js
  var require_listCacheHas = __commonJS({
    "node_modules/lodash/_listCacheHas.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      module.exports = listCacheHas;
    }
  });

  // node_modules/lodash/_listCacheSet.js
  var require_listCacheSet = __commonJS({
    "node_modules/lodash/_listCacheSet.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheSet(key, value) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      module.exports = listCacheSet;
    }
  });

  // node_modules/lodash/_ListCache.js
  var require_ListCache = __commonJS({
    "node_modules/lodash/_ListCache.js"(exports, module) {
      var listCacheClear = require_listCacheClear();
      var listCacheDelete = require_listCacheDelete();
      var listCacheGet = require_listCacheGet();
      var listCacheHas = require_listCacheHas();
      var listCacheSet = require_listCacheSet();
      function ListCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      module.exports = ListCache;
    }
  });

  // node_modules/lodash/_Map.js
  var require_Map = __commonJS({
    "node_modules/lodash/_Map.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var Map2 = getNative(root, "Map");
      module.exports = Map2;
    }
  });

  // node_modules/lodash/_mapCacheClear.js
  var require_mapCacheClear = __commonJS({
    "node_modules/lodash/_mapCacheClear.js"(exports, module) {
      var Hash = require_Hash();
      var ListCache = require_ListCache();
      var Map2 = require_Map();
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map2 || ListCache)(),
          "string": new Hash()
        };
      }
      module.exports = mapCacheClear;
    }
  });

  // node_modules/lodash/_isKeyable.js
  var require_isKeyable = __commonJS({
    "node_modules/lodash/_isKeyable.js"(exports, module) {
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      module.exports = isKeyable;
    }
  });

  // node_modules/lodash/_getMapData.js
  var require_getMapData = __commonJS({
    "node_modules/lodash/_getMapData.js"(exports, module) {
      var isKeyable = require_isKeyable();
      function getMapData(map, key) {
        var data = map.__data__;
        return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      module.exports = getMapData;
    }
  });

  // node_modules/lodash/_mapCacheDelete.js
  var require_mapCacheDelete = __commonJS({
    "node_modules/lodash/_mapCacheDelete.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheDelete(key) {
        var result = getMapData(this, key)["delete"](key);
        this.size -= result ? 1 : 0;
        return result;
      }
      module.exports = mapCacheDelete;
    }
  });

  // node_modules/lodash/_mapCacheGet.js
  var require_mapCacheGet = __commonJS({
    "node_modules/lodash/_mapCacheGet.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      module.exports = mapCacheGet;
    }
  });

  // node_modules/lodash/_mapCacheHas.js
  var require_mapCacheHas = __commonJS({
    "node_modules/lodash/_mapCacheHas.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      module.exports = mapCacheHas;
    }
  });

  // node_modules/lodash/_mapCacheSet.js
  var require_mapCacheSet = __commonJS({
    "node_modules/lodash/_mapCacheSet.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheSet(key, value) {
        var data = getMapData(this, key), size = data.size;
        data.set(key, value);
        this.size += data.size == size ? 0 : 1;
        return this;
      }
      module.exports = mapCacheSet;
    }
  });

  // node_modules/lodash/_MapCache.js
  var require_MapCache = __commonJS({
    "node_modules/lodash/_MapCache.js"(exports, module) {
      var mapCacheClear = require_mapCacheClear();
      var mapCacheDelete = require_mapCacheDelete();
      var mapCacheGet = require_mapCacheGet();
      var mapCacheHas = require_mapCacheHas();
      var mapCacheSet = require_mapCacheSet();
      function MapCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      module.exports = MapCache;
    }
  });

  // node_modules/lodash/memoize.js
  var require_memoize = __commonJS({
    "node_modules/lodash/memoize.js"(exports, module) {
      var MapCache = require_MapCache();
      var FUNC_ERROR_TEXT = "Expected a function";
      function memoize(func, resolver) {
        if (typeof func != "function" || resolver != null && typeof resolver != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
          if (cache.has(key)) {
            return cache.get(key);
          }
          var result = func.apply(this, args);
          memoized.cache = cache.set(key, result) || cache;
          return result;
        };
        memoized.cache = new (memoize.Cache || MapCache)();
        return memoized;
      }
      memoize.Cache = MapCache;
      module.exports = memoize;
    }
  });

  // node_modules/lodash/_memoizeCapped.js
  var require_memoizeCapped = __commonJS({
    "node_modules/lodash/_memoizeCapped.js"(exports, module) {
      var memoize = require_memoize();
      var MAX_MEMOIZE_SIZE = 500;
      function memoizeCapped(func) {
        var result = memoize(func, function(key) {
          if (cache.size === MAX_MEMOIZE_SIZE) {
            cache.clear();
          }
          return key;
        });
        var cache = result.cache;
        return result;
      }
      module.exports = memoizeCapped;
    }
  });

  // node_modules/lodash/_stringToPath.js
  var require_stringToPath = __commonJS({
    "node_modules/lodash/_stringToPath.js"(exports, module) {
      var memoizeCapped = require_memoizeCapped();
      var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reEscapeChar = /\\(\\)?/g;
      var stringToPath = memoizeCapped(function(string) {
        var result = [];
        if (string.charCodeAt(0) === 46) {
          result.push("");
        }
        string.replace(rePropName, function(match, number, quote, subString) {
          result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
        });
        return result;
      });
      module.exports = stringToPath;
    }
  });

  // node_modules/lodash/_arrayMap.js
  var require_arrayMap = __commonJS({
    "node_modules/lodash/_arrayMap.js"(exports, module) {
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      module.exports = arrayMap;
    }
  });

  // node_modules/lodash/_baseToString.js
  var require_baseToString = __commonJS({
    "node_modules/lodash/_baseToString.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var arrayMap = require_arrayMap();
      var isArray = require_isArray();
      var isSymbol = require_isSymbol();
      var INFINITY = 1 / 0;
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolToString = symbolProto ? symbolProto.toString : void 0;
      function baseToString(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isArray(value)) {
          return arrayMap(value, baseToString) + "";
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : "";
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      module.exports = baseToString;
    }
  });

  // node_modules/lodash/toString.js
  var require_toString = __commonJS({
    "node_modules/lodash/toString.js"(exports, module) {
      var baseToString = require_baseToString();
      function toString(value) {
        return value == null ? "" : baseToString(value);
      }
      module.exports = toString;
    }
  });

  // node_modules/lodash/_castPath.js
  var require_castPath = __commonJS({
    "node_modules/lodash/_castPath.js"(exports, module) {
      var isArray = require_isArray();
      var isKey = require_isKey();
      var stringToPath = require_stringToPath();
      var toString = require_toString();
      function castPath(value, object) {
        if (isArray(value)) {
          return value;
        }
        return isKey(value, object) ? [value] : stringToPath(toString(value));
      }
      module.exports = castPath;
    }
  });

  // node_modules/lodash/_toKey.js
  var require_toKey = __commonJS({
    "node_modules/lodash/_toKey.js"(exports, module) {
      var isSymbol = require_isSymbol();
      var INFINITY = 1 / 0;
      function toKey(value) {
        if (typeof value == "string" || isSymbol(value)) {
          return value;
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      module.exports = toKey;
    }
  });

  // node_modules/lodash/_baseGet.js
  var require_baseGet = __commonJS({
    "node_modules/lodash/_baseGet.js"(exports, module) {
      var castPath = require_castPath();
      var toKey = require_toKey();
      function baseGet(object, path) {
        path = castPath(path, object);
        var index = 0, length = path.length;
        while (object != null && index < length) {
          object = object[toKey(path[index++])];
        }
        return index && index == length ? object : void 0;
      }
      module.exports = baseGet;
    }
  });

  // node_modules/lodash/get.js
  var require_get = __commonJS({
    "node_modules/lodash/get.js"(exports, module) {
      var baseGet = require_baseGet();
      function get(object, path, defaultValue) {
        var result = object == null ? void 0 : baseGet(object, path);
        return result === void 0 ? defaultValue : result;
      }
      module.exports = get;
    }
  });

  // node_modules/@forge/i18n/out/translationValueGetter.js
  var require_translationValueGetter = __commonJS({
    "node_modules/@forge/i18n/out/translationValueGetter.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getTranslationValueFromContent = exports.getTranslationValue = void 0;
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      var get_1 = tslib_1.__importDefault(require_get());
      var getTranslationValue = (translationLookup, i18nKey, locale) => {
        const translation = translationLookup[locale];
        if (!translation) {
          return null;
        }
        return (0, exports.getTranslationValueFromContent)(translation, i18nKey);
      };
      exports.getTranslationValue = getTranslationValue;
      var getTranslationValueFromContent = (translationContent, i18nKey) => {
        let translationValue = translationContent[i18nKey];
        if (!translationValue) {
          const keyTokens = i18nKey.split(".");
          if (keyTokens.length > 1) {
            translationValue = (0, get_1.default)(translationContent, keyTokens, null);
          }
        }
        return typeof translationValue === "string" ? translationValue : null;
      };
      exports.getTranslationValueFromContent = getTranslationValueFromContent;
    }
  });

  // node_modules/@forge/i18n/out/translator.js
  var require_translator = __commonJS({
    "node_modules/@forge/i18n/out/translator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Translator = void 0;
      var translationValueGetter_1 = require_translationValueGetter();
      var Translator = class {
        constructor(locale, translationsGetter) {
          __publicField(this, "locale");
          __publicField(this, "translationsGetter");
          __publicField(this, "localeLookupOrderedTranslations", null);
          __publicField(this, "cache", /* @__PURE__ */ new Map());
          this.locale = locale;
          this.translationsGetter = translationsGetter;
        }
        async init() {
          this.localeLookupOrderedTranslations = await this.translationsGetter.getTranslationsByLocaleLookupOrder(this.locale);
        }
        translate(i18nKey) {
          if (!this.localeLookupOrderedTranslations) {
            throw new Error("TranslationLookup not initialized");
          }
          let result = this.cache.get(i18nKey);
          if (result === void 0) {
            for (const { translations } of this.localeLookupOrderedTranslations) {
              const translationValue = (0, translationValueGetter_1.getTranslationValueFromContent)(translations, i18nKey);
              if (translationValue !== null) {
                result = translationValue;
                break;
              }
            }
            result = result ?? null;
            this.cache.set(i18nKey, result);
          }
          return result;
        }
      };
      exports.Translator = Translator;
    }
  });

  // node_modules/@forge/i18n/out/ensureLocale.js
  var require_ensureLocale = __commonJS({
    "node_modules/@forge/i18n/out/ensureLocale.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ensureLocale = void 0;
      var constants_1 = require_constants();
      var forgeSupportedLocaleCodesSet = new Set(constants_1.FORGE_SUPPORTED_LOCALE_CODES);
      var localeFallbacks = {
        "en-UK": "en-GB",
        "nb-NO": "no-NO"
      };
      var languageToLocaleCodeMap = constants_1.FORGE_SUPPORTED_LOCALE_CODES.reduce((agg, code) => {
        const [lng] = code.split("-");
        if (!agg[lng]) {
          agg[lng] = code;
        }
        return agg;
      }, {
        nb: "no-NO",
        pt: "pt-PT"
      });
      var ensureLocale = (rawLocale) => {
        const locale = rawLocale.replace("_", "-");
        if (forgeSupportedLocaleCodesSet.has(locale)) {
          return locale;
        }
        return languageToLocaleCodeMap[locale] ?? localeFallbacks[locale] ?? null;
      };
      exports.ensureLocale = ensureLocale;
    }
  });

  // node_modules/@forge/i18n/out/moduleI18nHelper.js
  var require_moduleI18nHelper = __commonJS({
    "node_modules/@forge/i18n/out/moduleI18nHelper.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.extractI18nPropertiesFromModules = exports.extractI18nKeysFromModules = exports.getI18nSupportedModuleEntries = void 0;
      var isObject = (value) => {
        return typeof value === "object" && value !== null && !Array.isArray(value);
      };
      var isI18nValue = (value) => {
        return typeof value?.i18n === "string";
      };
      var isConnectModuleKey = (moduleKey) => moduleKey.startsWith("connect-");
      var isCoreModuleKey = (moduleKey) => moduleKey.startsWith("core:");
      var getI18nKeysFromObject = (obj) => {
        const visited = /* @__PURE__ */ new Set();
        const visit = (value, i18nPath) => {
          if (!isObject(value) || visited.has(value)) {
            return [];
          }
          visited.add(value);
          return Object.entries(value).flatMap(([propKey, propValue]) => {
            const currentPath = [...i18nPath, propKey];
            if (isI18nValue(propValue)) {
              return [{ propertyPath: currentPath, key: propValue.i18n }];
            } else if (Array.isArray(propValue)) {
              return propValue.flatMap((item) => visit(item, currentPath));
            }
            return visit(propValue, currentPath);
          });
        };
        return visit(obj, []);
      };
      var getI18nSupportedModuleEntries = (modules) => {
        return Object.entries(modules).flatMap(([moduleKey, moduleEntries]) => {
          if (!isConnectModuleKey(moduleKey) && !isCoreModuleKey(moduleKey) && moduleEntries && Array.isArray(moduleEntries) && moduleEntries.length > 0) {
            return moduleEntries.map((moduleEntry) => [moduleEntry, moduleKey]);
          }
          return [];
        });
      };
      exports.getI18nSupportedModuleEntries = getI18nSupportedModuleEntries;
      var extractI18nKeysFromModules = (modules) => {
        const i18nKeys = /* @__PURE__ */ new Set();
        for (const moduleEntry of (0, exports.getI18nSupportedModuleEntries)(modules)) {
          const i18nKeysForEntryValue = getI18nKeysFromObject(moduleEntry[0]);
          for (const { key } of i18nKeysForEntryValue) {
            i18nKeys.add(key);
          }
        }
        return i18nKeys.size > 0 ? Array.from(i18nKeys) : [];
      };
      exports.extractI18nKeysFromModules = extractI18nKeysFromModules;
      var extractI18nPropertiesFromModules = (modules) => {
        const moduleI18nProperties = [];
        for (const moduleEntry of (0, exports.getI18nSupportedModuleEntries)(modules)) {
          const i18nKeysForEntryValue = getI18nKeysFromObject(moduleEntry[0]);
          for (const i18nObj of i18nKeysForEntryValue) {
            moduleI18nProperties.push({ moduleName: moduleEntry[1], ...i18nObj });
          }
        }
        return moduleI18nProperties;
      };
      exports.extractI18nPropertiesFromModules = extractI18nPropertiesFromModules;
    }
  });

  // node_modules/@forge/i18n/out/types.js
  var require_types = __commonJS({
    "node_modules/@forge/i18n/out/types.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@forge/i18n/out/index.js
  var require_out = __commonJS({
    "node_modules/@forge/i18n/out/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getI18nSupportedModuleEntries = exports.extractI18nPropertiesFromModules = exports.extractI18nKeysFromModules = exports.getTranslationValue = void 0;
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      tslib_1.__exportStar(require_constants(), exports);
      tslib_1.__exportStar(require_translationsGetter(), exports);
      tslib_1.__exportStar(require_translator(), exports);
      tslib_1.__exportStar(require_ensureLocale(), exports);
      var translationValueGetter_1 = require_translationValueGetter();
      Object.defineProperty(exports, "getTranslationValue", { enumerable: true, get: function() {
        return translationValueGetter_1.getTranslationValue;
      } });
      var moduleI18nHelper_1 = require_moduleI18nHelper();
      Object.defineProperty(exports, "extractI18nKeysFromModules", { enumerable: true, get: function() {
        return moduleI18nHelper_1.extractI18nKeysFromModules;
      } });
      Object.defineProperty(exports, "extractI18nPropertiesFromModules", { enumerable: true, get: function() {
        return moduleI18nHelper_1.extractI18nPropertiesFromModules;
      } });
      Object.defineProperty(exports, "getI18nSupportedModuleEntries", { enumerable: true, get: function() {
        return moduleI18nHelper_1.getI18nSupportedModuleEntries;
      } });
      tslib_1.__exportStar(require_types(), exports);
    }
  });

  // node_modules/@forge/bridge/out/view/getContext.js
  var require_getContext = __commonJS({
    "node_modules/@forge/bridge/out/view/getContext.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getContext = void 0;
      var bridge_1 = require_bridge();
      var i18n_1 = require_out();
      var callBridge = (0, bridge_1.getCallBridge)();
      var getContext = async () => {
        var _a;
        const context = await callBridge("getContext");
        const locale = context === null || context === void 0 ? void 0 : context.locale;
        if (locale) {
          context.locale = (_a = (0, i18n_1.ensureLocale)(locale)) !== null && _a !== void 0 ? _a : locale;
        }
        return context;
      };
      exports.getContext = getContext;
    }
  });

  // node_modules/@forge/bridge/out/view/changeWindowTitle.js
  var require_changeWindowTitle = __commonJS({
    "node_modules/@forge/bridge/out/view/changeWindowTitle.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.changeWindowTitle = void 0;
      var bridge_1 = require_bridge();
      var errors_1 = require_errors();
      var callBridge = (0, bridge_1.getCallBridge)();
      var changeWindowTitle = async (title) => {
        try {
          await callBridge("changeWindowTitle", title);
        } catch (e) {
          throw new errors_1.BridgeAPIError("the window title wasn't changed due to error.");
        }
      };
      exports.changeWindowTitle = changeWindowTitle;
    }
  });

  // node_modules/@forge/bridge/out/view/theme.js
  var require_theme = __commonJS({
    "node_modules/@forge/bridge/out/view/theme.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.theme = void 0;
      var bridge_1 = require_bridge();
      var callBridge = (0, bridge_1.getCallBridge)();
      exports.theme = {
        enable: () => callBridge("enableTheming")
      };
    }
  });

  // node_modules/@forge/bridge/out/utils/blobParser.js
  var require_blobParser = __commonJS({
    "node_modules/@forge/bridge/out/utils/blobParser.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.blobToBase64 = exports.base64ToBlob = void 0;
      var base64ToBlob = (b64string, mimeType) => {
        if (!b64string) {
          return null;
        }
        const base64Data = b64string.includes(";base64") ? b64string.split(",")[1] : b64string;
        const byteCharacters = atob(base64Data);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        return new Blob([byteArray], { type: mimeType });
      };
      exports.base64ToBlob = base64ToBlob;
      var blobToBase64 = (blob) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve(reader.result);
          };
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });
      };
      exports.blobToBase64 = blobToBase64;
    }
  });

  // node_modules/@forge/bridge/out/events/serialiseBlob.js
  var require_serialiseBlob = __commonJS({
    "node_modules/@forge/bridge/out/events/serialiseBlob.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.containsSerialisedBlobs = exports.containsBlobs = exports.deserialiseBlobsInPayload = exports.serialiseBlobsInPayload = void 0;
      var blobParser_1 = require_blobParser();
      var isPlainObject = (value) => {
        if (typeof value !== "object" || value === null)
          return false;
        if (Object.prototype.toString.call(value) !== "[object Object]")
          return false;
        const proto = Object.getPrototypeOf(value);
        if (proto === null)
          return true;
        const Ctor = Object.prototype.hasOwnProperty.call(proto, "constructor") && proto.constructor;
        return typeof Ctor === "function" && Ctor instanceof Ctor && Function.prototype.call(Ctor) === Function.prototype.call(value);
      };
      var blobToBase64WithMetadata = async (blob) => {
        const base64Data = await (0, blobParser_1.blobToBase64)(blob);
        return {
          data: base64Data,
          type: blob.type
        };
      };
      var base64WithMetadataToBlob = (metadata) => {
        return (0, blobParser_1.base64ToBlob)(metadata.data, metadata.type);
      };
      var serialiseBlobsInPayload = async (payload) => {
        if (payload instanceof Blob) {
          const blobData = await blobToBase64WithMetadata(payload);
          return {
            ...blobData,
            __isBlobData: true
          };
        }
        if (Array.isArray(payload)) {
          return Promise.all(payload.map((item) => (0, exports.serialiseBlobsInPayload)(item)));
        }
        if (payload && isPlainObject(payload)) {
          const entries = await Promise.all(Object.entries(payload).map(async ([key, value]) => [key, await (0, exports.serialiseBlobsInPayload)(value)]));
          return Object.fromEntries(entries);
        }
        return payload;
      };
      exports.serialiseBlobsInPayload = serialiseBlobsInPayload;
      var deserialiseBlobsInPayload = (payload) => {
        if (payload && isPlainObject(payload) && "__isBlobData" in payload) {
          const typedData = payload;
          return base64WithMetadataToBlob({
            data: typedData.data,
            type: typedData.type
          });
        }
        if (Array.isArray(payload)) {
          return payload.map((item) => (0, exports.deserialiseBlobsInPayload)(item));
        }
        if (payload && isPlainObject(payload)) {
          const result = {};
          for (const [key, value] of Object.entries(payload)) {
            result[key] = (0, exports.deserialiseBlobsInPayload)(value);
          }
          return result;
        }
        return payload;
      };
      exports.deserialiseBlobsInPayload = deserialiseBlobsInPayload;
      var containsBlobs = (payload) => {
        if (payload instanceof Blob) {
          return true;
        }
        if (Array.isArray(payload)) {
          return payload.some((item) => (0, exports.containsBlobs)(item));
        }
        if (payload && isPlainObject(payload)) {
          return Object.values(payload).some((value) => (0, exports.containsBlobs)(value));
        }
        return false;
      };
      exports.containsBlobs = containsBlobs;
      var containsSerialisedBlobs = (payload) => {
        if (payload && isPlainObject(payload) && "__isBlobData" in payload) {
          return true;
        }
        if (Array.isArray(payload)) {
          return payload.some((item) => (0, exports.containsSerialisedBlobs)(item));
        }
        if (payload && isPlainObject(payload)) {
          return Object.values(payload).some((value) => (0, exports.containsSerialisedBlobs)(value));
        }
        return false;
      };
      exports.containsSerialisedBlobs = containsSerialisedBlobs;
    }
  });

  // node_modules/@forge/bridge/out/events/events.js
  var require_events = __commonJS({
    "node_modules/@forge/bridge/out/events/events.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.events = void 0;
      var bridge_1 = require_bridge();
      var serialiseBlob_1 = require_serialiseBlob();
      var callBridge = (0, bridge_1.getCallBridge)();
      var emit = async (event, payload) => {
        let newPayload = payload;
        if ((0, serialiseBlob_1.containsBlobs)(payload)) {
          newPayload = await (0, serialiseBlob_1.serialiseBlobsInPayload)(payload);
        }
        return callBridge("emit", { event, payload: newPayload });
      };
      var on = (event, callback) => {
        const wrappedCallback = (payload) => {
          let newPayload = payload;
          if ((0, serialiseBlob_1.containsSerialisedBlobs)(payload)) {
            newPayload = (0, serialiseBlob_1.deserialiseBlobsInPayload)(payload);
          }
          return callback(newPayload);
        };
        return callBridge("on", { event, callback: wrappedCallback });
      };
      exports.events = {
        emit,
        on
      };
    }
  });

  // node_modules/@forge/bridge/out/view/emitReadyEvent.js
  var require_emitReadyEvent = __commonJS({
    "node_modules/@forge/bridge/out/view/emitReadyEvent.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.emitReadyEvent = void 0;
      var events_1 = require_events();
      var view_1 = require_view();
      var EXTENSION_READY = "EXTENSION_READY";
      var emitReadyEvent = async () => {
        const context = await view_1.view.getContext();
        await events_1.events.emit(EXTENSION_READY, {
          localId: context.localId
        });
      };
      exports.emitReadyEvent = emitReadyEvent;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/rng.js
  var require_rng = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/rng.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = rng;
      var getRandomValues;
      var rnds8 = new Uint8Array(16);
      function rng() {
        if (!getRandomValues) {
          getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
          if (!getRandomValues) {
            throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
          }
        }
        return getRandomValues(rnds8);
      }
    }
  });

  // node_modules/uuid/dist/commonjs-browser/regex.js
  var require_regex = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/regex.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/validate.js
  var require_validate = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/validate.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _regex = _interopRequireDefault(require_regex());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function validate(uuid) {
        return typeof uuid === "string" && _regex.default.test(uuid);
      }
      var _default = validate;
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/stringify.js
  var require_stringify = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/stringify.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      exports.unsafeStringify = unsafeStringify;
      var _validate = _interopRequireDefault(require_validate());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var byteToHex = [];
      for (let i = 0; i < 256; ++i) {
        byteToHex.push((i + 256).toString(16).slice(1));
      }
      function unsafeStringify(arr, offset = 0) {
        return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
      }
      function stringify(arr, offset = 0) {
        const uuid = unsafeStringify(arr, offset);
        if (!(0, _validate.default)(uuid)) {
          throw TypeError("Stringified UUID is invalid");
        }
        return uuid;
      }
      var _default = stringify;
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/v1.js
  var require_v1 = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/v1.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _rng = _interopRequireDefault(require_rng());
      var _stringify = require_stringify();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var _nodeId;
      var _clockseq;
      var _lastMSecs = 0;
      var _lastNSecs = 0;
      function v1(options, buf, offset) {
        let i = buf && offset || 0;
        const b = buf || new Array(16);
        options = options || {};
        let node = options.node || _nodeId;
        let clockseq = options.clockseq !== void 0 ? options.clockseq : _clockseq;
        if (node == null || clockseq == null) {
          const seedBytes = options.random || (options.rng || _rng.default)();
          if (node == null) {
            node = _nodeId = [seedBytes[0] | 1, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
          }
          if (clockseq == null) {
            clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
          }
        }
        let msecs = options.msecs !== void 0 ? options.msecs : Date.now();
        let nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs + 1;
        const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
        if (dt < 0 && options.clockseq === void 0) {
          clockseq = clockseq + 1 & 16383;
        }
        if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === void 0) {
          nsecs = 0;
        }
        if (nsecs >= 1e4) {
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        }
        _lastMSecs = msecs;
        _lastNSecs = nsecs;
        _clockseq = clockseq;
        msecs += 122192928e5;
        const tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
        b[i++] = tl >>> 24 & 255;
        b[i++] = tl >>> 16 & 255;
        b[i++] = tl >>> 8 & 255;
        b[i++] = tl & 255;
        const tmh = msecs / 4294967296 * 1e4 & 268435455;
        b[i++] = tmh >>> 8 & 255;
        b[i++] = tmh & 255;
        b[i++] = tmh >>> 24 & 15 | 16;
        b[i++] = tmh >>> 16 & 255;
        b[i++] = clockseq >>> 8 | 128;
        b[i++] = clockseq & 255;
        for (let n = 0; n < 6; ++n) {
          b[i + n] = node[n];
        }
        return buf || (0, _stringify.unsafeStringify)(b);
      }
      var _default = v1;
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/parse.js
  var require_parse = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/parse.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _validate = _interopRequireDefault(require_validate());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function parse(uuid) {
        if (!(0, _validate.default)(uuid)) {
          throw TypeError("Invalid UUID");
        }
        let v;
        const arr = new Uint8Array(16);
        arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
        arr[1] = v >>> 16 & 255;
        arr[2] = v >>> 8 & 255;
        arr[3] = v & 255;
        arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
        arr[5] = v & 255;
        arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
        arr[7] = v & 255;
        arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
        arr[9] = v & 255;
        arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
        arr[11] = v / 4294967296 & 255;
        arr[12] = v >>> 24 & 255;
        arr[13] = v >>> 16 & 255;
        arr[14] = v >>> 8 & 255;
        arr[15] = v & 255;
        return arr;
      }
      var _default = parse;
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/v35.js
  var require_v35 = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/v35.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.URL = exports.DNS = void 0;
      exports.default = v35;
      var _stringify = require_stringify();
      var _parse = _interopRequireDefault(require_parse());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function stringToBytes(str) {
        str = unescape(encodeURIComponent(str));
        const bytes = [];
        for (let i = 0; i < str.length; ++i) {
          bytes.push(str.charCodeAt(i));
        }
        return bytes;
      }
      var DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
      exports.DNS = DNS;
      var URL2 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
      exports.URL = URL2;
      function v35(name, version, hashfunc) {
        function generateUUID(value, namespace, buf, offset) {
          var _namespace;
          if (typeof value === "string") {
            value = stringToBytes(value);
          }
          if (typeof namespace === "string") {
            namespace = (0, _parse.default)(namespace);
          }
          if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
            throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
          }
          let bytes = new Uint8Array(16 + value.length);
          bytes.set(namespace);
          bytes.set(value, namespace.length);
          bytes = hashfunc(bytes);
          bytes[6] = bytes[6] & 15 | version;
          bytes[8] = bytes[8] & 63 | 128;
          if (buf) {
            offset = offset || 0;
            for (let i = 0; i < 16; ++i) {
              buf[offset + i] = bytes[i];
            }
            return buf;
          }
          return (0, _stringify.unsafeStringify)(bytes);
        }
        try {
          generateUUID.name = name;
        } catch (err) {
        }
        generateUUID.DNS = DNS;
        generateUUID.URL = URL2;
        return generateUUID;
      }
    }
  });

  // node_modules/uuid/dist/commonjs-browser/md5.js
  var require_md5 = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/md5.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      function md5(bytes) {
        if (typeof bytes === "string") {
          const msg = unescape(encodeURIComponent(bytes));
          bytes = new Uint8Array(msg.length);
          for (let i = 0; i < msg.length; ++i) {
            bytes[i] = msg.charCodeAt(i);
          }
        }
        return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
      }
      function md5ToHexEncodedArray(input) {
        const output = [];
        const length32 = input.length * 32;
        const hexTab = "0123456789abcdef";
        for (let i = 0; i < length32; i += 8) {
          const x = input[i >> 5] >>> i % 32 & 255;
          const hex = parseInt(hexTab.charAt(x >>> 4 & 15) + hexTab.charAt(x & 15), 16);
          output.push(hex);
        }
        return output;
      }
      function getOutputLength(inputLength8) {
        return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
      }
      function wordsToMd5(x, len) {
        x[len >> 5] |= 128 << len % 32;
        x[getOutputLength(len) - 1] = len;
        let a = 1732584193;
        let b = -271733879;
        let c = -1732584194;
        let d = 271733878;
        for (let i = 0; i < x.length; i += 16) {
          const olda = a;
          const oldb = b;
          const oldc = c;
          const oldd = d;
          a = md5ff(a, b, c, d, x[i], 7, -680876936);
          d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
          c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
          b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
          a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
          d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
          c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
          b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
          a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
          d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
          c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
          b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
          a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
          d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
          c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
          b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
          a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
          d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
          c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
          b = md5gg(b, c, d, a, x[i], 20, -373897302);
          a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
          d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
          c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
          b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
          a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
          d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
          c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
          b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
          a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
          d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
          c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
          b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
          a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
          d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
          c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
          b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
          a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
          d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
          c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
          b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
          a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
          d = md5hh(d, a, b, c, x[i], 11, -358537222);
          c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
          b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
          a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
          d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
          c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
          b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
          a = md5ii(a, b, c, d, x[i], 6, -198630844);
          d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
          c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
          b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
          a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
          d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
          c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
          b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
          a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
          d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
          c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
          b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
          a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
          d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
          c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
          b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
          a = safeAdd(a, olda);
          b = safeAdd(b, oldb);
          c = safeAdd(c, oldc);
          d = safeAdd(d, oldd);
        }
        return [a, b, c, d];
      }
      function bytesToWords(input) {
        if (input.length === 0) {
          return [];
        }
        const length8 = input.length * 8;
        const output = new Uint32Array(getOutputLength(length8));
        for (let i = 0; i < length8; i += 8) {
          output[i >> 5] |= (input[i / 8] & 255) << i % 32;
        }
        return output;
      }
      function safeAdd(x, y) {
        const lsw = (x & 65535) + (y & 65535);
        const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return msw << 16 | lsw & 65535;
      }
      function bitRotateLeft(num, cnt) {
        return num << cnt | num >>> 32 - cnt;
      }
      function md5cmn(q, a, b, x, s, t) {
        return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
      }
      function md5ff(a, b, c, d, x, s, t) {
        return md5cmn(b & c | ~b & d, a, b, x, s, t);
      }
      function md5gg(a, b, c, d, x, s, t) {
        return md5cmn(b & d | c & ~d, a, b, x, s, t);
      }
      function md5hh(a, b, c, d, x, s, t) {
        return md5cmn(b ^ c ^ d, a, b, x, s, t);
      }
      function md5ii(a, b, c, d, x, s, t) {
        return md5cmn(c ^ (b | ~d), a, b, x, s, t);
      }
      var _default = md5;
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/v3.js
  var require_v3 = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/v3.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _v = _interopRequireDefault(require_v35());
      var _md = _interopRequireDefault(require_md5());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var v3 = (0, _v.default)("v3", 48, _md.default);
      var _default = v3;
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/native.js
  var require_native = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/native.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
      var _default = {
        randomUUID
      };
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/v4.js
  var require_v4 = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/v4.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _native = _interopRequireDefault(require_native());
      var _rng = _interopRequireDefault(require_rng());
      var _stringify = require_stringify();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function v4(options, buf, offset) {
        if (_native.default.randomUUID && !buf && !options) {
          return _native.default.randomUUID();
        }
        options = options || {};
        const rnds = options.random || (options.rng || _rng.default)();
        rnds[6] = rnds[6] & 15 | 64;
        rnds[8] = rnds[8] & 63 | 128;
        if (buf) {
          offset = offset || 0;
          for (let i = 0; i < 16; ++i) {
            buf[offset + i] = rnds[i];
          }
          return buf;
        }
        return (0, _stringify.unsafeStringify)(rnds);
      }
      var _default = v4;
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/sha1.js
  var require_sha1 = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/sha1.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      function f(s, x, y, z) {
        switch (s) {
          case 0:
            return x & y ^ ~x & z;
          case 1:
            return x ^ y ^ z;
          case 2:
            return x & y ^ x & z ^ y & z;
          case 3:
            return x ^ y ^ z;
        }
      }
      function ROTL(x, n) {
        return x << n | x >>> 32 - n;
      }
      function sha1(bytes) {
        const K = [1518500249, 1859775393, 2400959708, 3395469782];
        const H = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
        if (typeof bytes === "string") {
          const msg = unescape(encodeURIComponent(bytes));
          bytes = [];
          for (let i = 0; i < msg.length; ++i) {
            bytes.push(msg.charCodeAt(i));
          }
        } else if (!Array.isArray(bytes)) {
          bytes = Array.prototype.slice.call(bytes);
        }
        bytes.push(128);
        const l = bytes.length / 4 + 2;
        const N = Math.ceil(l / 16);
        const M = new Array(N);
        for (let i = 0; i < N; ++i) {
          const arr = new Uint32Array(16);
          for (let j = 0; j < 16; ++j) {
            arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
          }
          M[i] = arr;
        }
        M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
        M[N - 1][14] = Math.floor(M[N - 1][14]);
        M[N - 1][15] = (bytes.length - 1) * 8 & 4294967295;
        for (let i = 0; i < N; ++i) {
          const W = new Uint32Array(80);
          for (let t = 0; t < 16; ++t) {
            W[t] = M[i][t];
          }
          for (let t = 16; t < 80; ++t) {
            W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
          }
          let a = H[0];
          let b = H[1];
          let c = H[2];
          let d = H[3];
          let e = H[4];
          for (let t = 0; t < 80; ++t) {
            const s = Math.floor(t / 20);
            const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
            e = d;
            d = c;
            c = ROTL(b, 30) >>> 0;
            b = a;
            a = T;
          }
          H[0] = H[0] + a >>> 0;
          H[1] = H[1] + b >>> 0;
          H[2] = H[2] + c >>> 0;
          H[3] = H[3] + d >>> 0;
          H[4] = H[4] + e >>> 0;
        }
        return [H[0] >> 24 & 255, H[0] >> 16 & 255, H[0] >> 8 & 255, H[0] & 255, H[1] >> 24 & 255, H[1] >> 16 & 255, H[1] >> 8 & 255, H[1] & 255, H[2] >> 24 & 255, H[2] >> 16 & 255, H[2] >> 8 & 255, H[2] & 255, H[3] >> 24 & 255, H[3] >> 16 & 255, H[3] >> 8 & 255, H[3] & 255, H[4] >> 24 & 255, H[4] >> 16 & 255, H[4] >> 8 & 255, H[4] & 255];
      }
      var _default = sha1;
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/v5.js
  var require_v5 = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/v5.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _v = _interopRequireDefault(require_v35());
      var _sha = _interopRequireDefault(require_sha1());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var v5 = (0, _v.default)("v5", 80, _sha.default);
      var _default = v5;
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/nil.js
  var require_nil = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/nil.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _default = "00000000-0000-0000-0000-000000000000";
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/version.js
  var require_version = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/version.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _validate = _interopRequireDefault(require_validate());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function version(uuid) {
        if (!(0, _validate.default)(uuid)) {
          throw TypeError("Invalid UUID");
        }
        return parseInt(uuid.slice(14, 15), 16);
      }
      var _default = version;
      exports.default = _default;
    }
  });

  // node_modules/uuid/dist/commonjs-browser/index.js
  var require_commonjs_browser = __commonJS({
    "node_modules/uuid/dist/commonjs-browser/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "NIL", {
        enumerable: true,
        get: function get() {
          return _nil.default;
        }
      });
      Object.defineProperty(exports, "parse", {
        enumerable: true,
        get: function get() {
          return _parse.default;
        }
      });
      Object.defineProperty(exports, "stringify", {
        enumerable: true,
        get: function get() {
          return _stringify.default;
        }
      });
      Object.defineProperty(exports, "v1", {
        enumerable: true,
        get: function get() {
          return _v.default;
        }
      });
      Object.defineProperty(exports, "v3", {
        enumerable: true,
        get: function get() {
          return _v2.default;
        }
      });
      Object.defineProperty(exports, "v4", {
        enumerable: true,
        get: function get() {
          return _v3.default;
        }
      });
      Object.defineProperty(exports, "v5", {
        enumerable: true,
        get: function get() {
          return _v4.default;
        }
      });
      Object.defineProperty(exports, "validate", {
        enumerable: true,
        get: function get() {
          return _validate.default;
        }
      });
      Object.defineProperty(exports, "version", {
        enumerable: true,
        get: function get() {
          return _version.default;
        }
      });
      var _v = _interopRequireDefault(require_v1());
      var _v2 = _interopRequireDefault(require_v3());
      var _v3 = _interopRequireDefault(require_v4());
      var _v4 = _interopRequireDefault(require_v5());
      var _nil = _interopRequireDefault(require_nil());
      var _version = _interopRequireDefault(require_version());
      var _validate = _interopRequireDefault(require_validate());
      var _stringify = _interopRequireDefault(require_stringify());
      var _parse = _interopRequireDefault(require_parse());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
    }
  });

  // node_modules/iframe-resizer/js/iframeResizer.js
  var require_iframeResizer = __commonJS({
    "node_modules/iframe-resizer/js/iframeResizer.js"(exports, module) {
      console.info(`
IFRAME-RESIZER

Iframe-Resizer 5 is now available via the following two packages:

 * @iframe-resizer/parent
 * @iframe-resizer/child

Additionally their are also new versions of iframe-resizer for React, Vue, and jQuery.

Version 5 of iframe-resizer has been extensively rewritten to use modern browser APIs, which has enabled significantly better performance and greater accuracy in the detection of content resizing events.

Please see https://iframe-resizer.com/upgrade for more details.
`);
      (function(undefined2) {
        if (typeof window === "undefined") return;
        var count = 0, destroyObserver, logEnabled = false, hiddenCheckEnabled = false, msgHeader = "message", msgHeaderLen = msgHeader.length, msgId = "[iFrameSizer]", msgIdLen = msgId.length, pagePosition = null, requestAnimationFrame = window.requestAnimationFrame, resetRequiredMethods = Object.freeze({
          max: 1,
          scroll: 1,
          bodyScroll: 1,
          documentElementScroll: 1
        }), settings = {}, timer = null, defaults = Object.freeze({
          autoResize: true,
          bodyBackground: null,
          bodyMargin: null,
          bodyMarginV1: 8,
          bodyPadding: null,
          checkOrigin: true,
          inPageLinks: false,
          enablePublicMethods: true,
          heightCalculationMethod: "bodyOffset",
          id: "iFrameResizer",
          interval: 32,
          license: "1jqr0si6pnt",
          log: false,
          maxHeight: Infinity,
          maxWidth: Infinity,
          minHeight: 0,
          minWidth: 0,
          mouseEvents: true,
          resizeFrom: "parent",
          scrolling: false,
          sizeHeight: true,
          sizeWidth: false,
          warningTimeout: 5e3,
          tolerance: 0,
          widthCalculationMethod: "scroll",
          onClose: function() {
            return true;
          },
          onClosed: function() {
          },
          onInit: function() {
          },
          onMessage: function() {
            warn("onMessage function not defined");
          },
          onMouseEnter: function() {
          },
          onMouseLeave: function() {
          },
          onResized: function() {
          },
          onScroll: function() {
            return true;
          }
        });
        function getMutationObserver() {
          return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        }
        function addEventListener(el, evt, func) {
          el.addEventListener(evt, func, false);
        }
        function removeEventListener(el, evt, func) {
          el.removeEventListener(evt, func, false);
        }
        function setupRequestAnimationFrame() {
          var vendors = ["moz", "webkit", "o", "ms"];
          var x;
          for (x = 0; x < vendors.length && !requestAnimationFrame; x += 1) {
            requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
          }
          if (requestAnimationFrame) {
            requestAnimationFrame = requestAnimationFrame.bind(window);
          } else {
            log("setup", "RequestAnimationFrame not supported");
          }
        }
        function getMyID(iframeId) {
          var retStr = "Host page: " + iframeId;
          if (window.top !== window.self) {
            retStr = window.parentIFrame && window.parentIFrame.getId ? window.parentIFrame.getId() + ": " + iframeId : "Nested host page: " + iframeId;
          }
          return retStr;
        }
        function formatLogHeader(iframeId) {
          return msgId + "[" + getMyID(iframeId) + "]";
        }
        function isLogEnabled(iframeId) {
          return settings[iframeId] ? settings[iframeId].log : logEnabled;
        }
        function log(iframeId, msg) {
          output("log", iframeId, msg, isLogEnabled(iframeId));
        }
        function info(iframeId, msg) {
          output("info", iframeId, msg, isLogEnabled(iframeId));
        }
        function warn(iframeId, msg) {
          output("warn", iframeId, msg, true);
        }
        function output(type, iframeId, msg, enabled) {
          if (true === enabled && "object" === typeof window.console) {
            console[type](formatLogHeader(iframeId), msg);
          }
        }
        function iFrameListener(event) {
          function resizeIFrame() {
            function resize() {
              setSize(messageData);
              setPagePosition(iframeId);
              on("onResized", messageData);
            }
            ensureInRange("Height");
            ensureInRange("Width");
            syncResize(resize, messageData, "init");
          }
          function processMsg() {
            var data = msg.slice(msgIdLen).split(":");
            var height = data[1] ? parseInt(data[1], 10) : 0;
            var iframe = settings[data[0]] && settings[data[0]].iframe;
            var compStyle = getComputedStyle(iframe);
            return {
              iframe,
              id: data[0],
              height: height + getPaddingEnds(compStyle) + getBorderEnds(compStyle),
              width: data[2],
              type: data[3]
            };
          }
          function getPaddingEnds(compStyle) {
            if (compStyle.boxSizing !== "border-box") {
              return 0;
            }
            var top = compStyle.paddingTop ? parseInt(compStyle.paddingTop, 10) : 0;
            var bot = compStyle.paddingBottom ? parseInt(compStyle.paddingBottom, 10) : 0;
            return top + bot;
          }
          function getBorderEnds(compStyle) {
            if (compStyle.boxSizing !== "border-box") {
              return 0;
            }
            var top = compStyle.borderTopWidth ? parseInt(compStyle.borderTopWidth, 10) : 0;
            var bot = compStyle.borderBottomWidth ? parseInt(compStyle.borderBottomWidth, 10) : 0;
            return top + bot;
          }
          function ensureInRange(Dimension) {
            var max = Number(settings[iframeId]["max" + Dimension]), min = Number(settings[iframeId]["min" + Dimension]), dimension = Dimension.toLowerCase(), size = Number(messageData[dimension]);
            log(iframeId, "Checking " + dimension + " is in range " + min + "-" + max);
            if (size < min) {
              size = min;
              log(iframeId, "Set " + dimension + " to min value");
            }
            if (size > max) {
              size = max;
              log(iframeId, "Set " + dimension + " to max value");
            }
            messageData[dimension] = "" + size;
          }
          function isMessageFromIFrame() {
            function checkAllowedOrigin() {
              function checkList() {
                var i = 0, retCode = false;
                log(
                  iframeId,
                  "Checking connection is from allowed list of origins: " + checkOrigin
                );
                for (; i < checkOrigin.length; i++) {
                  if (checkOrigin[i] === origin) {
                    retCode = true;
                    break;
                  }
                }
                return retCode;
              }
              function checkSingle() {
                var remoteHost = settings[iframeId] && settings[iframeId].remoteHost;
                log(iframeId, "Checking connection is from: " + remoteHost);
                return origin === remoteHost;
              }
              return checkOrigin.constructor === Array ? checkList() : checkSingle();
            }
            var origin = event.origin, checkOrigin = settings[iframeId] && settings[iframeId].checkOrigin;
            if (checkOrigin && "" + origin !== "null" && !checkAllowedOrigin()) {
              throw new Error(
                "Unexpected message received from: " + origin + " for " + messageData.iframe.id + ". Message was: " + event.data + ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains."
              );
            }
            return true;
          }
          function isMessageForUs() {
            return msgId === ("" + msg).slice(0, msgIdLen) && msg.slice(msgIdLen).split(":")[0] in settings;
          }
          function isMessageFromMetaParent() {
            var retCode = messageData.type in { true: 1, false: 1, undefined: 1 };
            if (retCode) {
              log(iframeId, "Ignoring init message from meta parent page");
            }
            return retCode;
          }
          function getMsgBody(offset) {
            return msg.slice(msg.indexOf(":") + msgHeaderLen + offset);
          }
          function forwardMsgFromIFrame(msgBody) {
            log(
              iframeId,
              "onMessage passed: {iframe: " + messageData.iframe.id + ", message: " + msgBody + "}"
            );
            on("onMessage", {
              iframe: messageData.iframe,
              message: JSON.parse(msgBody)
            });
            log(iframeId, "--");
          }
          function getPageInfo() {
            var bodyPosition = document.body.getBoundingClientRect(), iFramePosition = messageData.iframe.getBoundingClientRect();
            return JSON.stringify({
              iframeHeight: iFramePosition.height,
              iframeWidth: iFramePosition.width,
              clientHeight: Math.max(
                document.documentElement.clientHeight,
                window.innerHeight || 0
              ),
              clientWidth: Math.max(
                document.documentElement.clientWidth,
                window.innerWidth || 0
              ),
              offsetTop: parseInt(iFramePosition.top - bodyPosition.top, 10),
              offsetLeft: parseInt(iFramePosition.left - bodyPosition.left, 10),
              scrollTop: window.pageYOffset,
              scrollLeft: window.pageXOffset,
              documentHeight: document.documentElement.clientHeight,
              documentWidth: document.documentElement.clientWidth,
              windowHeight: window.innerHeight,
              windowWidth: window.innerWidth
            });
          }
          function sendPageInfoToIframe(iframe, iframeId2) {
            function debouncedTrigger() {
              trigger("Send Page Info", "pageInfo:" + getPageInfo(), iframe, iframeId2);
            }
            debounceFrameEvents(debouncedTrigger, 32, iframeId2);
          }
          function startPageInfoMonitor() {
            function setListener(type, func) {
              function sendPageInfo() {
                if (settings[id]) {
                  sendPageInfoToIframe(settings[id].iframe, id);
                } else {
                  stop();
                }
              }
              ;
              ["scroll", "resize"].forEach(function(evt) {
                log(id, type + evt + " listener for sendPageInfo");
                func(window, evt, sendPageInfo);
              });
            }
            function stop() {
              setListener("Remove ", removeEventListener);
            }
            function start() {
              setListener("Add ", addEventListener);
            }
            var id = iframeId;
            start();
            if (settings[id]) {
              settings[id].stopPageInfo = stop;
            }
          }
          function stopPageInfoMonitor() {
            if (settings[iframeId] && settings[iframeId].stopPageInfo) {
              settings[iframeId].stopPageInfo();
              delete settings[iframeId].stopPageInfo;
            }
          }
          function checkIFrameExists() {
            var retBool = true;
            if (null === messageData.iframe) {
              warn(iframeId, "IFrame (" + messageData.id + ") not found");
              retBool = false;
            }
            return retBool;
          }
          function getElementPosition(target) {
            var iFramePosition = target.getBoundingClientRect();
            getPagePosition(iframeId);
            return {
              x: Math.floor(Number(iFramePosition.left) + Number(pagePosition.x)),
              y: Math.floor(Number(iFramePosition.top) + Number(pagePosition.y))
            };
          }
          function scrollRequestFromChild(addOffset) {
            function reposition() {
              pagePosition = newPosition;
              scrollTo();
              log(iframeId, "--");
            }
            function calcOffset() {
              return {
                x: Number(messageData.width) + offset.x,
                y: Number(messageData.height) + offset.y
              };
            }
            function scrollParent() {
              if (window.parentIFrame) {
                window.parentIFrame["scrollTo" + (addOffset ? "Offset" : "")](
                  newPosition.x,
                  newPosition.y
                );
              } else {
                warn(
                  iframeId,
                  "Unable to scroll to requested position, window.parentIFrame not found"
                );
              }
            }
            var offset = addOffset ? getElementPosition(messageData.iframe) : { x: 0, y: 0 }, newPosition = calcOffset();
            log(
              iframeId,
              "Reposition requested from iFrame (offset x:" + offset.x + " y:" + offset.y + ")"
            );
            if (window.top === window.self) {
              reposition();
            } else {
              scrollParent();
            }
          }
          function scrollTo() {
            if (false === on("onScroll", pagePosition)) {
              unsetPagePosition();
            } else {
              setPagePosition(iframeId);
            }
          }
          function findTarget(location2) {
            function jumpToTarget() {
              var jumpPosition = getElementPosition(target);
              log(
                iframeId,
                "Moving to in page link (#" + hash + ") at x: " + jumpPosition.x + " y: " + jumpPosition.y
              );
              pagePosition = {
                x: jumpPosition.x,
                y: jumpPosition.y
              };
              scrollTo();
              log(iframeId, "--");
            }
            function jumpToParent() {
              if (window.parentIFrame) {
                window.parentIFrame.moveToAnchor(hash);
              } else {
                log(
                  iframeId,
                  "In page link #" + hash + " not found and window.parentIFrame not found"
                );
              }
            }
            var hash = location2.split("#")[1] || "", hashData = decodeURIComponent(hash), target = document.getElementById(hashData) || document.getElementsByName(hashData)[0];
            if (target) {
              jumpToTarget();
            } else if (window.top === window.self) {
              log(iframeId, "In page link #" + hash + " not found");
            } else {
              jumpToParent();
            }
          }
          function onMouse(event2) {
            var mousePos = {};
            if (Number(messageData.width) === 0 && Number(messageData.height) === 0) {
              var data = getMsgBody(9).split(":");
              mousePos = {
                x: data[1],
                y: data[0]
              };
            } else {
              mousePos = {
                x: messageData.width,
                y: messageData.height
              };
            }
            on(event2, {
              iframe: messageData.iframe,
              screenX: Number(mousePos.x),
              screenY: Number(mousePos.y),
              type: messageData.type
            });
          }
          function on(funcName, val) {
            return chkEvent(iframeId, funcName, val);
          }
          function actionMsg() {
            if (settings[iframeId] && settings[iframeId].firstRun) firstRun();
            switch (messageData.type) {
              case "close": {
                closeIFrame(messageData.iframe);
                break;
              }
              case "message": {
                forwardMsgFromIFrame(getMsgBody(6));
                break;
              }
              case "mouseenter": {
                onMouse("onMouseEnter");
                break;
              }
              case "mouseleave": {
                onMouse("onMouseLeave");
                break;
              }
              case "autoResize": {
                settings[iframeId].autoResize = JSON.parse(getMsgBody(9));
                break;
              }
              case "scrollTo": {
                scrollRequestFromChild(false);
                break;
              }
              case "scrollToOffset": {
                scrollRequestFromChild(true);
                break;
              }
              case "pageInfo": {
                sendPageInfoToIframe(
                  settings[iframeId] && settings[iframeId].iframe,
                  iframeId
                );
                startPageInfoMonitor();
                break;
              }
              case "pageInfoStop": {
                stopPageInfoMonitor();
                break;
              }
              case "inPageLink": {
                findTarget(getMsgBody(9));
                break;
              }
              case "reset": {
                resetIFrame(messageData);
                break;
              }
              case "init": {
                resizeIFrame();
                on("onInit", messageData.iframe);
                break;
              }
              default: {
                if (Number(messageData.width) === 0 && Number(messageData.height) === 0) {
                  warn(
                    "Unsupported message received (" + messageData.type + "), this is likely due to the iframe containing a later version of iframe-resizer than the parent page"
                  );
                } else {
                  resizeIFrame();
                }
              }
            }
          }
          function hasSettings(iframeId2) {
            var retBool = true;
            if (!settings[iframeId2]) {
              retBool = false;
              warn(
                messageData.type + " No settings for " + iframeId2 + ". Message was: " + msg
              );
            }
            return retBool;
          }
          function iFrameReadyMsgReceived() {
            for (var iframeId2 in settings) {
              trigger(
                "iFrame requested init",
                createOutgoingMsg(iframeId2),
                settings[iframeId2].iframe,
                iframeId2
              );
            }
          }
          function firstRun() {
            if (settings[iframeId]) {
              settings[iframeId].firstRun = false;
            }
          }
          var msg = event.data, messageData = {}, iframeId = null;
          if ("[iFrameResizerChild]Ready" === msg) {
            iFrameReadyMsgReceived();
          } else if (isMessageForUs()) {
            messageData = processMsg();
            iframeId = messageData.id;
            if (settings[iframeId]) {
              settings[iframeId].loaded = true;
            }
            if (!isMessageFromMetaParent() && hasSettings(iframeId)) {
              log(iframeId, "Received: " + msg);
              if (checkIFrameExists() && isMessageFromIFrame()) {
                actionMsg();
              }
            }
          } else {
            info(iframeId, "Ignored: " + msg);
          }
        }
        function chkEvent(iframeId, funcName, val) {
          var func = null, retVal = null;
          if (settings[iframeId]) {
            func = settings[iframeId][funcName];
            if ("function" === typeof func) {
              retVal = func(val);
            } else {
              throw new TypeError(
                funcName + " on iFrame[" + iframeId + "] is not a function"
              );
            }
          }
          return retVal;
        }
        function removeIframeListeners(iframe) {
          var iframeId = iframe.id;
          delete settings[iframeId];
        }
        function closeIFrame(iframe) {
          var iframeId = iframe.id;
          if (chkEvent(iframeId, "onClose", iframeId) === false) {
            log(iframeId, "Close iframe cancelled by onClose event");
            return;
          }
          log(iframeId, "Removing iFrame: " + iframeId);
          try {
            if (iframe.parentNode) {
              iframe.parentNode.removeChild(iframe);
            }
          } catch (error) {
            warn(error);
          }
          chkEvent(iframeId, "onClosed", iframeId);
          log(iframeId, "--");
          removeIframeListeners(iframe);
          if (destroyObserver) {
            destroyObserver.disconnect();
            destroyObserver = null;
          }
        }
        function getPagePosition(iframeId) {
          if (null === pagePosition) {
            pagePosition = {
              x: window.pageXOffset === undefined2 ? document.documentElement.scrollLeft : window.pageXOffset,
              y: window.pageYOffset === undefined2 ? document.documentElement.scrollTop : window.pageYOffset
            };
            log(
              iframeId,
              "Get page position: " + pagePosition.x + "," + pagePosition.y
            );
          }
        }
        function setPagePosition(iframeId) {
          if (null !== pagePosition) {
            window.scrollTo(pagePosition.x, pagePosition.y);
            log(
              iframeId,
              "Set page position: " + pagePosition.x + "," + pagePosition.y
            );
            unsetPagePosition();
          }
        }
        function unsetPagePosition() {
          pagePosition = null;
        }
        function resetIFrame(messageData) {
          function reset() {
            setSize(messageData);
            trigger("reset", "reset", messageData.iframe, messageData.id);
          }
          log(
            messageData.id,
            "Size reset requested by " + ("init" === messageData.type ? "host page" : "iFrame")
          );
          getPagePosition(messageData.id);
          syncResize(reset, messageData, "reset");
        }
        function setSize(messageData) {
          function setDimension(dimension) {
            if (!messageData.id) {
              log("undefined", "messageData id not set");
              return;
            }
            messageData.iframe.style[dimension] = messageData[dimension] + "px";
            log(
              messageData.id,
              "IFrame (" + iframeId + ") " + dimension + " set to " + messageData[dimension] + "px"
            );
          }
          function chkZero(dimension) {
            if (!hiddenCheckEnabled && "0" === messageData[dimension]) {
              hiddenCheckEnabled = true;
              log(iframeId, "Hidden iFrame detected, creating visibility listener");
              fixHiddenIFrames();
            }
          }
          function processDimension(dimension) {
            setDimension(dimension);
            chkZero(dimension);
          }
          var iframeId = messageData.iframe.id;
          if (settings[iframeId]) {
            if (settings[iframeId].sizeHeight) {
              processDimension("height");
            }
            if (settings[iframeId].sizeWidth) {
              processDimension("width");
            }
          }
        }
        function syncResize(func, messageData, doNotSync) {
          if (doNotSync !== messageData.type && requestAnimationFrame && // including check for jasmine because had trouble getting spy to work in unit test using requestAnimationFrame
          !window.jasmine) {
            log(messageData.id, "Requesting animation frame");
            requestAnimationFrame(func);
          } else {
            func();
          }
        }
        function trigger(calleeMsg, msg, iframe, id, noResponseWarning) {
          function postMessageToIFrame() {
            var target = settings[id] && settings[id].targetOrigin;
            log(
              id,
              "[" + calleeMsg + "] Sending msg to iframe[" + id + "] (" + msg + ") targetOrigin: " + target
            );
            iframe.contentWindow.postMessage(msgId + msg, target);
          }
          function iFrameNotFound() {
            warn(id, "[" + calleeMsg + "] IFrame(" + id + ") not found");
          }
          function chkAndSend() {
            if (iframe && "contentWindow" in iframe && null !== iframe.contentWindow) {
              postMessageToIFrame();
            } else {
              iFrameNotFound();
            }
          }
          function warnOnNoResponse() {
            function warning() {
              if (settings[id] && !settings[id].loaded && !errorShown) {
                errorShown = true;
                warn(
                  id,
                  "IFrame has not responded within " + settings[id].warningTimeout / 1e3 + " seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."
                );
              }
            }
            if (!!noResponseWarning && settings[id] && !!settings[id].warningTimeout) {
              settings[id].msgTimeout = setTimeout(
                warning,
                settings[id].warningTimeout
              );
            }
          }
          var errorShown = false;
          id = id || iframe.id;
          if (settings[id]) {
            chkAndSend();
            warnOnNoResponse();
          }
        }
        function createOutgoingMsg(iframeId) {
          return iframeId + ":" + settings[iframeId].bodyMarginV1 + ":" + settings[iframeId].sizeWidth + ":" + settings[iframeId].log + ":" + settings[iframeId].interval + ":" + settings[iframeId].enablePublicMethods + ":" + settings[iframeId].autoResize + ":" + settings[iframeId].bodyMargin + ":" + settings[iframeId].heightCalculationMethod + ":" + settings[iframeId].bodyBackground + ":" + settings[iframeId].bodyPadding + ":" + settings[iframeId].tolerance + ":" + settings[iframeId].inPageLinks + ":" + settings[iframeId].resizeFrom + ":" + settings[iframeId].widthCalculationMethod + ":" + settings[iframeId].mouseEvents;
        }
        function isNumber(value) {
          return typeof value === "number";
        }
        function setupIFrame(iframe, options) {
          function setLimits() {
            function addStyle(style) {
              var styleValue = settings[iframeId][style];
              if (Infinity !== styleValue && 0 !== styleValue) {
                iframe.style[style] = isNumber(styleValue) ? styleValue + "px" : styleValue;
                log(iframeId, "Set " + style + " = " + iframe.style[style]);
              }
            }
            function chkMinMax(dimension) {
              if (settings[iframeId]["min" + dimension] > settings[iframeId]["max" + dimension]) {
                throw new Error(
                  "Value for min" + dimension + " can not be greater than max" + dimension
                );
              }
            }
            chkMinMax("Height");
            chkMinMax("Width");
            addStyle("maxHeight");
            addStyle("minHeight");
            addStyle("maxWidth");
            addStyle("minWidth");
          }
          function newId() {
            var id = options && options.id || defaults.id + count++;
            if (null !== document.getElementById(id)) {
              id += count++;
            }
            return id;
          }
          function ensureHasId(iframeId2) {
            if (typeof iframeId2 !== "string") {
              throw new TypeError("Invaild id for iFrame. Expected String");
            }
            if ("" === iframeId2) {
              iframe.id = iframeId2 = newId();
              logEnabled = (options || {}).log;
              log(
                iframeId2,
                "Added missing iframe ID: " + iframeId2 + " (" + iframe.src + ")"
              );
            }
            return iframeId2;
          }
          function setScrolling() {
            log(
              iframeId,
              "IFrame scrolling " + (settings[iframeId] && settings[iframeId].scrolling ? "enabled" : "disabled") + " for " + iframeId
            );
            iframe.style.overflow = false === (settings[iframeId] && settings[iframeId].scrolling) ? "hidden" : "auto";
            switch (settings[iframeId] && settings[iframeId].scrolling) {
              case "omit": {
                break;
              }
              case true: {
                iframe.scrolling = "yes";
                break;
              }
              case false: {
                iframe.scrolling = "no";
                break;
              }
              default: {
                iframe.scrolling = settings[iframeId] ? settings[iframeId].scrolling : "no";
              }
            }
          }
          function setupBodyMarginValues() {
            if ("number" === typeof (settings[iframeId] && settings[iframeId].bodyMargin) || "0" === (settings[iframeId] && settings[iframeId].bodyMargin)) {
              settings[iframeId].bodyMarginV1 = settings[iframeId].bodyMargin;
              settings[iframeId].bodyMargin = "" + settings[iframeId].bodyMargin + "px";
            }
          }
          function checkReset() {
            var firstRun = settings[iframeId] && settings[iframeId].firstRun, resetRequertMethod = settings[iframeId] && settings[iframeId].heightCalculationMethod in resetRequiredMethods;
            if (!firstRun && resetRequertMethod) {
              resetIFrame({ iframe, height: 0, width: 0, type: "init" });
            }
          }
          function setupIFrameObject() {
            if (settings[iframeId]) {
              settings[iframeId].iframe.iFrameResizer = {
                close: closeIFrame.bind(null, settings[iframeId].iframe),
                removeListeners: removeIframeListeners.bind(
                  null,
                  settings[iframeId].iframe
                ),
                resize: trigger.bind(
                  null,
                  "Window resize",
                  "resize",
                  settings[iframeId].iframe
                ),
                moveToAnchor: function(anchor) {
                  trigger(
                    "Move to anchor",
                    "moveToAnchor:" + anchor,
                    settings[iframeId].iframe,
                    iframeId
                  );
                },
                sendMessage: function(message) {
                  message = JSON.stringify(message);
                  trigger(
                    "Send Message",
                    "message:" + message,
                    settings[iframeId].iframe,
                    iframeId
                  );
                }
              };
            }
          }
          function init(msg) {
            function iFrameLoaded() {
              trigger("iFrame.onload", msg, iframe, undefined2, true);
              checkReset();
            }
            function createDestroyObserver(MutationObserver2) {
              if (!iframe.parentNode) {
                return null;
              }
              var destroyObserver2 = new MutationObserver2(function(mutations) {
                mutations.forEach(function(mutation) {
                  var removedNodes = Array.prototype.slice.call(mutation.removedNodes);
                  removedNodes.forEach(function(removedNode) {
                    if (removedNode === iframe) {
                      closeIFrame(iframe);
                    }
                  });
                });
              });
              destroyObserver2.observe(iframe.parentNode, {
                childList: true
              });
              return destroyObserver2;
            }
            var MutationObserver = getMutationObserver();
            if (MutationObserver) {
              destroyObserver = createDestroyObserver(MutationObserver);
            }
            addEventListener(iframe, "load", iFrameLoaded);
            trigger("init", msg, iframe, undefined2, true);
          }
          function checkOptions(options2) {
            if ("object" !== typeof options2) {
              throw new TypeError("Options is not an object");
            }
          }
          function copyOptions(options2) {
            for (var option in defaults) {
              if (Object.prototype.hasOwnProperty.call(defaults, option)) {
                settings[iframeId][option] = Object.prototype.hasOwnProperty.call(
                  options2,
                  option
                ) ? options2[option] : defaults[option];
              }
            }
          }
          function getTargetOrigin(remoteHost) {
            return "" === remoteHost || null !== remoteHost.match(/^(about:blank|javascript:|file:\/\/)/) ? "*" : remoteHost;
          }
          function depricate(key) {
            var splitName = key.split("Callback");
            if (splitName.length === 2) {
              var name = "on" + splitName[0].charAt(0).toUpperCase() + splitName[0].slice(1);
              this[name] = this[key];
              delete this[key];
              warn(
                iframeId,
                "Deprecated: '" + key + "' has been renamed '" + name + "'. The old method will be removed in the next major version."
              );
            }
          }
          function processOptions(options2) {
            options2 = options2 || {};
            settings[iframeId] = /* @__PURE__ */ Object.create(null);
            settings[iframeId].iframe = iframe;
            settings[iframeId].firstRun = true;
            settings[iframeId].remoteHost = iframe.src && iframe.src.split("/").slice(0, 3).join("/");
            checkOptions(options2);
            Object.keys(options2).forEach(depricate, options2);
            copyOptions(options2);
            if (settings[iframeId]) {
              settings[iframeId].targetOrigin = true === settings[iframeId].checkOrigin ? getTargetOrigin(settings[iframeId].remoteHost) : "*";
            }
          }
          function beenHere() {
            return iframeId in settings && "iFrameResizer" in iframe;
          }
          var iframeId = ensureHasId(iframe.id);
          if (beenHere()) {
            warn(iframeId, "Ignored iFrame, already setup.");
          } else {
            processOptions(options);
            setScrolling();
            setLimits();
            setupBodyMarginValues();
            init(createOutgoingMsg(iframeId));
            setupIFrameObject();
          }
        }
        function debouce(fn, time) {
          if (null === timer) {
            timer = setTimeout(function() {
              timer = null;
              fn();
            }, time);
          }
        }
        var frameTimer = {};
        function debounceFrameEvents(fn, time, frameId) {
          if (!frameTimer[frameId]) {
            frameTimer[frameId] = setTimeout(function() {
              frameTimer[frameId] = null;
              fn();
            }, time);
          }
        }
        function fixHiddenIFrames() {
          function checkIFrames() {
            function checkIFrame(settingId) {
              function chkDimension(dimension) {
                return "0px" === (settings[settingId] && settings[settingId].iframe.style[dimension]);
              }
              function isVisible(el) {
                return null !== el.offsetParent;
              }
              if (settings[settingId] && isVisible(settings[settingId].iframe) && (chkDimension("height") || chkDimension("width"))) {
                trigger(
                  "Visibility change",
                  "resize",
                  settings[settingId].iframe,
                  settingId
                );
              }
            }
            Object.keys(settings).forEach(function(key) {
              checkIFrame(key);
            });
          }
          function mutationObserved(mutations) {
            log(
              "window",
              "Mutation observed: " + mutations[0].target + " " + mutations[0].type
            );
            debouce(checkIFrames, 16);
          }
          function createMutationObserver() {
            var target = document.querySelector("body"), config = {
              attributes: true,
              attributeOldValue: false,
              characterData: true,
              characterDataOldValue: false,
              childList: true,
              subtree: true
            }, observer = new MutationObserver(mutationObserved);
            observer.observe(target, config);
          }
          var MutationObserver = getMutationObserver();
          if (MutationObserver) {
            createMutationObserver();
          }
        }
        function resizeIFrames(event) {
          function resize() {
            sendTriggerMsg("Window " + event, "resize");
          }
          log("window", "Trigger event: " + event);
          debouce(resize, 16);
        }
        function tabVisible() {
          function resize() {
            sendTriggerMsg("Tab Visible", "resize");
          }
          if ("hidden" !== document.visibilityState) {
            log("document", "Trigger event: Visibility change");
            debouce(resize, 16);
          }
        }
        function sendTriggerMsg(eventName, event) {
          function isIFrameResizeEnabled(iframeId) {
            return settings[iframeId] && "parent" === settings[iframeId].resizeFrom && settings[iframeId].autoResize && !settings[iframeId].firstRun;
          }
          Object.keys(settings).forEach(function(iframeId) {
            if (isIFrameResizeEnabled(iframeId)) {
              trigger(eventName, event, settings[iframeId].iframe, iframeId);
            }
          });
        }
        function setupEventListeners() {
          addEventListener(window, "message", iFrameListener);
          addEventListener(window, "resize", function() {
            resizeIFrames("resize");
          });
          addEventListener(document, "visibilitychange", tabVisible);
          addEventListener(document, "-webkit-visibilitychange", tabVisible);
        }
        function factory() {
          function init(options, element) {
            function chkType() {
              if (!element.tagName) {
                throw new TypeError("Object is not a valid DOM element");
              } else if ("IFRAME" !== element.tagName.toUpperCase()) {
                throw new TypeError(
                  "Expected <IFRAME> tag, found <" + element.tagName + ">"
                );
              }
            }
            if (element) {
              chkType();
              setupIFrame(element, options);
              iFrames.push(element);
            }
          }
          function warnDeprecatedOptions(options) {
            if (options && options.enablePublicMethods) {
              warn(
                "enablePublicMethods option has been removed, public methods are now always available in the iFrame"
              );
            }
          }
          var iFrames;
          setupRequestAnimationFrame();
          setupEventListeners();
          return function iFrameResizeF(options, target) {
            iFrames = [];
            warnDeprecatedOptions(options);
            switch (typeof target) {
              case "undefined":
              case "string": {
                Array.prototype.forEach.call(
                  document.querySelectorAll(target || "iframe"),
                  init.bind(undefined2, options)
                );
                break;
              }
              case "object": {
                init(options, target);
                break;
              }
              default: {
                throw new TypeError("Unexpected data type (" + typeof target + ")");
              }
            }
            return iFrames;
          };
        }
        function createJQueryPublicMethod($) {
          if (!$.fn) {
            info("", "Unable to bind to jQuery, it is not fully loaded.");
          } else if (!$.fn.iFrameResize) {
            $.fn.iFrameResize = function $iFrameResizeF(options) {
              function init(index, element) {
                setupIFrame(element, options);
              }
              return this.filter("iframe").each(init).end();
            };
          }
        }
        if (window.jQuery !== undefined2) {
          createJQueryPublicMethod(window.jQuery);
        }
        if (typeof define === "function" && define.amd) {
          define([], factory);
        } else if (typeof module === "object" && typeof module.exports === "object") {
          module.exports = factory();
        }
        window.iFrameResize = window.iFrameResize || factory();
      })();
    }
  });

  // node_modules/iframe-resizer/js/iframeResizer.contentWindow.js
  var require_iframeResizer_contentWindow = __commonJS({
    "node_modules/iframe-resizer/js/iframeResizer.contentWindow.js"(exports, module) {
      (function(undefined2) {
        if (typeof window === "undefined") return;
        var autoResize = true, base = 10, bodyBackground = "", bodyMargin = 0, bodyMarginStr = "", bodyObserver = null, bodyPadding = "", calculateWidth = false, doubleEventList = { resize: 1, click: 1 }, eventCancelTimer = 128, firstRun = true, height = 1, heightCalcModeDefault = "bodyOffset", heightCalcMode = heightCalcModeDefault, initLock = true, initMsg = "", inPageLinks = {}, interval = 32, intervalTimer = null, logging = false, mouseEvents = false, msgID = "[iFrameSizer]", msgIdLen = msgID.length, myID = "", resetRequiredMethods = {
          max: 1,
          min: 1,
          bodyScroll: 1,
          documentElementScroll: 1
        }, resizeFrom = "child", sendPermit = true, target = window.parent, targetOriginDefault = "*", tolerance = 0, triggerLocked = false, triggerLockedTimer = null, throttledTimer = 16, width = 1, widthCalcModeDefault = "scroll", widthCalcMode = widthCalcModeDefault, win = window, onMessage = function() {
          warn("onMessage function not defined");
        }, onReady = function() {
        }, onPageInfo = function() {
        }, customCalcMethods = {
          height: function() {
            warn("Custom height calculation function not defined");
            return document.documentElement.offsetHeight;
          },
          width: function() {
            warn("Custom width calculation function not defined");
            return document.body.scrollWidth;
          }
        }, eventHandlersByName = {}, passiveSupported = false;
        function noop() {
        }
        try {
          var options = Object.create(
            {},
            {
              passive: {
                // eslint-disable-next-line getter-return
                get: function() {
                  passiveSupported = true;
                }
              }
            }
          );
          window.addEventListener("test", noop, options);
          window.removeEventListener("test", noop, options);
        } catch (error) {
        }
        function addEventListener(el, evt, func, options2) {
          el.addEventListener(evt, func, passiveSupported ? options2 || {} : false);
        }
        function removeEventListener(el, evt, func) {
          el.removeEventListener(evt, func, false);
        }
        function capitalizeFirstLetter(string) {
          return string.charAt(0).toUpperCase() + string.slice(1);
        }
        function throttle(func) {
          var context, args, result, timeout = null, previous = 0, later = function() {
            previous = Date.now();
            timeout = null;
            result = func.apply(context, args);
            if (!timeout) {
              context = args = null;
            }
          };
          return function() {
            var now = Date.now();
            if (!previous) {
              previous = now;
            }
            var remaining = throttledTimer - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0 || remaining > throttledTimer) {
              if (timeout) {
                clearTimeout(timeout);
                timeout = null;
              }
              previous = now;
              result = func.apply(context, args);
              if (!timeout) {
                context = args = null;
              }
            } else if (!timeout) {
              timeout = setTimeout(later, remaining);
            }
            return result;
          };
        }
        function formatLogMsg(msg) {
          return msgID + "[" + myID + "] " + msg;
        }
        function log(msg) {
          if (logging && "object" === typeof window.console) {
            console.log(formatLogMsg(msg));
          }
        }
        function warn(msg) {
          if ("object" === typeof window.console) {
            console.warn(formatLogMsg(msg));
          }
        }
        function init() {
          readDataFromParent();
          log("Initialising iFrame (" + window.location.href + ")");
          readDataFromPage();
          setMargin();
          setBodyStyle("background", bodyBackground);
          setBodyStyle("padding", bodyPadding);
          injectClearFixIntoBodyElement();
          checkHeightMode();
          checkWidthMode();
          stopInfiniteResizingOfIFrame();
          setupPublicMethods();
          setupMouseEvents();
          startEventListeners();
          inPageLinks = setupInPageLinks();
          sendSize("init", "Init message from host page");
          onReady();
        }
        function readDataFromParent() {
          function strBool(str) {
            return "true" === str;
          }
          var data = initMsg.slice(msgIdLen).split(":");
          myID = data[0];
          bodyMargin = undefined2 === data[1] ? bodyMargin : Number(data[1]);
          calculateWidth = undefined2 === data[2] ? calculateWidth : strBool(data[2]);
          logging = undefined2 === data[3] ? logging : strBool(data[3]);
          interval = undefined2 === data[4] ? interval : Number(data[4]);
          autoResize = undefined2 === data[6] ? autoResize : strBool(data[6]);
          bodyMarginStr = data[7];
          heightCalcMode = undefined2 === data[8] ? heightCalcMode : data[8];
          bodyBackground = data[9];
          bodyPadding = data[10];
          tolerance = undefined2 === data[11] ? tolerance : Number(data[11]);
          inPageLinks.enable = undefined2 === data[12] ? false : strBool(data[12]);
          resizeFrom = undefined2 === data[13] ? resizeFrom : data[13];
          widthCalcMode = undefined2 === data[14] ? widthCalcMode : data[14];
          mouseEvents = undefined2 === data[15] ? mouseEvents : strBool(data[15]);
        }
        function depricate(key) {
          var splitName = key.split("Callback");
          if (splitName.length === 2) {
            var name = "on" + splitName[0].charAt(0).toUpperCase() + splitName[0].slice(1);
            this[name] = this[key];
            delete this[key];
            warn(
              "Deprecated: '" + key + "' has been renamed '" + name + "'. The old method will be removed in the next major version."
            );
          }
        }
        function readDataFromPage() {
          function readData() {
            var data = window.iFrameResizer;
            log("Reading data from page: " + JSON.stringify(data));
            Object.keys(data).forEach(depricate, data);
            onMessage = "onMessage" in data ? data.onMessage : onMessage;
            onReady = "onReady" in data ? data.onReady : onReady;
            targetOriginDefault = "targetOrigin" in data ? data.targetOrigin : targetOriginDefault;
            heightCalcMode = "heightCalculationMethod" in data ? data.heightCalculationMethod : heightCalcMode;
            widthCalcMode = "widthCalculationMethod" in data ? data.widthCalculationMethod : widthCalcMode;
          }
          function setupCustomCalcMethods(calcMode, calcFunc) {
            if ("function" === typeof calcMode) {
              log("Setup custom " + calcFunc + "CalcMethod");
              customCalcMethods[calcFunc] = calcMode;
              calcMode = "custom";
            }
            return calcMode;
          }
          if ("iFrameResizer" in window && Object === window.iFrameResizer.constructor) {
            readData();
            heightCalcMode = setupCustomCalcMethods(heightCalcMode, "height");
            widthCalcMode = setupCustomCalcMethods(widthCalcMode, "width");
          }
          log("TargetOrigin for parent set to: " + targetOriginDefault);
        }
        function chkCSS(attr, value) {
          if (-1 !== value.indexOf("-")) {
            warn("Negative CSS value ignored for " + attr);
            value = "";
          }
          return value;
        }
        function setBodyStyle(attr, value) {
          if (undefined2 !== value && "" !== value && "null" !== value) {
            document.body.style[attr] = value;
            log("Body " + attr + ' set to "' + value + '"');
          }
        }
        function setMargin() {
          if (undefined2 === bodyMarginStr) {
            bodyMarginStr = bodyMargin + "px";
          }
          setBodyStyle("margin", chkCSS("margin", bodyMarginStr));
        }
        function stopInfiniteResizingOfIFrame() {
          document.documentElement.style.height = "";
          document.body.style.height = "";
          log('HTML & body height set to "auto"');
        }
        function manageTriggerEvent(options2) {
          var listener = {
            add: function(eventName) {
              function handleEvent() {
                sendSize(options2.eventName, options2.eventType);
              }
              eventHandlersByName[eventName] = handleEvent;
              addEventListener(window, eventName, handleEvent, { passive: true });
            },
            remove: function(eventName) {
              var handleEvent = eventHandlersByName[eventName];
              delete eventHandlersByName[eventName];
              removeEventListener(window, eventName, handleEvent);
            }
          };
          if (options2.eventNames && Array.prototype.map) {
            options2.eventName = options2.eventNames[0];
            options2.eventNames.map(listener[options2.method]);
          } else {
            listener[options2.method](options2.eventName);
          }
          log(
            capitalizeFirstLetter(options2.method) + " event listener: " + options2.eventType
          );
        }
        function manageEventListeners(method) {
          manageTriggerEvent({
            method,
            eventType: "Animation Start",
            eventNames: ["animationstart", "webkitAnimationStart"]
          });
          manageTriggerEvent({
            method,
            eventType: "Animation Iteration",
            eventNames: ["animationiteration", "webkitAnimationIteration"]
          });
          manageTriggerEvent({
            method,
            eventType: "Animation End",
            eventNames: ["animationend", "webkitAnimationEnd"]
          });
          manageTriggerEvent({
            method,
            eventType: "Input",
            eventName: "input"
          });
          manageTriggerEvent({
            method,
            eventType: "Mouse Up",
            eventName: "mouseup"
          });
          manageTriggerEvent({
            method,
            eventType: "Mouse Down",
            eventName: "mousedown"
          });
          manageTriggerEvent({
            method,
            eventType: "Orientation Change",
            eventName: "orientationchange"
          });
          manageTriggerEvent({
            method,
            eventType: "Print",
            eventNames: ["afterprint", "beforeprint"]
          });
          manageTriggerEvent({
            method,
            eventType: "Ready State Change",
            eventName: "readystatechange"
          });
          manageTriggerEvent({
            method,
            eventType: "Touch Start",
            eventName: "touchstart"
          });
          manageTriggerEvent({
            method,
            eventType: "Touch End",
            eventName: "touchend"
          });
          manageTriggerEvent({
            method,
            eventType: "Touch Cancel",
            eventName: "touchcancel"
          });
          manageTriggerEvent({
            method,
            eventType: "Transition Start",
            eventNames: [
              "transitionstart",
              "webkitTransitionStart",
              "MSTransitionStart",
              "oTransitionStart",
              "otransitionstart"
            ]
          });
          manageTriggerEvent({
            method,
            eventType: "Transition Iteration",
            eventNames: [
              "transitioniteration",
              "webkitTransitionIteration",
              "MSTransitionIteration",
              "oTransitionIteration",
              "otransitioniteration"
            ]
          });
          manageTriggerEvent({
            method,
            eventType: "Transition End",
            eventNames: [
              "transitionend",
              "webkitTransitionEnd",
              "MSTransitionEnd",
              "oTransitionEnd",
              "otransitionend"
            ]
          });
          if ("child" === resizeFrom) {
            manageTriggerEvent({
              method,
              eventType: "IFrame Resized",
              eventName: "resize"
            });
          }
        }
        function checkCalcMode(calcMode, calcModeDefault, modes, type) {
          if (calcModeDefault !== calcMode) {
            if (!(calcMode in modes)) {
              warn(
                calcMode + " is not a valid option for " + type + "CalculationMethod."
              );
              calcMode = calcModeDefault;
            }
            log(type + ' calculation method set to "' + calcMode + '"');
          }
          return calcMode;
        }
        function checkHeightMode() {
          heightCalcMode = checkCalcMode(
            heightCalcMode,
            heightCalcModeDefault,
            getHeight,
            "height"
          );
        }
        function checkWidthMode() {
          widthCalcMode = checkCalcMode(
            widthCalcMode,
            widthCalcModeDefault,
            getWidth,
            "width"
          );
        }
        function startEventListeners() {
          if (true === autoResize) {
            manageEventListeners("add");
            setupMutationObserver();
          } else {
            log("Auto Resize disabled");
          }
        }
        function disconnectMutationObserver() {
          if (null !== bodyObserver) {
            bodyObserver.disconnect();
          }
        }
        function stopEventListeners() {
          manageEventListeners("remove");
          disconnectMutationObserver();
          clearInterval(intervalTimer);
        }
        function injectClearFixIntoBodyElement() {
          var clearFix = document.createElement("div");
          clearFix.style.clear = "both";
          clearFix.style.display = "block";
          clearFix.style.height = "0";
          document.body.appendChild(clearFix);
        }
        function setupInPageLinks() {
          function getPagePosition() {
            return {
              x: window.pageXOffset === undefined2 ? document.documentElement.scrollLeft : window.pageXOffset,
              y: window.pageYOffset === undefined2 ? document.documentElement.scrollTop : window.pageYOffset
            };
          }
          function getElementPosition(el) {
            var elPosition = el.getBoundingClientRect(), pagePosition = getPagePosition();
            return {
              x: parseInt(elPosition.left, 10) + parseInt(pagePosition.x, 10),
              y: parseInt(elPosition.top, 10) + parseInt(pagePosition.y, 10)
            };
          }
          function findTarget(location2) {
            function jumpToTarget(target3) {
              var jumpPosition = getElementPosition(target3);
              log(
                "Moving to in page link (#" + hash + ") at x: " + jumpPosition.x + " y: " + jumpPosition.y
              );
              sendMsg(jumpPosition.y, jumpPosition.x, "scrollToOffset");
            }
            var hash = location2.split("#")[1] || location2, hashData = decodeURIComponent(hash), target2 = document.getElementById(hashData) || document.getElementsByName(hashData)[0];
            if (undefined2 === target2) {
              log(
                "In page link (#" + hash + ") not found in iFrame, so sending to parent"
              );
              sendMsg(0, 0, "inPageLink", "#" + hash);
            } else {
              jumpToTarget(target2);
            }
          }
          function checkLocationHash() {
            var hash = window.location.hash;
            var href = window.location.href;
            if ("" !== hash && "#" !== hash) {
              findTarget(href);
            }
          }
          function bindAnchors() {
            function setupLink(el) {
              function linkClicked(e) {
                e.preventDefault();
                findTarget(this.getAttribute("href"));
              }
              if ("#" !== el.getAttribute("href")) {
                addEventListener(el, "click", linkClicked);
              }
            }
            Array.prototype.forEach.call(
              document.querySelectorAll('a[href^="#"]'),
              setupLink
            );
          }
          function bindLocationHash() {
            addEventListener(window, "hashchange", checkLocationHash);
          }
          function initCheck() {
            setTimeout(checkLocationHash, eventCancelTimer);
          }
          function enableInPageLinks() {
            if (Array.prototype.forEach && document.querySelectorAll) {
              log("Setting up location.hash handlers");
              bindAnchors();
              bindLocationHash();
              initCheck();
            } else {
              warn(
                "In page linking not fully supported in this browser! (See README.md for IE8 workaround)"
              );
            }
          }
          if (inPageLinks.enable) {
            enableInPageLinks();
          } else {
            log("In page linking not enabled");
          }
          return {
            findTarget
          };
        }
        function setupMouseEvents() {
          if (mouseEvents !== true) return;
          function sendMouse(e) {
            sendMsg(0, 0, e.type, e.screenY + ":" + e.screenX);
          }
          function addMouseListener(evt, name) {
            log("Add event listener: " + name);
            addEventListener(window.document, evt, sendMouse);
          }
          addMouseListener("mouseenter", "Mouse Enter");
          addMouseListener("mouseleave", "Mouse Leave");
        }
        function setupPublicMethods() {
          log("Enable public methods");
          win.parentIFrame = {
            autoResize: function autoResizeF(resize) {
              if (true === resize && false === autoResize) {
                autoResize = true;
                startEventListeners();
              } else if (false === resize && true === autoResize) {
                autoResize = false;
                stopEventListeners();
              }
              sendMsg(0, 0, "autoResize", JSON.stringify(autoResize));
              return autoResize;
            },
            close: function closeF() {
              sendMsg(0, 0, "close");
            },
            getId: function getIdF() {
              return myID;
            },
            getPageInfo: function getPageInfoF(callback) {
              if ("function" === typeof callback) {
                onPageInfo = callback;
                sendMsg(0, 0, "pageInfo");
              } else {
                onPageInfo = function() {
                };
                sendMsg(0, 0, "pageInfoStop");
              }
            },
            moveToAnchor: function moveToAnchorF(hash) {
              inPageLinks.findTarget(hash);
            },
            reset: function resetF() {
              resetIFrame("parentIFrame.reset");
            },
            scrollTo: function scrollToF(x, y) {
              sendMsg(y, x, "scrollTo");
            },
            scrollToOffset: function scrollToF(x, y) {
              sendMsg(y, x, "scrollToOffset");
            },
            sendMessage: function sendMessageF(msg, targetOrigin) {
              sendMsg(0, 0, "message", JSON.stringify(msg), targetOrigin);
            },
            setHeightCalculationMethod: function setHeightCalculationMethodF(heightCalculationMethod) {
              heightCalcMode = heightCalculationMethod;
              checkHeightMode();
            },
            setWidthCalculationMethod: function setWidthCalculationMethodF(widthCalculationMethod) {
              widthCalcMode = widthCalculationMethod;
              checkWidthMode();
            },
            setTargetOrigin: function setTargetOriginF(targetOrigin) {
              log("Set targetOrigin: " + targetOrigin);
              targetOriginDefault = targetOrigin;
            },
            size: function sizeF(customHeight, customWidth) {
              var valString = "" + (customHeight || "") + (customWidth ? "," + customWidth : "");
              sendSize(
                "size",
                "parentIFrame.size(" + valString + ")",
                customHeight,
                customWidth
              );
            }
          };
        }
        function initInterval() {
          if (0 !== interval) {
            log("setInterval: " + interval + "ms");
            intervalTimer = setInterval(function() {
              sendSize("interval", "setInterval: " + interval);
            }, Math.abs(interval));
          }
        }
        function setupBodyMutationObserver() {
          function addImageLoadListners(mutation) {
            function addImageLoadListener(element) {
              if (false === element.complete) {
                log("Attach listeners to " + element.src);
                element.addEventListener("load", imageLoaded, false);
                element.addEventListener("error", imageError, false);
                elements.push(element);
              }
            }
            if (mutation.type === "attributes" && mutation.attributeName === "src") {
              addImageLoadListener(mutation.target);
            } else if (mutation.type === "childList") {
              Array.prototype.forEach.call(
                mutation.target.querySelectorAll("img"),
                addImageLoadListener
              );
            }
          }
          function removeFromArray(element) {
            elements.splice(elements.indexOf(element), 1);
          }
          function removeImageLoadListener(element) {
            log("Remove listeners from " + element.src);
            element.removeEventListener("load", imageLoaded, false);
            element.removeEventListener("error", imageError, false);
            removeFromArray(element);
          }
          function imageEventTriggered(event, type, typeDesc) {
            removeImageLoadListener(event.target);
            sendSize(type, typeDesc + ": " + event.target.src);
          }
          function imageLoaded(event) {
            imageEventTriggered(event, "imageLoad", "Image loaded");
          }
          function imageError(event) {
            imageEventTriggered(event, "imageLoadFailed", "Image load failed");
          }
          function mutationObserved(mutations) {
            sendSize(
              "mutationObserver",
              "mutationObserver: " + mutations[0].target + " " + mutations[0].type
            );
            mutations.forEach(addImageLoadListners);
          }
          function createMutationObserver() {
            var target2 = document.querySelector("body"), config = {
              attributes: true,
              attributeOldValue: false,
              characterData: true,
              characterDataOldValue: false,
              childList: true,
              subtree: true
            };
            observer = new MutationObserver(mutationObserved);
            log("Create body MutationObserver");
            observer.observe(target2, config);
            return observer;
          }
          var elements = [], MutationObserver = window.MutationObserver || window.WebKitMutationObserver, observer = createMutationObserver();
          return {
            disconnect: function() {
              if ("disconnect" in observer) {
                log("Disconnect body MutationObserver");
                observer.disconnect();
                elements.forEach(removeImageLoadListener);
              }
            }
          };
        }
        function setupMutationObserver() {
          var forceIntervalTimer = 0 > interval;
          if (window.MutationObserver || window.WebKitMutationObserver) {
            if (forceIntervalTimer) {
              initInterval();
            } else {
              bodyObserver = setupBodyMutationObserver();
            }
          } else {
            log("MutationObserver not supported in this browser!");
            initInterval();
          }
        }
        function getComputedStyle2(prop, el) {
          var retVal = 0;
          el = el || document.body;
          retVal = document.defaultView.getComputedStyle(el, null);
          retVal = null === retVal ? 0 : retVal[prop];
          return parseInt(retVal, base);
        }
        function chkEventThottle(timer) {
          if (timer > throttledTimer / 2) {
            throttledTimer = 2 * timer;
            log("Event throttle increased to " + throttledTimer + "ms");
          }
        }
        function getMaxElement(side, elements) {
          var elementsLength = elements.length, elVal = 0, maxVal = 0, Side = capitalizeFirstLetter(side), timer = Date.now();
          for (var i = 0; i < elementsLength; i++) {
            elVal = elements[i].getBoundingClientRect()[side] + getComputedStyle2("margin" + Side, elements[i]);
            if (elVal > maxVal) {
              maxVal = elVal;
            }
          }
          timer = Date.now() - timer;
          log("Parsed " + elementsLength + " HTML elements");
          log("Element position calculated in " + timer + "ms");
          chkEventThottle(timer);
          return maxVal;
        }
        function getAllMeasurements(dimensions) {
          return [
            dimensions.bodyOffset(),
            dimensions.bodyScroll(),
            dimensions.documentElementOffset(),
            dimensions.documentElementScroll()
          ];
        }
        function getTaggedElements(side, tag) {
          function noTaggedElementsFound() {
            warn("No tagged elements (" + tag + ") found on page");
            return document.querySelectorAll("body *");
          }
          var elements = document.querySelectorAll("[" + tag + "]");
          if (elements.length === 0) noTaggedElementsFound();
          return getMaxElement(side, elements);
        }
        function getAllElements() {
          return document.querySelectorAll("body *");
        }
        var getHeight = {
          bodyOffset: function getBodyOffsetHeight() {
            return document.body.offsetHeight + getComputedStyle2("marginTop") + getComputedStyle2("marginBottom");
          },
          offset: function() {
            return getHeight.bodyOffset();
          },
          bodyScroll: function getBodyScrollHeight() {
            return document.body.scrollHeight;
          },
          custom: function getCustomWidth() {
            return customCalcMethods.height();
          },
          documentElementOffset: function getDEOffsetHeight() {
            return document.documentElement.offsetHeight;
          },
          documentElementScroll: function getDEScrollHeight() {
            return document.documentElement.scrollHeight;
          },
          max: function getMaxHeight() {
            return Math.max.apply(null, getAllMeasurements(getHeight));
          },
          min: function getMinHeight() {
            return Math.min.apply(null, getAllMeasurements(getHeight));
          },
          grow: function growHeight() {
            return getHeight.max();
          },
          lowestElement: function getBestHeight() {
            return Math.max(
              getHeight.bodyOffset() || getHeight.documentElementOffset(),
              getMaxElement("bottom", getAllElements())
            );
          },
          taggedElement: function getTaggedElementsHeight() {
            return getTaggedElements("bottom", "data-iframe-height");
          }
        }, getWidth = {
          bodyScroll: function getBodyScrollWidth() {
            return document.body.scrollWidth;
          },
          bodyOffset: function getBodyOffsetWidth() {
            return document.body.offsetWidth;
          },
          custom: function getCustomWidth() {
            return customCalcMethods.width();
          },
          documentElementScroll: function getDEScrollWidth() {
            return document.documentElement.scrollWidth;
          },
          documentElementOffset: function getDEOffsetWidth() {
            return document.documentElement.offsetWidth;
          },
          scroll: function getMaxWidth() {
            return Math.max(getWidth.bodyScroll(), getWidth.documentElementScroll());
          },
          max: function getMaxWidth() {
            return Math.max.apply(null, getAllMeasurements(getWidth));
          },
          min: function getMinWidth() {
            return Math.min.apply(null, getAllMeasurements(getWidth));
          },
          rightMostElement: function rightMostElement() {
            return getMaxElement("right", getAllElements());
          },
          taggedElement: function getTaggedElementsWidth() {
            return getTaggedElements("right", "data-iframe-width");
          }
        };
        function sizeIFrame(triggerEvent, triggerEventDesc, customHeight, customWidth) {
          function resizeIFrame() {
            height = currentHeight;
            width = currentWidth;
            sendMsg(height, width, triggerEvent);
          }
          function isSizeChangeDetected() {
            function checkTolarance(a, b) {
              var retVal = Math.abs(a - b) <= tolerance;
              return !retVal;
            }
            currentHeight = undefined2 === customHeight ? getHeight[heightCalcMode]() : customHeight;
            currentWidth = undefined2 === customWidth ? getWidth[widthCalcMode]() : customWidth;
            return checkTolarance(height, currentHeight) || calculateWidth && checkTolarance(width, currentWidth);
          }
          function isForceResizableEvent() {
            return !(triggerEvent in { init: 1, interval: 1, size: 1 });
          }
          function isForceResizableCalcMode() {
            return heightCalcMode in resetRequiredMethods || calculateWidth && widthCalcMode in resetRequiredMethods;
          }
          function logIgnored() {
            log("No change in size detected");
          }
          function checkDownSizing() {
            if (isForceResizableEvent() && isForceResizableCalcMode()) {
              resetIFrame(triggerEventDesc);
            } else if (!(triggerEvent in { interval: 1 })) {
              logIgnored();
            }
          }
          var currentHeight, currentWidth;
          if (isSizeChangeDetected() || "init" === triggerEvent) {
            lockTrigger();
            resizeIFrame();
          } else {
            checkDownSizing();
          }
        }
        var sizeIFrameThrottled = throttle(sizeIFrame);
        function sendSize(triggerEvent, triggerEventDesc, customHeight, customWidth) {
          function recordTrigger() {
            if (!(triggerEvent in { reset: 1, resetPage: 1, init: 1 })) {
              log("Trigger event: " + triggerEventDesc);
            }
          }
          function isDoubleFiredEvent() {
            return triggerLocked && triggerEvent in doubleEventList;
          }
          if (isDoubleFiredEvent()) {
            log("Trigger event cancelled: " + triggerEvent);
          } else {
            recordTrigger();
            if (triggerEvent === "init") {
              sizeIFrame(triggerEvent, triggerEventDesc, customHeight, customWidth);
            } else {
              sizeIFrameThrottled(
                triggerEvent,
                triggerEventDesc,
                customHeight,
                customWidth
              );
            }
          }
        }
        function lockTrigger() {
          if (!triggerLocked) {
            triggerLocked = true;
            log("Trigger event lock on");
          }
          clearTimeout(triggerLockedTimer);
          triggerLockedTimer = setTimeout(function() {
            triggerLocked = false;
            log("Trigger event lock off");
            log("--");
          }, eventCancelTimer);
        }
        function triggerReset(triggerEvent) {
          height = getHeight[heightCalcMode]();
          width = getWidth[widthCalcMode]();
          sendMsg(height, width, triggerEvent);
        }
        function resetIFrame(triggerEventDesc) {
          var hcm = heightCalcMode;
          heightCalcMode = heightCalcModeDefault;
          log("Reset trigger event: " + triggerEventDesc);
          lockTrigger();
          triggerReset("reset");
          heightCalcMode = hcm;
        }
        function sendMsg(height2, width2, triggerEvent, msg, targetOrigin) {
          function setTargetOrigin() {
            if (undefined2 === targetOrigin) {
              targetOrigin = targetOriginDefault;
            } else {
              log("Message targetOrigin: " + targetOrigin);
            }
          }
          function sendToParent() {
            var size = height2 + ":" + width2, message = myID + ":" + size + ":" + triggerEvent + (undefined2 === msg ? "" : ":" + msg);
            log("Sending message to host page (" + message + ")");
            target.postMessage(msgID + message, targetOrigin);
          }
          if (true === sendPermit) {
            setTargetOrigin();
            sendToParent();
          }
        }
        function receiver(event) {
          var processRequestFromParent = {
            init: function initFromParent() {
              initMsg = event.data;
              target = event.source;
              init();
              firstRun = false;
              setTimeout(function() {
                initLock = false;
              }, eventCancelTimer);
            },
            reset: function resetFromParent() {
              if (initLock) {
                log("Page reset ignored by init");
              } else {
                log("Page size reset by host page");
                triggerReset("resetPage");
              }
            },
            resize: function resizeFromParent() {
              sendSize("resizeParent", "Parent window requested size check");
            },
            moveToAnchor: function moveToAnchorF() {
              inPageLinks.findTarget(getData());
            },
            inPageLink: function inPageLinkF() {
              this.moveToAnchor();
            },
            // Backward compatibility
            pageInfo: function pageInfoFromParent() {
              var msgBody = getData();
              log("PageInfoFromParent called from parent: " + msgBody);
              onPageInfo(JSON.parse(msgBody));
              log(" --");
            },
            message: function messageFromParent() {
              var msgBody = getData();
              log("onMessage called from parent: " + msgBody);
              onMessage(JSON.parse(msgBody));
              log(" --");
            }
          };
          function isMessageForUs() {
            return msgID === ("" + event.data).slice(0, msgIdLen);
          }
          function getMessageType() {
            return event.data.split("]")[1].split(":")[0];
          }
          function getData() {
            return event.data.slice(event.data.indexOf(":") + 1);
          }
          function isMiddleTier() {
            return !(typeof module !== "undefined" && module.exports) && "iFrameResize" in window || window.jQuery !== undefined2 && "iFrameResize" in window.jQuery.prototype;
          }
          function isInitMsg() {
            return event.data.split(":")[2] in { true: 1, false: 1 };
          }
          function callFromParent() {
            var messageType = getMessageType();
            if (messageType in processRequestFromParent) {
              processRequestFromParent[messageType]();
            } else if (!isMiddleTier() && !isInitMsg()) {
              warn("Unexpected message (" + event.data + ")");
            }
          }
          function processMessage() {
            if (false === firstRun) {
              callFromParent();
            } else if (isInitMsg()) {
              processRequestFromParent.init();
            } else {
              log(
                'Ignored message of type "' + getMessageType() + '". Received before initialization.'
              );
            }
          }
          if (isMessageForUs()) {
            processMessage();
          }
        }
        function chkLateLoaded() {
          if ("loading" !== document.readyState) {
            window.parent.postMessage("[iFrameResizerChild]Ready", "*");
          }
        }
        if (!("iframeResizer" in window)) {
          window.iframeChildListener = function(data) {
            receiver({ data, sameDomian: true });
          };
          addEventListener(window, "message", receiver);
          addEventListener(window, "readystatechange", chkLateLoaded);
          chkLateLoaded();
        }
      })();
    }
  });

  // node_modules/iframe-resizer/index.js
  var require_iframe_resizer = __commonJS({
    "node_modules/iframe-resizer/index.js"(exports, module) {
      var iframeResize = require_iframeResizer();
      module.exports = {
        iframeResize,
        iframeResizer: iframeResize,
        // Backwards compatibility
        contentWindow: require_iframeResizer_contentWindow()
      };
    }
  });

  // node_modules/@forge/bridge/out/view/adf-renderer.js
  var require_adf_renderer = __commonJS({
    "node_modules/@forge/bridge/out/view/adf-renderer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createAdfRendererIframeProps = void 0;
      var uuid_1 = require_commonjs_browser();
      var createAdfRendererIframeProps = async (context, iframeId) => {
        const IframeResizer = await Promise.resolve().then(() => __toESM(require_iframe_resizer()));
        const IframeResizerModule = IframeResizer.default || IframeResizer;
        const origin = new URL(document.referrer).origin;
        const src = `${origin}/forge-apps/adf-renderer`;
        const id = iframeId || `forge-adf-renderer-iframe-${(0, uuid_1.v4)()}`;
        const onLoad = () => {
          var _a, _b;
          const iframe = document.getElementById(id);
          const message = {
            type: "adf-document",
            document: (_a = context.extension.macro) === null || _a === void 0 ? void 0 : _a.body,
            timestamp: Date.now(),
            source: "forge-adf-renderer",
            localId: context.localId
          };
          IframeResizerModule.iframeResizer({
            heightCalculationMethod: "taggedElement",
            widthCalculationMethod: "bodyScroll",
            initCallback: (iframe2) => {
              var _a2;
              (_a2 = iframe2 === null || iframe2 === void 0 ? void 0 : iframe2.iFrameResizer) === null || _a2 === void 0 ? void 0 : _a2.resize();
            }
          }, iframe || "");
          (_b = iframe === null || iframe === void 0 ? void 0 : iframe.contentWindow) === null || _b === void 0 ? void 0 : _b.postMessage(message, origin);
        };
        setTimeout(() => {
          document.documentElement.style.height = "auto";
          document.body.style.height = "auto";
        }, 200);
        return {
          id,
          src,
          onLoad
        };
      };
      exports.createAdfRendererIframeProps = createAdfRendererIframeProps;
    }
  });

  // node_modules/@forge/bridge/out/view/view.js
  var require_view = __commonJS({
    "node_modules/@forge/bridge/out/view/view.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.view = void 0;
      var submit_1 = require_submit();
      var close_1 = require_close();
      var open_1 = require_open();
      var refresh_1 = require_refresh();
      var createHistory_1 = require_createHistory();
      var getContext_1 = require_getContext();
      var changeWindowTitle_1 = require_changeWindowTitle();
      var theme_1 = require_theme();
      var emitReadyEvent_1 = require_emitReadyEvent();
      var adf_renderer_1 = require_adf_renderer();
      exports.view = {
        submit: submit_1.submit,
        close: close_1.close,
        open: open_1.open,
        refresh: refresh_1.refresh,
        createHistory: createHistory_1.createHistory,
        getContext: getContext_1.getContext,
        theme: theme_1.theme,
        changeWindowTitle: changeWindowTitle_1.changeWindowTitle,
        emitReadyEvent: emitReadyEvent_1.emitReadyEvent,
        createAdfRendererIframeProps: adf_renderer_1.createAdfRendererIframeProps
      };
    }
  });

  // node_modules/@forge/bridge/out/view/index.js
  var require_view2 = __commonJS({
    "node_modules/@forge/bridge/out/view/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      tslib_1.__exportStar(require_view(), exports);
    }
  });

  // node_modules/@forge/bridge/out/router/router.js
  var require_router = __commonJS({
    "node_modules/@forge/bridge/out/router/router.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.router = void 0;
      var bridge_1 = require_bridge();
      var callBridge = (0, bridge_1.getCallBridge)();
      var getUrl = async (location2) => {
        if (!(location2 === null || location2 === void 0 ? void 0 : location2.target)) {
          throw new Error("target is required for getUrl");
        }
        const url = await callBridge("getUrl", location2);
        if (!url) {
          throw new Error("Failed to get URL");
        }
        try {
          return new URL(url);
        } catch (error) {
          throw new Error(`Failed to parse URL: ${url} (${error})`);
        }
      };
      var navigate = (location2) => {
        if (typeof location2 === "string") {
          return callBridge("navigate", { url: location2, type: "same-tab" });
        } else {
          if (!(location2 === null || location2 === void 0 ? void 0 : location2.target)) {
            throw new Error("target is required for navigation");
          }
          return callBridge("navigate", { ...location2, type: "same-tab" });
        }
      };
      var open = (location2) => {
        if (typeof location2 === "string") {
          return callBridge("navigate", { url: location2, type: "new-tab" });
        } else {
          if (!(location2 === null || location2 === void 0 ? void 0 : location2.target)) {
            throw new Error("target is required for navigation");
          }
          return callBridge("navigate", { ...location2, type: "new-tab" });
        }
      };
      var reload = async () => callBridge("reload");
      exports.router = {
        getUrl,
        navigate,
        open,
        reload
      };
    }
  });

  // node_modules/@forge/bridge/out/router/index.js
  var require_router2 = __commonJS({
    "node_modules/@forge/bridge/out/router/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      tslib_1.__exportStar(require_router(), exports);
    }
  });

  // node_modules/@forge/bridge/out/modal/modal.js
  var require_modal = __commonJS({
    "node_modules/@forge/bridge/out/modal/modal.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Modal = void 0;
      var bridge_1 = require_bridge();
      var errors_1 = require_errors();
      var callBridge = (0, bridge_1.getCallBridge)();
      var noop = () => {
      };
      var Modal = class {
        constructor(opts) {
          var _a, _b;
          this.resource = (opts === null || opts === void 0 ? void 0 : opts.resource) || null;
          this.onClose = (opts === null || opts === void 0 ? void 0 : opts.onClose) || noop;
          this.size = (opts === null || opts === void 0 ? void 0 : opts.size) || "medium";
          this.context = (opts === null || opts === void 0 ? void 0 : opts.context) || {};
          this.closeOnEscape = (_a = opts === null || opts === void 0 ? void 0 : opts.closeOnEscape) !== null && _a !== void 0 ? _a : true;
          this.closeOnOverlayClick = (_b = opts === null || opts === void 0 ? void 0 : opts.closeOnOverlayClick) !== null && _b !== void 0 ? _b : true;
        }
        async open() {
          try {
            const success = await callBridge("openModal", {
              resource: this.resource,
              onClose: this.onClose,
              size: this.size,
              context: this.context,
              closeOnEscape: this.closeOnEscape,
              closeOnOverlayClick: this.closeOnOverlayClick
            });
            if (success === false) {
              throw new errors_1.BridgeAPIError("Unable to open modal.");
            }
          } catch (err) {
            throw new errors_1.BridgeAPIError("Unable to open modal.");
          }
        }
      };
      exports.Modal = Modal;
    }
  });

  // node_modules/@forge/bridge/out/modal/index.js
  var require_modal2 = __commonJS({
    "node_modules/@forge/bridge/out/modal/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      tslib_1.__exportStar(require_modal(), exports);
    }
  });

  // node_modules/@forge/bridge/out/fetch/fetch.js
  var require_fetch = __commonJS({
    "node_modules/@forge/bridge/out/fetch/fetch.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.productFetchApi = exports.remoteFetchApi = void 0;
      var blobParser_1 = require_blobParser();
      var parseFormData = async (form) => {
        const parsed = {};
        for (const [key, value] of form.entries()) {
          if (key === "file") {
            const fileName = value.name;
            const fileType = value.type;
            parsed["file"] = await (0, blobParser_1.blobToBase64)(value);
            parsed["__fileName"] = fileName;
            parsed["__fileType"] = fileType;
          } else {
            parsed[key] = value;
          }
        }
        return JSON.stringify(parsed);
      };
      var validateFetchOptions = (init) => {
        if (!init) {
          return init;
        }
        if ("signal" in init) {
          const { signal: _signal, ...rest } = init;
          console.error("Signal is not supported in @forge/bridge and was removed from fetch options. Please use the fetch method from @forge/api for signal support.");
          return rest;
        }
        return init;
      };
      var parseRequest = async (init) => {
        const isFormData = (init === null || init === void 0 ? void 0 : init.body) instanceof FormData ? true : false;
        const requestBody = isFormData ? await parseFormData(init === null || init === void 0 ? void 0 : init.body) : init === null || init === void 0 ? void 0 : init.body;
        const req = new Request("", { body: requestBody, method: init === null || init === void 0 ? void 0 : init.method, headers: init === null || init === void 0 ? void 0 : init.headers });
        const headers = Object.fromEntries(req.headers.entries());
        const body = req.method !== "GET" ? await req.text() : null;
        return {
          body,
          headers: new Headers(headers),
          isMultipartFormData: isFormData
        };
      };
      var remoteFetchApi = (callBridge) => {
        const fetch2 = async (remoteKey, init) => {
          const validatedInit = validateFetchOptions(init);
          const { body: requestBody, headers: requestHeaders, isMultipartFormData } = await parseRequest(validatedInit);
          const fetchPayload = {
            remoteKey,
            fetchRequestInit: { ...validatedInit, body: requestBody, headers: [...requestHeaders.entries()] },
            isMultipartFormData
          };
          const { body, headers, statusText, status, isAttachment } = await callBridge("fetchRemote", fetchPayload);
          const responseBody = isAttachment ? (0, blobParser_1.base64ToBlob)(body, headers["content-type"]) : body;
          return new Response(responseBody || null, { headers, status, statusText });
        };
        return {
          requestRemote: (remoteKey, fetchOptions) => fetch2(remoteKey, fetchOptions)
        };
      };
      exports.remoteFetchApi = remoteFetchApi;
      var productFetchApi = (callBridge) => {
        const fetch2 = async (product, restPath, init) => {
          const validatedInit = validateFetchOptions(init);
          const { body: requestBody, headers: requestHeaders, isMultipartFormData } = await parseRequest(validatedInit);
          if (!requestHeaders.has("X-Atlassian-Token")) {
            requestHeaders.set("X-Atlassian-Token", "no-check");
          }
          const fetchPayload = {
            product,
            restPath,
            fetchRequestInit: {
              ...validatedInit,
              body: requestBody,
              headers: [...requestHeaders.entries()]
            },
            isMultipartFormData
          };
          const { body, headers, statusText, status, isAttachment } = await callBridge("fetchProduct", fetchPayload);
          const responseBody = isAttachment ? (0, blobParser_1.base64ToBlob)(body, headers["content-type"]) : body;
          return new Response(responseBody || null, { headers, status, statusText });
        };
        return {
          requestConfluence: (restPath, fetchOptions) => fetch2("confluence", restPath, fetchOptions),
          requestJira: (restPath, fetchOptions) => fetch2("jira", restPath, fetchOptions),
          requestBitbucket: (restPath, fetchOptions) => fetch2("bitbucket", restPath, fetchOptions)
        };
      };
      exports.productFetchApi = productFetchApi;
    }
  });

  // node_modules/@forge/bridge/out/fetch/index.js
  var require_fetch2 = __commonJS({
    "node_modules/@forge/bridge/out/fetch/index.js"(exports) {
      "use strict";
      var _a;
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.requestRemote = exports.requestBitbucket = exports.requestJira = exports.requestConfluence = void 0;
      var bridge_1 = require_bridge();
      var fetch_1 = require_fetch();
      _a = (0, fetch_1.productFetchApi)((0, bridge_1.getCallBridge)()), exports.requestConfluence = _a.requestConfluence, exports.requestJira = _a.requestJira, exports.requestBitbucket = _a.requestBitbucket;
      exports.requestRemote = (0, fetch_1.remoteFetchApi)((0, bridge_1.getCallBridge)()).requestRemote;
    }
  });

  // node_modules/@forge/bridge/out/flag/flag.js
  var require_flag = __commonJS({
    "node_modules/@forge/bridge/out/flag/flag.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.showFlag = void 0;
      var bridge_1 = require_bridge();
      var errors_1 = require_errors();
      var callBridge = (0, bridge_1.getCallBridge)();
      var showFlag = (options) => {
        var _a;
        if (!options.id) {
          throw new errors_1.BridgeAPIError('"id" must be defined in flag options');
        }
        const result = callBridge("showFlag", {
          ...options,
          type: (_a = options.type) !== null && _a !== void 0 ? _a : "info"
        });
        return {
          close: async () => {
            await result;
            return callBridge("closeFlag", { id: options.id });
          }
        };
      };
      exports.showFlag = showFlag;
    }
  });

  // node_modules/@forge/bridge/out/flag/index.js
  var require_flag2 = __commonJS({
    "node_modules/@forge/bridge/out/flag/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.showFlag = void 0;
      var flag_1 = require_flag();
      Object.defineProperty(exports, "showFlag", { enumerable: true, get: function() {
        return flag_1.showFlag;
      } });
    }
  });

  // node_modules/@forge/bridge/out/events/index.js
  var require_events2 = __commonJS({
    "node_modules/@forge/bridge/out/events/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      tslib_1.__exportStar(require_events(), exports);
    }
  });

  // node_modules/@forge/bridge/out/realtime/realtime.js
  var require_realtime = __commonJS({
    "node_modules/@forge/bridge/out/realtime/realtime.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.realtime = void 0;
      var bridge_1 = require_bridge();
      var callBridge = (0, bridge_1.getCallBridge)();
      var publish = (channel, payload, options) => {
        return callBridge("publishRealtimeChannel", { channelName: channel, eventPayload: payload, options });
      };
      var subscribe = (channel, callback, options) => {
        return callBridge("subscribeRealtimeChannel", {
          channelName: channel,
          onEvent: callback,
          options
        });
      };
      var publishGlobal = (channel, payload, options) => {
        return callBridge("publishRealtimeChannel", { channelName: channel, eventPayload: payload, options, isGlobal: true });
      };
      var subscribeGlobal = (channel, callback, options) => {
        return callBridge("subscribeRealtimeChannel", {
          channelName: channel,
          onEvent: callback,
          options,
          isGlobal: true
        });
      };
      exports.realtime = {
        publish,
        subscribe,
        publishGlobal,
        subscribeGlobal
      };
    }
  });

  // node_modules/@forge/bridge/out/realtime/productContext.js
  var require_productContext = __commonJS({
    "node_modules/@forge/bridge/out/realtime/productContext.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Bitbucket = exports.Confluence = exports.Jira = void 0;
      var Jira;
      (function(Jira2) {
        Jira2["Board"] = "board";
        Jira2["Issue"] = "issue";
        Jira2["Project"] = "project";
      })(Jira = exports.Jira || (exports.Jira = {}));
      var Confluence;
      (function(Confluence2) {
        Confluence2["Content"] = "content";
        Confluence2["Space"] = "space";
      })(Confluence = exports.Confluence || (exports.Confluence = {}));
      var Bitbucket;
      (function(Bitbucket2) {
        Bitbucket2["Repository"] = "repository";
        Bitbucket2["PullRequest"] = "pullRequest";
      })(Bitbucket = exports.Bitbucket || (exports.Bitbucket = {}));
    }
  });

  // node_modules/@forge/bridge/out/realtime/index.js
  var require_realtime2 = __commonJS({
    "node_modules/@forge/bridge/out/realtime/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Bitbucket = exports.Confluence = exports.Jira = exports.realtime = void 0;
      var realtime_1 = require_realtime();
      Object.defineProperty(exports, "realtime", { enumerable: true, get: function() {
        return realtime_1.realtime;
      } });
      var productContext_1 = require_productContext();
      Object.defineProperty(exports, "Jira", { enumerable: true, get: function() {
        return productContext_1.Jira;
      } });
      Object.defineProperty(exports, "Confluence", { enumerable: true, get: function() {
        return productContext_1.Confluence;
      } });
      Object.defineProperty(exports, "Bitbucket", { enumerable: true, get: function() {
        return productContext_1.Bitbucket;
      } });
    }
  });

  // node_modules/@forge/bridge/out/rovo/open.js
  var require_open2 = __commonJS({
    "node_modules/@forge/bridge/out/rovo/open.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.open = exports.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0;
      var bridge_1 = require_bridge();
      var errors_1 = require_errors();
      var MAX_AGENT_LENGTH = 30;
      var callBridge = (0, bridge_1.getCallBridge)();
      exports.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = "Unable to open Rovo Chat due to usage in an unsupported product. Only Confluence, Jira and some Jira Service Management modules are supported at this point. See https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/rovo/";
      var transformRovoPayload = (openRovoPayload) => {
        switch (openRovoPayload.type) {
          case "forge":
            return {
              agentName: openRovoPayload.agentName,
              agentKey: openRovoPayload.agentKey,
              prompt: openRovoPayload.prompt
            };
          case "atlassian":
            return {
              agentName: openRovoPayload.agentName,
              prompt: openRovoPayload.prompt
            };
          default:
            return { prompt: openRovoPayload.prompt };
        }
      };
      var open = async (openRovoPayload) => {
        if (openRovoPayload.type === "forge") {
          if (openRovoPayload.agentName.length > MAX_AGENT_LENGTH) {
            throw new Error("rovo agent name too long");
          }
          if (openRovoPayload.agentKey.length > MAX_AGENT_LENGTH) {
            throw new Error("rovo agent key too long");
          }
        }
        const rovoArgs = transformRovoPayload(openRovoPayload);
        const success = await callBridge("openRovo", rovoArgs);
        if (success === false) {
          throw new errors_1.BridgeAPIError(exports.OPEN_ROVO_BRIDGE_ERROR_MESSAGE);
        }
      };
      exports.open = open;
    }
  });

  // node_modules/@forge/bridge/out/rovo/rovo.js
  var require_rovo = __commonJS({
    "node_modules/@forge/bridge/out/rovo/rovo.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.rovo = void 0;
      var open_1 = require_open2();
      exports.rovo = {
        open: open_1.open
      };
    }
  });

  // node_modules/@forge/bridge/out/rovo/index.js
  var require_rovo2 = __commonJS({
    "node_modules/@forge/bridge/out/rovo/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      tslib_1.__exportStar(require_rovo(), exports);
    }
  });

  // node_modules/@forge/bridge/out/i18n/index.js
  var require_i18n = __commonJS({
    "node_modules/@forge/bridge/out/i18n/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createTranslationFunction = exports.getTranslations = exports.resetTranslationsCache = void 0;
      var i18n_1 = require_out();
      var view_1 = require_view2();
      var frontendResourcesAccessor = {
        getI18nInfoConfig: async () => {
          const resp = await fetch(`./${i18n_1.I18N_BUNDLE_FOLDER_NAME}/${i18n_1.I18N_INFO_FILE_NAME}`);
          if (!resp.ok) {
            throw new Error("Failed to get i18n info config: " + resp.statusText);
          }
          const info = await resp.json();
          return info.config;
        },
        getTranslationResource: async (locale) => {
          const resp = await fetch(`./${i18n_1.I18N_BUNDLE_FOLDER_NAME}/${locale}.json`);
          if (!resp.ok) {
            throw new Error(`Failed to get translation resource for locale: ${locale}`);
          }
          return resp.json();
        }
      };
      var translationsGetter = new i18n_1.TranslationsGetter(frontendResourcesAccessor);
      var resetTranslationsCache = () => {
        translationsGetter.reset();
      };
      exports.resetTranslationsCache = resetTranslationsCache;
      var getTranslations = async (locale = null, options = {
        fallback: true
      }) => {
        let targetLocale = locale;
        if (!targetLocale) {
          const context = await view_1.view.getContext();
          targetLocale = context.locale;
        }
        return await translationsGetter.getTranslations(targetLocale, options);
      };
      exports.getTranslations = getTranslations;
      var createTranslationFunction = async (locale = null) => {
        let targetLocale = locale;
        if (!targetLocale) {
          const context = await view_1.view.getContext();
          targetLocale = context.locale;
        }
        const translator = new i18n_1.Translator(targetLocale, translationsGetter);
        await translator.init();
        return (i18nKey, defaultValue) => {
          var _a, _b;
          return (_b = (_a = translator.translate(i18nKey)) !== null && _a !== void 0 ? _a : defaultValue) !== null && _b !== void 0 ? _b : i18nKey;
        };
      };
      exports.createTranslationFunction = createTranslationFunction;
    }
  });

  // node_modules/@forge/bridge/out/permissions/permissions.js
  var require_permissions = __commonJS({
    "node_modules/@forge/bridge/out/permissions/permissions.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.permissions = void 0;
      var bridge_1 = require_bridge();
      var callBridge = (0, bridge_1.getCallBridge)();
      var egressGet = async (payload) => {
        return callBridge("__permission__egressGet", payload);
      };
      var egressSet = async (payload) => {
        return callBridge("__permission__egressSet", payload);
      };
      var egressDeleteDomain = async (payload) => {
        return callBridge("__permission__egressDeleteDomain", payload);
      };
      var egressDeleteGroup = async (payload) => {
        return callBridge("__permission__egressDeleteGroup", payload);
      };
      var remoteGet = async (payload) => {
        return callBridge("__permission__remoteGet", payload);
      };
      var remoteSet = async (payload) => {
        return callBridge("__permission__remoteSet", payload);
      };
      exports.permissions = {
        egress: {
          get: egressGet,
          set: egressSet,
          deleteDomain: egressDeleteDomain,
          deleteGroup: egressDeleteGroup
        },
        remote: {
          get: remoteGet,
          set: remoteSet
        }
      };
    }
  });

  // node_modules/@forge/bridge/out/permissions/index.js
  var require_permissions2 = __commonJS({
    "node_modules/@forge/bridge/out/permissions/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      tslib_1.__exportStar(require_permissions(), exports);
    }
  });

  // node_modules/@forge/bridge/out/object-store/types.js
  var require_types2 = __commonJS({
    "node_modules/@forge/bridge/out/object-store/types.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0;
      exports.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.";
    }
  });

  // node_modules/@forge/bridge/out/object-store/utils.js
  var require_utils2 = __commonJS({
    "node_modules/@forge/bridge/out/object-store/utils.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.checkRestrictedEnvironment = void 0;
      var errors_1 = require_errors();
      var view_1 = require_view2();
      var types_1 = require_types2();
      var checkRestrictedEnvironment = async () => {
        const { environmentType } = await view_1.view.getContext();
        if (environmentType === "PRODUCTION") {
          throw new errors_1.BridgeAPIError(types_1.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
        }
      };
      exports.checkRestrictedEnvironment = checkRestrictedEnvironment;
    }
  });

  // node_modules/@forge/bridge/out/object-store/upload.js
  var require_upload = __commonJS({
    "node_modules/@forge/bridge/out/object-store/upload.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.upload = exports.createUploadPromises = void 0;
      var invoke_1 = require_invoke2();
      var errors_1 = require_errors();
      var utils_1 = require_utils2();
      var bridge_1 = require_bridge();
      var callBridge = (0, bridge_1.getCallBridge)();
      var base64ToBlob = (base64, mimeType) => {
        const byteCharacters = atob(base64);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        return new Blob([byteArray], { type: mimeType || "application/octet-stream" });
      };
      var getObjectMetadata = async (blob) => {
        const length = blob.size;
        const arrayBuffer = await blob.arrayBuffer();
        const hashBuffer = await crypto.subtle.digest("SHA-256", arrayBuffer);
        const hashArray = new Uint8Array(hashBuffer);
        const checksum = btoa(String.fromCharCode(...hashArray));
        const checksumType = "SHA256";
        return {
          length,
          checksum,
          checksumType
        };
      };
      var createUploadPromises = async ({ functionKey, objects }) => {
        if (!functionKey || functionKey.length === 0) {
          throw new errors_1.BridgeAPIError("functionKey is required to filter and generate presigned URLs");
        }
        if (!Array.isArray(objects) || objects.length === 0) {
          throw new errors_1.BridgeAPIError("objects array is required and must not be empty");
        }
        const blobs = objects.map((obj, index) => {
          if (obj instanceof Blob) {
            return obj;
          }
          const isBase64Object = obj && typeof obj === "object" && "data" in obj && typeof obj.data === "string";
          if (!isBase64Object) {
            throw new errors_1.BridgeAPIError(`Invalid object type at index ${index}. Only Blob or Base64Object (with data string and optional mimeType) are accepted.`);
          }
          try {
            return base64ToBlob(obj.data, obj.mimeType);
          } catch (e) {
            throw new errors_1.BridgeAPIError(`Invalid base64 data at index ${index}. The data string must be valid base64 encoded.`);
          }
        });
        const allObjectMetadata = await Promise.all(blobs.map((blob) => getObjectMetadata(blob)));
        const presignedURLsToObjectMetadata = await (0, invoke_1.invoke)(functionKey, {
          allObjectMetadata
        });
        if (!presignedURLsToObjectMetadata || typeof presignedURLsToObjectMetadata !== "object") {
          throw new errors_1.BridgeAPIError("Invalid response from functionKey");
        }
        const checksumToBlobMap = /* @__PURE__ */ new Map();
        const checksumToIndexMap = /* @__PURE__ */ new Map();
        blobs.forEach((blob, index) => {
          const metadata = allObjectMetadata[index];
          checksumToBlobMap.set(metadata.checksum, blob);
          checksumToIndexMap.set(metadata.checksum, index);
        });
        const uploadPromises = Object.entries(presignedURLsToObjectMetadata).map(([presignedUrl, metadata]) => {
          const { key, checksum } = metadata;
          const object = checksumToBlobMap.get(checksum);
          const index = checksumToIndexMap.get(checksum);
          if (index === void 0) {
            return {
              promise: Promise.resolve({
                success: false,
                key,
                error: `Index not found for checksum ${checksum}`
              }),
              index: -1
            };
          }
          if (!object) {
            return {
              promise: Promise.resolve({
                success: false,
                key,
                error: `Blob not found for checksum ${checksum}`
              }),
              index
            };
          }
          const uploadPromise = (async () => {
            try {
              const response = await fetch(presignedUrl, {
                method: "PUT",
                body: object,
                headers: {
                  "Content-Type": object.type || "application/octet-stream",
                  "Content-Length": object.size.toString()
                }
              });
              return {
                success: response.ok,
                key,
                status: response.status,
                error: response.ok ? void 0 : `Upload failed with status ${response.status}`
              };
            } catch (error) {
              return {
                success: false,
                key,
                status: 503,
                error: error instanceof Error ? error.message : "Upload failed"
              };
            }
          })();
          return { promise: uploadPromise, index, objectType: object.type, objectSize: object.size };
        });
        return uploadPromises;
      };
      exports.createUploadPromises = createUploadPromises;
      var upload = async ({ functionKey, objects }) => {
        await (0, utils_1.checkRestrictedEnvironment)();
        void callBridge("trackObjectStoreAction", { action: "upload" });
        const uploadPromises = await (0, exports.createUploadPromises)({ functionKey, objects });
        const results = await Promise.all(uploadPromises.map((item) => item.promise));
        return results;
      };
      exports.upload = upload;
    }
  });

  // node_modules/@forge/bridge/out/object-store/deleteObjects.js
  var require_deleteObjects = __commonJS({
    "node_modules/@forge/bridge/out/object-store/deleteObjects.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.deleteObjects = void 0;
      var invoke_1 = require_invoke2();
      var errors_1 = require_errors();
      var utils_1 = require_utils2();
      var bridge_1 = require_bridge();
      var callBridge = (0, bridge_1.getCallBridge)();
      var deleteObjects = async ({ functionKey, keys }) => {
        await (0, utils_1.checkRestrictedEnvironment)();
        void callBridge("trackObjectStoreAction", { action: "delete" });
        if (!functionKey || functionKey.length === 0) {
          throw new errors_1.BridgeAPIError("functionKey is required to delete objects");
        }
        if (!Array.isArray(keys) || keys.length === 0) {
          throw new errors_1.BridgeAPIError("keys array is required and must not be empty");
        }
        await Promise.all(keys.map(async (key) => {
          await (0, invoke_1.invoke)(functionKey, { key });
        }));
      };
      exports.deleteObjects = deleteObjects;
    }
  });

  // node_modules/@forge/bridge/out/object-store/download.js
  var require_download = __commonJS({
    "node_modules/@forge/bridge/out/object-store/download.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.download = void 0;
      var invoke_1 = require_invoke2();
      var errors_1 = require_errors();
      var utils_1 = require_utils2();
      var bridge_1 = require_bridge();
      var callBridge = (0, bridge_1.getCallBridge)();
      var download = async ({ functionKey, keys }) => {
        await (0, utils_1.checkRestrictedEnvironment)();
        void callBridge("trackObjectStoreAction", { action: "download" });
        if (!functionKey || functionKey.length === 0) {
          throw new errors_1.BridgeAPIError("functionKey is required to filter and generate download URLs");
        }
        if (!Array.isArray(keys) || keys.length === 0) {
          throw new errors_1.BridgeAPIError("keys array is required and must not be empty");
        }
        const downloadUrlsTokeys = await (0, invoke_1.invoke)(functionKey, {
          keys
        });
        if (!downloadUrlsTokeys || typeof downloadUrlsTokeys !== "object") {
          throw new errors_1.BridgeAPIError("Invalid response from functionKey");
        }
        const downloadPromises = Object.entries(downloadUrlsTokeys).map(async ([downloadUrl, key]) => {
          try {
            const response = await fetch(downloadUrl, {
              method: "GET"
            });
            if (!response.ok) {
              return {
                success: false,
                key,
                status: response.status,
                error: `Download failed with status ${response.status}`
              };
            }
            const blob = await response.blob();
            return {
              success: true,
              key,
              blob,
              status: response.status
            };
          } catch (error) {
            return {
              success: false,
              key,
              status: 503,
              error: error instanceof Error ? error.message : "Download failed"
            };
          }
        });
        const results = await Promise.all(downloadPromises);
        return results;
      };
      exports.download = download;
    }
  });

  // node_modules/@forge/bridge/out/object-store/getMetadata.js
  var require_getMetadata = __commonJS({
    "node_modules/@forge/bridge/out/object-store/getMetadata.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getMetadata = void 0;
      var index_1 = require_invoke2();
      var errors_1 = require_errors();
      var utils_1 = require_utils2();
      var bridge_1 = require_bridge();
      var callBridge = (0, bridge_1.getCallBridge)();
      var getMetadata = async ({ functionKey, keys }) => {
        await (0, utils_1.checkRestrictedEnvironment)();
        void callBridge("trackObjectStoreAction", { action: "getMetadata" });
        if (!functionKey || functionKey.length === 0) {
          throw new errors_1.BridgeAPIError("functionKey is required to filter and generate object metadata");
        }
        if (!Array.isArray(keys) || keys.length === 0) {
          throw new errors_1.BridgeAPIError("keys array is required and must not be empty");
        }
        const results = await Promise.all(keys.map(async (key) => {
          const result = await (0, index_1.invoke)(functionKey, { key });
          if (!result || typeof result !== "object") {
            return {
              key,
              error: "Invalid response from functionKey"
            };
          }
          return result;
        }));
        return results;
      };
      exports.getMetadata = getMetadata;
    }
  });

  // node_modules/@forge/bridge/out/object-store/objectStore.js
  var require_objectStore = __commonJS({
    "node_modules/@forge/bridge/out/object-store/objectStore.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createUploadPromises = exports.objectStore = void 0;
      var upload_1 = require_upload();
      Object.defineProperty(exports, "createUploadPromises", { enumerable: true, get: function() {
        return upload_1.createUploadPromises;
      } });
      var deleteObjects_1 = require_deleteObjects();
      var download_1 = require_download();
      var getMetadata_1 = require_getMetadata();
      exports.objectStore = {
        upload: upload_1.upload,
        download: download_1.download,
        getMetadata: getMetadata_1.getMetadata,
        delete: deleteObjects_1.deleteObjects
      };
    }
  });

  // node_modules/@forge/bridge/out/object-store/index.js
  var require_object_store = __commonJS({
    "node_modules/@forge/bridge/out/object-store/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      tslib_1.__exportStar(require_objectStore(), exports);
      tslib_1.__exportStar(require_types2(), exports);
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/Log.js
  var require_Log = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/Log.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Log = exports.LogLevel = void 0;
      var DEBUG = " DEBUG ";
      var _INFO = "  INFO ";
      var _WARN = "  WARN ";
      var ERROR = " ERROR ";
      function addTag(args) {
        args.unshift("[Statsig]");
        return args;
      }
      exports.LogLevel = {
        None: 0,
        Error: 1,
        Warn: 2,
        Info: 3,
        Debug: 4
      };
      var Log = class _Log {
        static info(...args) {
          if (_Log.level >= exports.LogLevel.Info) {
            console.info(_INFO, ...addTag(args));
          }
        }
        static debug(...args) {
          if (_Log.level >= exports.LogLevel.Debug) {
            console.debug(DEBUG, ...addTag(args));
          }
        }
        static warn(...args) {
          if (_Log.level >= exports.LogLevel.Warn) {
            console.warn(_WARN, ...addTag(args));
          }
        }
        static error(...args) {
          if (_Log.level >= exports.LogLevel.Error) {
            console.error(ERROR, ...addTag(args));
          }
        }
      };
      exports.Log = Log;
      Log.level = exports.LogLevel.Warn;
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/$_StatsigGlobal.js
  var require_StatsigGlobal = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/$_StatsigGlobal.js"(exports) {
      "use strict";
      var _a;
      var _b;
      var _c;
      Object.defineProperty(exports, "__esModule", { value: true });
      exports._getInstance = exports._getStatsigGlobalFlag = exports._getStatsigGlobal = void 0;
      var Log_1 = require_Log();
      var _getStatsigGlobal = () => {
        try {
          return typeof __STATSIG__ !== "undefined" ? __STATSIG__ : statsigGlobal;
        } catch (e) {
          return statsigGlobal;
        }
      };
      exports._getStatsigGlobal = _getStatsigGlobal;
      var _getStatsigGlobalFlag = (flag) => {
        return (0, exports._getStatsigGlobal)()[flag];
      };
      exports._getStatsigGlobalFlag = _getStatsigGlobalFlag;
      var _getInstance = (sdkKey) => {
        const gbl = (0, exports._getStatsigGlobal)();
        if (!sdkKey) {
          if (gbl.instances && Object.keys(gbl.instances).length > 1) {
            Log_1.Log.warn("Call made to Statsig global instance without an SDK key but there is more than one client instance. If you are using mulitple clients, please specify the SDK key.");
          }
          return gbl.firstInstance;
        }
        return gbl.instances && gbl.instances[sdkKey];
      };
      exports._getInstance = _getInstance;
      var GLOBAL_KEY = "__STATSIG__";
      var _window = typeof window !== "undefined" ? window : {};
      var _global = typeof global !== "undefined" ? global : {};
      var _globalThis = typeof globalThis !== "undefined" ? globalThis : {};
      var statsigGlobal = (_c = (_b = (_a = _window[GLOBAL_KEY]) !== null && _a !== void 0 ? _a : _global[GLOBAL_KEY]) !== null && _b !== void 0 ? _b : _globalThis[GLOBAL_KEY]) !== null && _c !== void 0 ? _c : {
        instance: exports._getInstance
      };
      _window[GLOBAL_KEY] = statsigGlobal;
      _global[GLOBAL_KEY] = statsigGlobal;
      _globalThis[GLOBAL_KEY] = statsigGlobal;
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/Diagnostics.js
  var require_Diagnostics = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/Diagnostics.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Diagnostics = void 0;
      var MARKER_MAP = /* @__PURE__ */ new Map();
      var ACT_START = "start";
      var ACT_END = "end";
      var DIAGNOSTICS_EVENT = "statsig::diagnostics";
      exports.Diagnostics = {
        _getMarkers: (sdkKey) => {
          return MARKER_MAP.get(sdkKey);
        },
        _markInitOverallStart: (sdkKey) => {
          _addMarker(sdkKey, _createMarker({}, ACT_START, "overall"));
        },
        _markInitOverallEnd: (sdkKey, success, evaluationDetails) => {
          _addMarker(sdkKey, _createMarker({
            success,
            error: success ? void 0 : { name: "InitializeError", message: "Failed to initialize" },
            evaluationDetails
          }, ACT_END, "overall"));
        },
        _markInitNetworkReqStart: (sdkKey, data) => {
          _addMarker(sdkKey, _createMarker(data, ACT_START, "initialize", "network_request"));
        },
        _markInitNetworkReqEnd: (sdkKey, data) => {
          _addMarker(sdkKey, _createMarker(data, ACT_END, "initialize", "network_request"));
        },
        _markInitProcessStart: (sdkKey) => {
          _addMarker(sdkKey, _createMarker({}, ACT_START, "initialize", "process"));
        },
        _markInitProcessEnd: (sdkKey, data) => {
          _addMarker(sdkKey, _createMarker(data, ACT_END, "initialize", "process"));
        },
        _clearMarkers: (sdkKey) => {
          MARKER_MAP.delete(sdkKey);
        },
        _formatError(e) {
          if (!(e && typeof e === "object")) {
            return;
          }
          return {
            code: _safeGetField(e, "code"),
            name: _safeGetField(e, "name"),
            message: _safeGetField(e, "message")
          };
        },
        _getDiagnosticsData(res, attempt, body, e) {
          var _a;
          return {
            success: (res === null || res === void 0 ? void 0 : res.ok) === true,
            statusCode: res === null || res === void 0 ? void 0 : res.status,
            sdkRegion: (_a = res === null || res === void 0 ? void 0 : res.headers) === null || _a === void 0 ? void 0 : _a.get("x-statsig-region"),
            isDelta: body.includes('"is_delta":true') === true ? true : void 0,
            attempt,
            error: exports.Diagnostics._formatError(e)
          };
        },
        _enqueueDiagnosticsEvent(user, logger, sdk, options) {
          const markers = exports.Diagnostics._getMarkers(sdk);
          if (markers == null || markers.length <= 0) {
            return -1;
          }
          const overallInitDuration = markers[markers.length - 1].timestamp - markers[0].timestamp;
          exports.Diagnostics._clearMarkers(sdk);
          const event = _makeDiagnosticsEvent(user, {
            context: "initialize",
            markers: markers.slice(),
            statsigOptions: options
          });
          logger.enqueue(event);
          return overallInitDuration;
        }
      };
      function _createMarker(data, action, key, step) {
        return Object.assign({ key, action, step, timestamp: Date.now() }, data);
      }
      function _makeDiagnosticsEvent(user, data) {
        const latencyEvent = {
          eventName: DIAGNOSTICS_EVENT,
          user,
          value: null,
          metadata: data,
          time: Date.now()
        };
        return latencyEvent;
      }
      function _addMarker(sdkKey, marker) {
        var _a;
        const markers = (_a = MARKER_MAP.get(sdkKey)) !== null && _a !== void 0 ? _a : [];
        markers.push(marker);
        MARKER_MAP.set(sdkKey, markers);
      }
      function _safeGetField(data, field) {
        if (field in data) {
          return data[field];
        }
        return void 0;
      }
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/TypingUtils.js
  var require_TypingUtils = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/TypingUtils.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports._isTypeMatch = exports._typeOf = void 0;
      function _typeOf(input) {
        return Array.isArray(input) ? "array" : typeof input;
      }
      exports._typeOf = _typeOf;
      function _isTypeMatch(a, b) {
        const typeOf = (x) => Array.isArray(x) ? "array" : typeof x;
        return typeOf(a) === typeOf(b);
      }
      exports._isTypeMatch = _isTypeMatch;
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/Hashing.js
  var require_Hashing = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/Hashing.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports._getSortedObject = exports._DJB2Object = exports._DJB2 = void 0;
      var TypingUtils_1 = require_TypingUtils();
      var _DJB2 = (value) => {
        let hash = 0;
        for (let i = 0; i < value.length; i++) {
          const character = value.charCodeAt(i);
          hash = (hash << 5) - hash + character;
          hash = hash & hash;
        }
        return String(hash >>> 0);
      };
      exports._DJB2 = _DJB2;
      var _DJB2Object = (value, maxLevels) => {
        return (0, exports._DJB2)(JSON.stringify((0, exports._getSortedObject)(value, maxLevels)));
      };
      exports._DJB2Object = _DJB2Object;
      var _getSortedObject = (object, maxDepth) => {
        if (object == null) {
          return null;
        }
        const keys = Object.keys(object).sort();
        const sortedObject = {};
        keys.forEach((key) => {
          const value = object[key];
          if (maxDepth === 0 || (0, TypingUtils_1._typeOf)(value) !== "object") {
            sortedObject[key] = value;
            return;
          }
          sortedObject[key] = (0, exports._getSortedObject)(value, maxDepth != null ? maxDepth - 1 : maxDepth);
        });
        return sortedObject;
      };
      exports._getSortedObject = _getSortedObject;
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/CacheKey.js
  var require_CacheKey = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/CacheKey.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports._getStorageKey = exports._getUserStorageKey = void 0;
      var Hashing_1 = require_Hashing();
      function _getUserStorageKey(sdkKey, user, customKeyGenerator) {
        var _a;
        if (customKeyGenerator) {
          return customKeyGenerator(sdkKey, user);
        }
        const cids = user && user.customIDs ? user.customIDs : {};
        const parts = [
          `uid:${(_a = user === null || user === void 0 ? void 0 : user.userID) !== null && _a !== void 0 ? _a : ""}`,
          `cids:${Object.keys(cids).sort((leftKey, rightKey) => leftKey.localeCompare(rightKey)).map((key) => `${key}-${cids[key]}`).join(",")}`,
          `k:${sdkKey}`
        ];
        return (0, Hashing_1._DJB2)(parts.join("|"));
      }
      exports._getUserStorageKey = _getUserStorageKey;
      function _getStorageKey(sdkKey, user, customKeyGenerator) {
        if (user) {
          return _getUserStorageKey(sdkKey, user, customKeyGenerator);
        }
        return (0, Hashing_1._DJB2)(`k:${sdkKey}`);
      }
      exports._getStorageKey = _getStorageKey;
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/NetworkConfig.js
  var require_NetworkConfig = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/NetworkConfig.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.NetworkParam = exports.NetworkDefault = exports.Endpoint = void 0;
      exports.Endpoint = {
        _initialize: "initialize",
        _rgstr: "rgstr",
        _download_config_specs: "download_config_specs"
      };
      exports.NetworkDefault = {
        [exports.Endpoint._rgstr]: "https://prodregistryv2.org/v1",
        [exports.Endpoint._initialize]: "https://featureassets.org/v1",
        [exports.Endpoint._download_config_specs]: "https://api.statsigcdn.com/v1"
      };
      exports.NetworkParam = {
        EventCount: "ec",
        SdkKey: "k",
        SdkType: "st",
        SdkVersion: "sv",
        Time: "t",
        SessionID: "sid",
        StatsigEncoded: "se",
        IsGzipped: "gz"
      };
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/SafeJs.js
  var require_SafeJs = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/SafeJs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports._getUnloadEvent = exports._getCurrentPageUrlSafe = exports._addDocumentEventListenerSafe = exports._addWindowEventListenerSafe = exports._isServerEnv = exports._getDocumentSafe = exports._getWindowSafe = void 0;
      var _getWindowSafe = () => {
        return typeof window !== "undefined" ? window : null;
      };
      exports._getWindowSafe = _getWindowSafe;
      var _getDocumentSafe = () => {
        var _a;
        const win = (0, exports._getWindowSafe)();
        return (_a = win === null || win === void 0 ? void 0 : win.document) !== null && _a !== void 0 ? _a : null;
      };
      exports._getDocumentSafe = _getDocumentSafe;
      var _isServerEnv = () => {
        if ((0, exports._getDocumentSafe)() !== null) {
          return false;
        }
        const isNode = typeof process !== "undefined" && process.versions != null && process.versions.node != null;
        const isVercel = typeof EdgeRuntime === "string";
        return isVercel || isNode;
      };
      exports._isServerEnv = _isServerEnv;
      var _addWindowEventListenerSafe = (key, listener) => {
        const win = (0, exports._getWindowSafe)();
        if (typeof (win === null || win === void 0 ? void 0 : win.addEventListener) === "function") {
          win.addEventListener(key, listener);
        }
      };
      exports._addWindowEventListenerSafe = _addWindowEventListenerSafe;
      var _addDocumentEventListenerSafe = (key, listener) => {
        const doc = (0, exports._getDocumentSafe)();
        if (typeof (doc === null || doc === void 0 ? void 0 : doc.addEventListener) === "function") {
          doc.addEventListener(key, listener);
        }
      };
      exports._addDocumentEventListenerSafe = _addDocumentEventListenerSafe;
      var _getCurrentPageUrlSafe = () => {
        var _a;
        try {
          return (_a = (0, exports._getWindowSafe)()) === null || _a === void 0 ? void 0 : _a.location.href.split(/[?#]/)[0];
        } catch (_b) {
          return;
        }
      };
      exports._getCurrentPageUrlSafe = _getCurrentPageUrlSafe;
      var _getUnloadEvent = () => {
        const win = (0, exports._getWindowSafe)();
        if (!win) {
          return "beforeunload";
        }
        const eventType = "onpagehide" in win ? "pagehide" : "beforeunload";
        return eventType;
      };
      exports._getUnloadEvent = _getUnloadEvent;
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/StatsigEvent.js
  var require_StatsigEvent = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/StatsigEvent.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports._createLayerParameterExposure = exports._createConfigExposure = exports._mapExposures = exports._createGateExposure = exports._isExposureEvent = void 0;
      var CONFIG_EXPOSURE_NAME = "statsig::config_exposure";
      var GATE_EXPOSURE_NAME = "statsig::gate_exposure";
      var LAYER_EXPOSURE_NAME = "statsig::layer_exposure";
      var _createExposure = (eventName, user, details, metadata, secondaryExposures) => {
        if (details.bootstrapMetadata) {
          metadata["bootstrapMetadata"] = details.bootstrapMetadata;
        }
        return {
          eventName,
          user,
          value: null,
          metadata: _addEvaluationDetailsToMetadata(details, metadata),
          secondaryExposures,
          time: Date.now()
        };
      };
      var _isExposureEvent = ({ eventName }) => {
        return eventName === GATE_EXPOSURE_NAME || eventName === CONFIG_EXPOSURE_NAME || eventName === LAYER_EXPOSURE_NAME;
      };
      exports._isExposureEvent = _isExposureEvent;
      var _createGateExposure = (user, gate, exposureMapping) => {
        var _a, _b, _c;
        const metadata = {
          gate: gate.name,
          gateValue: String(gate.value),
          ruleID: gate.ruleID
        };
        if (((_a = gate.__evaluation) === null || _a === void 0 ? void 0 : _a.version) != null) {
          metadata["configVersion"] = gate.__evaluation.version;
        }
        return _createExposure(GATE_EXPOSURE_NAME, user, gate.details, metadata, _mapExposures((_c = (_b = gate.__evaluation) === null || _b === void 0 ? void 0 : _b.secondary_exposures) !== null && _c !== void 0 ? _c : [], exposureMapping));
      };
      exports._createGateExposure = _createGateExposure;
      function _mapExposures(exposures, exposureMapping) {
        return exposures.map((exposure) => {
          if (typeof exposure === "string") {
            return (exposureMapping !== null && exposureMapping !== void 0 ? exposureMapping : {})[exposure];
          }
          return exposure;
        }).filter((exposure) => exposure != null);
      }
      exports._mapExposures = _mapExposures;
      var _createConfigExposure = (user, config, exposureMapping) => {
        var _a, _b, _c, _d;
        const metadata = {
          config: config.name,
          ruleID: config.ruleID
        };
        if (((_a = config.__evaluation) === null || _a === void 0 ? void 0 : _a.version) != null) {
          metadata["configVersion"] = config.__evaluation.version;
        }
        if (((_b = config.__evaluation) === null || _b === void 0 ? void 0 : _b.passed) != null) {
          metadata["rulePassed"] = String(config.__evaluation.passed);
        }
        return _createExposure(CONFIG_EXPOSURE_NAME, user, config.details, metadata, _mapExposures((_d = (_c = config.__evaluation) === null || _c === void 0 ? void 0 : _c.secondary_exposures) !== null && _d !== void 0 ? _d : [], exposureMapping));
      };
      exports._createConfigExposure = _createConfigExposure;
      var _createLayerParameterExposure = (user, layer, parameterName, exposureMapping) => {
        var _a, _b, _c, _d, _e, _f;
        const evaluation = layer.__evaluation;
        const isExplicit = ((_a = evaluation === null || evaluation === void 0 ? void 0 : evaluation.explicit_parameters) === null || _a === void 0 ? void 0 : _a.includes(parameterName)) === true;
        let allocatedExperiment = "";
        let secondaryExposures = (_b = evaluation === null || evaluation === void 0 ? void 0 : evaluation.undelegated_secondary_exposures) !== null && _b !== void 0 ? _b : [];
        if (isExplicit) {
          allocatedExperiment = (_c = evaluation.allocated_experiment_name) !== null && _c !== void 0 ? _c : "";
          secondaryExposures = evaluation.secondary_exposures;
        }
        const parameterRuleIDs = (_d = layer.__evaluation) === null || _d === void 0 ? void 0 : _d.parameter_rule_ids;
        const metadata = {
          config: layer.name,
          parameterName,
          ruleID: (_e = parameterRuleIDs === null || parameterRuleIDs === void 0 ? void 0 : parameterRuleIDs[parameterName]) !== null && _e !== void 0 ? _e : layer.ruleID,
          allocatedExperiment,
          isExplicitParameter: String(isExplicit)
        };
        if (((_f = layer.__evaluation) === null || _f === void 0 ? void 0 : _f.version) != null) {
          metadata["configVersion"] = layer.__evaluation.version;
        }
        return _createExposure(LAYER_EXPOSURE_NAME, user, layer.details, metadata, _mapExposures(secondaryExposures, exposureMapping));
      };
      exports._createLayerParameterExposure = _createLayerParameterExposure;
      var _addEvaluationDetailsToMetadata = (details, metadata) => {
        metadata["reason"] = details.reason;
        if (details.lcut) {
          metadata["lcut"] = String(details.lcut);
        }
        if (details.receivedAt) {
          metadata["receivedAt"] = String(details.receivedAt);
        }
        return metadata;
      };
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/StatsigOptionsCommon.js
  var require_StatsigOptionsCommon = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/StatsigOptionsCommon.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.LoggingEnabledOption = exports.LogEventCompressionMode = void 0;
      exports.LogEventCompressionMode = {
        /** Do not compress request bodies */
        Disabled: "d",
        /** Compress request bodies unless a network proxy is configured */
        Enabled: "e",
        /** Always compress request bodies, even when a proxy is configured */
        Forced: "f"
      };
      exports.LoggingEnabledOption = {
        disabled: "disabled",
        browserOnly: "browser-only",
        always: "always"
      };
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/StorageProvider.js
  var require_StorageProvider = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/StorageProvider.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports._setObjectInStorage = exports._getObjectFromStorage = exports.Storage = void 0;
      var Log_1 = require_Log();
      var SafeJs_1 = require_SafeJs();
      var inMemoryStore = {};
      var _inMemoryProvider = {
        isReady: () => true,
        isReadyResolver: () => null,
        getProviderName: () => "InMemory",
        getItem: (key) => inMemoryStore[key] ? inMemoryStore[key] : null,
        setItem: (key, value) => {
          inMemoryStore[key] = value;
        },
        removeItem: (key) => {
          delete inMemoryStore[key];
        },
        getAllKeys: () => Object.keys(inMemoryStore)
      };
      var _localStorageProvider = null;
      try {
        const win = (0, SafeJs_1._getWindowSafe)();
        if (win && win.localStorage && typeof win.localStorage.getItem === "function") {
          _localStorageProvider = {
            isReady: () => true,
            isReadyResolver: () => null,
            getProviderName: () => "LocalStorage",
            getItem: (key) => win.localStorage.getItem(key),
            setItem: (key, value) => win.localStorage.setItem(key, value),
            removeItem: (key) => win.localStorage.removeItem(key),
            getAllKeys: () => Object.keys(win.localStorage)
          };
        }
      } catch (error) {
        Log_1.Log.warn("Failed to setup localStorageProvider.");
      }
      var _main = _localStorageProvider !== null && _localStorageProvider !== void 0 ? _localStorageProvider : _inMemoryProvider;
      var _current = _main;
      function _inMemoryBreaker(action) {
        try {
          return action();
        } catch (error) {
          if (error instanceof Error && error.name === "SecurityError") {
            exports.Storage._setProvider(_inMemoryProvider);
            return null;
          }
          if (error instanceof Error && error.name === "QuotaExceededError") {
            const allKeys = exports.Storage.getAllKeys();
            const statsigKeys = allKeys.filter((key) => key.startsWith("statsig."));
            error.message = `${error.message}. Statsig Keys: ${statsigKeys.length}`;
          }
          throw error;
        }
      }
      exports.Storage = {
        isReady: () => _current.isReady(),
        isReadyResolver: () => _current.isReadyResolver(),
        getProviderName: () => _current.getProviderName(),
        getItem: (key) => _inMemoryBreaker(() => _current.getItem(key)),
        setItem: (key, value) => _inMemoryBreaker(() => _current.setItem(key, value)),
        removeItem: (key) => _current.removeItem(key),
        getAllKeys: () => _current.getAllKeys(),
        // StorageProviderManagment
        _setProvider: (newProvider) => {
          _main = newProvider;
          _current = newProvider;
        },
        _setDisabled: (isDisabled) => {
          if (isDisabled) {
            _current = _inMemoryProvider;
          } else {
            _current = _main;
          }
        }
      };
      function _getObjectFromStorage(key) {
        const value = exports.Storage.getItem(key);
        return JSON.parse(value !== null && value !== void 0 ? value : "null");
      }
      exports._getObjectFromStorage = _getObjectFromStorage;
      function _setObjectInStorage(key, obj) {
        exports.Storage.setItem(key, JSON.stringify(obj));
      }
      exports._setObjectInStorage = _setObjectInStorage;
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/UrlConfiguration.js
  var require_UrlConfiguration = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/UrlConfiguration.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.UrlConfiguration = void 0;
      var Hashing_1 = require_Hashing();
      var NetworkConfig_1 = require_NetworkConfig();
      var ENDPOINT_DNS_KEY_MAP = {
        [NetworkConfig_1.Endpoint._initialize]: "i",
        [NetworkConfig_1.Endpoint._rgstr]: "e",
        [NetworkConfig_1.Endpoint._download_config_specs]: "d"
      };
      var UrlConfiguration = class {
        constructor(endpoint, customUrl, customApi, fallbackUrls) {
          this.customUrl = null;
          this.fallbackUrls = null;
          this.endpoint = endpoint;
          this.endpointDnsKey = ENDPOINT_DNS_KEY_MAP[endpoint];
          if (customUrl) {
            this.customUrl = customUrl;
          }
          if (!customUrl && customApi) {
            this.customUrl = customApi.endsWith("/") ? `${customApi}${endpoint}` : `${customApi}/${endpoint}`;
          }
          if (fallbackUrls) {
            this.fallbackUrls = fallbackUrls;
          }
          const defaultApi = NetworkConfig_1.NetworkDefault[endpoint];
          this.defaultUrl = `${defaultApi}/${endpoint}`;
        }
        getUrl() {
          var _a;
          return (_a = this.customUrl) !== null && _a !== void 0 ? _a : this.defaultUrl;
        }
        getChecksum() {
          var _a;
          const fallbacks = ((_a = this.fallbackUrls) !== null && _a !== void 0 ? _a : []).sort().join(",");
          return (0, Hashing_1._DJB2)(this.customUrl + fallbacks);
        }
      };
      exports.UrlConfiguration = UrlConfiguration;
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/VisibilityObserving.js
  var require_VisibilityObserving = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/VisibilityObserving.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports._notifyVisibilityChanged = exports._subscribeToVisiblityChanged = exports._isUnloading = exports._isCurrentlyVisible = void 0;
      var SafeJs_1 = require_SafeJs();
      var FOREGROUND = "foreground";
      var BACKGROUND = "background";
      var LISTENERS = [];
      var current = FOREGROUND;
      var isUnloading = false;
      var _isCurrentlyVisible = () => {
        return current === FOREGROUND;
      };
      exports._isCurrentlyVisible = _isCurrentlyVisible;
      var _isUnloading = () => isUnloading;
      exports._isUnloading = _isUnloading;
      var _subscribeToVisiblityChanged = (listener) => {
        LISTENERS.unshift(listener);
      };
      exports._subscribeToVisiblityChanged = _subscribeToVisiblityChanged;
      var _notifyVisibilityChanged = (visibility) => {
        if (visibility === current) {
          return;
        }
        current = visibility;
        LISTENERS.forEach((l) => l(visibility));
      };
      exports._notifyVisibilityChanged = _notifyVisibilityChanged;
      (0, SafeJs_1._addWindowEventListenerSafe)("focus", () => {
        isUnloading = false;
        (0, exports._notifyVisibilityChanged)(FOREGROUND);
      });
      (0, SafeJs_1._addWindowEventListenerSafe)("blur", () => (0, exports._notifyVisibilityChanged)(BACKGROUND));
      (0, SafeJs_1._addDocumentEventListenerSafe)("visibilitychange", () => {
        (0, exports._notifyVisibilityChanged)(document.visibilityState === "visible" ? FOREGROUND : BACKGROUND);
      });
      (0, SafeJs_1._addWindowEventListenerSafe)((0, SafeJs_1._getUnloadEvent)(), () => {
        isUnloading = true;
        (0, exports._notifyVisibilityChanged)(BACKGROUND);
      });
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/EventLogger.js
  var require_EventLogger = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/EventLogger.js"(exports) {
      "use strict";
      var __awaiter2 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.EventLogger = void 0;
      var CacheKey_1 = require_CacheKey();
      var Hashing_1 = require_Hashing();
      var Log_1 = require_Log();
      var NetworkConfig_1 = require_NetworkConfig();
      var SafeJs_1 = require_SafeJs();
      var StatsigEvent_1 = require_StatsigEvent();
      var StatsigOptionsCommon_1 = require_StatsigOptionsCommon();
      var StorageProvider_1 = require_StorageProvider();
      var UrlConfiguration_1 = require_UrlConfiguration();
      var VisibilityObserving_1 = require_VisibilityObserving();
      var DEFAULT_QUEUE_SIZE = 100;
      var DEFAULT_FLUSH_INTERVAL_MS = 1e4;
      var MAX_DEDUPER_KEYS = 1e3;
      var DEDUPER_WINDOW_DURATION_MS = 6e5;
      var MAX_FAILED_LOGS = 500;
      var QUICK_FLUSH_WINDOW_MS = 200;
      var EVENT_LOGGER_MAP = {};
      var RetryFailedLogsTrigger = {
        Startup: "startup",
        GainedFocus: "gained_focus"
      };
      var EventLogger = class _EventLogger {
        static _safeFlushAndForget(sdkKey) {
          var _a;
          (_a = EVENT_LOGGER_MAP[sdkKey]) === null || _a === void 0 ? void 0 : _a.flush().catch(() => {
          });
        }
        static _safeRetryFailedLogs(sdkKey) {
          var _a;
          (_a = EVENT_LOGGER_MAP[sdkKey]) === null || _a === void 0 ? void 0 : _a._retryFailedLogs(RetryFailedLogsTrigger.GainedFocus);
        }
        constructor(_sdkKey, _emitter, _network, _options) {
          var _a, _b;
          this._sdkKey = _sdkKey;
          this._emitter = _emitter;
          this._network = _network;
          this._options = _options;
          this._queue = [];
          this._lastExposureTimeMap = {};
          this._nonExposedChecks = {};
          this._hasRunQuickFlush = false;
          this._creationTime = Date.now();
          this._loggingEnabled = (_a = _options === null || _options === void 0 ? void 0 : _options.loggingEnabled) !== null && _a !== void 0 ? _a : (_options === null || _options === void 0 ? void 0 : _options.disableLogging) === true ? StatsigOptionsCommon_1.LoggingEnabledOption.disabled : StatsigOptionsCommon_1.LoggingEnabledOption.browserOnly;
          if ((_options === null || _options === void 0 ? void 0 : _options.loggingEnabled) && _options.disableLogging !== void 0) {
            Log_1.Log.warn("Detected both loggingEnabled and disableLogging options. loggingEnabled takes precedence - please remove disableLogging.");
          }
          this._maxQueueSize = (_b = _options === null || _options === void 0 ? void 0 : _options.loggingBufferMaxSize) !== null && _b !== void 0 ? _b : DEFAULT_QUEUE_SIZE;
          const config = _options === null || _options === void 0 ? void 0 : _options.networkConfig;
          this._logEventUrlConfig = new UrlConfiguration_1.UrlConfiguration(NetworkConfig_1.Endpoint._rgstr, config === null || config === void 0 ? void 0 : config.logEventUrl, config === null || config === void 0 ? void 0 : config.api, config === null || config === void 0 ? void 0 : config.logEventFallbackUrls);
        }
        setLogEventCompressionMode(mode) {
          this._network.setLogEventCompressionMode(mode);
        }
        setLoggingEnabled(loggingEnabled) {
          this._loggingEnabled = loggingEnabled;
        }
        enqueue(event) {
          if (!this._shouldLogEvent(event)) {
            return;
          }
          this._normalizeAndAppendEvent(event);
          this._quickFlushIfNeeded();
          if (this._queue.length > this._maxQueueSize) {
            _EventLogger._safeFlushAndForget(this._sdkKey);
          }
        }
        incrementNonExposureCount(name) {
          var _a;
          const current = (_a = this._nonExposedChecks[name]) !== null && _a !== void 0 ? _a : 0;
          this._nonExposedChecks[name] = current + 1;
        }
        reset() {
          this.flush().catch(() => {
          });
          this._lastExposureTimeMap = {};
        }
        start() {
          var _a;
          const isServerEnv = (0, SafeJs_1._isServerEnv)();
          if (isServerEnv && ((_a = this._options) === null || _a === void 0 ? void 0 : _a.loggingEnabled) !== "always") {
            return;
          }
          EVENT_LOGGER_MAP[this._sdkKey] = this;
          if (!isServerEnv) {
            (0, VisibilityObserving_1._subscribeToVisiblityChanged)((visibility) => {
              if (visibility === "background") {
                _EventLogger._safeFlushAndForget(this._sdkKey);
              } else if (visibility === "foreground") {
                _EventLogger._safeRetryFailedLogs(this._sdkKey);
              }
            });
          }
          this._retryFailedLogs(RetryFailedLogsTrigger.Startup);
          this._startBackgroundFlushInterval();
        }
        stop() {
          return __awaiter2(this, void 0, void 0, function* () {
            if (this._flushIntervalId) {
              clearInterval(this._flushIntervalId);
              this._flushIntervalId = null;
            }
            delete EVENT_LOGGER_MAP[this._sdkKey];
            yield this.flush();
          });
        }
        flush() {
          return __awaiter2(this, void 0, void 0, function* () {
            this._appendAndResetNonExposedChecks();
            if (this._queue.length === 0) {
              return;
            }
            const events = this._queue;
            this._queue = [];
            yield this._sendEvents(events);
          });
        }
        /**
         * We 'Quick Flush' following the very first event enqueued
         * within the quick flush window
         */
        _quickFlushIfNeeded() {
          if (this._hasRunQuickFlush) {
            return;
          }
          this._hasRunQuickFlush = true;
          if (Date.now() - this._creationTime > QUICK_FLUSH_WINDOW_MS) {
            return;
          }
          setTimeout(() => _EventLogger._safeFlushAndForget(this._sdkKey), QUICK_FLUSH_WINDOW_MS);
        }
        _shouldLogEvent(event) {
          var _a;
          if (((_a = this._options) === null || _a === void 0 ? void 0 : _a.loggingEnabled) !== "always" && (0, SafeJs_1._isServerEnv)()) {
            return false;
          }
          if (!(0, StatsigEvent_1._isExposureEvent)(event)) {
            return true;
          }
          const user = event.user ? event.user : { statsigEnvironment: void 0 };
          const userKey = (0, CacheKey_1._getUserStorageKey)(this._sdkKey, user);
          const metadata = event.metadata ? event.metadata : {};
          const key = [
            event.eventName,
            userKey,
            metadata["gate"],
            metadata["config"],
            metadata["ruleID"],
            metadata["allocatedExperiment"],
            metadata["parameterName"],
            String(metadata["isExplicitParameter"]),
            metadata["reason"]
          ].join("|");
          const previous = this._lastExposureTimeMap[key];
          const now = Date.now();
          if (previous && now - previous < DEDUPER_WINDOW_DURATION_MS) {
            return false;
          }
          if (Object.keys(this._lastExposureTimeMap).length > MAX_DEDUPER_KEYS) {
            this._lastExposureTimeMap = {};
          }
          this._lastExposureTimeMap[key] = now;
          return true;
        }
        _sendEvents(events) {
          return __awaiter2(this, void 0, void 0, function* () {
            var _a, _b;
            if (this._loggingEnabled === "disabled") {
              this._saveFailedLogsToStorage(events);
              return false;
            }
            try {
              const isClosing = (0, VisibilityObserving_1._isUnloading)();
              const shouldUseBeacon = isClosing && this._network.isBeaconSupported() && ((_b = (_a = this._options) === null || _a === void 0 ? void 0 : _a.networkConfig) === null || _b === void 0 ? void 0 : _b.networkOverrideFunc) == null;
              this._emitter({
                name: "pre_logs_flushed",
                events
              });
              const response = shouldUseBeacon ? this._sendEventsViaBeacon(events) : yield this._sendEventsViaPost(events);
              if (response.success) {
                this._emitter({
                  name: "logs_flushed",
                  events
                });
                return true;
              } else {
                Log_1.Log.warn("Failed to flush events.");
                this._saveFailedLogsToStorage(events);
                return false;
              }
            } catch (_c) {
              Log_1.Log.warn("Failed to flush events.");
              return false;
            }
          });
        }
        _sendEventsViaPost(events) {
          return __awaiter2(this, void 0, void 0, function* () {
            var _a;
            const result = yield this._network.post(this._getRequestData(events));
            const code = (_a = result === null || result === void 0 ? void 0 : result.code) !== null && _a !== void 0 ? _a : -1;
            return { success: code >= 200 && code < 300 };
          });
        }
        _sendEventsViaBeacon(events) {
          return {
            success: this._network.beacon(this._getRequestData(events))
          };
        }
        _getRequestData(events) {
          return {
            sdkKey: this._sdkKey,
            data: {
              events
            },
            urlConfig: this._logEventUrlConfig,
            retries: 3,
            isCompressable: true,
            params: {
              [NetworkConfig_1.NetworkParam.EventCount]: String(events.length)
            },
            credentials: "same-origin"
          };
        }
        _saveFailedLogsToStorage(events) {
          while (events.length > MAX_FAILED_LOGS) {
            events.shift();
          }
          const storageKey = this._getStorageKey();
          try {
            (0, StorageProvider_1._setObjectInStorage)(storageKey, events);
          } catch (_a) {
            Log_1.Log.warn("Unable to save failed logs to storage");
          }
        }
        _retryFailedLogs(trigger) {
          const storageKey = this._getStorageKey();
          (() => __awaiter2(this, void 0, void 0, function* () {
            if (!StorageProvider_1.Storage.isReady()) {
              yield StorageProvider_1.Storage.isReadyResolver();
            }
            const events = (0, StorageProvider_1._getObjectFromStorage)(storageKey);
            if (!events) {
              return;
            }
            if (trigger === RetryFailedLogsTrigger.Startup) {
              StorageProvider_1.Storage.removeItem(storageKey);
            }
            const isSuccess = yield this._sendEvents(events);
            if (isSuccess && trigger === RetryFailedLogsTrigger.GainedFocus) {
              StorageProvider_1.Storage.removeItem(storageKey);
            }
          }))().catch(() => {
            Log_1.Log.warn("Failed to flush stored logs");
          });
        }
        _getStorageKey() {
          return `statsig.failed_logs.${(0, Hashing_1._DJB2)(this._sdkKey)}`;
        }
        _normalizeAndAppendEvent(event) {
          if (event.user) {
            event.user = Object.assign({}, event.user);
            delete event.user.privateAttributes;
          }
          const extras = {};
          const currentPage = this._getCurrentPageUrl();
          if (currentPage) {
            extras.statsigMetadata = { currentPage };
          }
          const final = Object.assign(Object.assign({}, event), extras);
          Log_1.Log.debug("Enqueued Event:", final);
          this._queue.push(final);
        }
        _appendAndResetNonExposedChecks() {
          if (Object.keys(this._nonExposedChecks).length === 0) {
            return;
          }
          this._normalizeAndAppendEvent({
            eventName: "statsig::non_exposed_checks",
            user: null,
            time: Date.now(),
            metadata: {
              checks: Object.assign({}, this._nonExposedChecks)
            }
          });
          this._nonExposedChecks = {};
        }
        _getCurrentPageUrl() {
          var _a;
          if (((_a = this._options) === null || _a === void 0 ? void 0 : _a.includeCurrentPageUrlWithEvents) === false) {
            return;
          }
          return (0, SafeJs_1._getCurrentPageUrlSafe)();
        }
        _startBackgroundFlushInterval() {
          var _a, _b;
          const flushInterval = (_b = (_a = this._options) === null || _a === void 0 ? void 0 : _a.loggingIntervalMs) !== null && _b !== void 0 ? _b : DEFAULT_FLUSH_INTERVAL_MS;
          const intervalId = setInterval(() => {
            const logger = EVENT_LOGGER_MAP[this._sdkKey];
            if (!logger || logger._flushIntervalId !== intervalId) {
              clearInterval(intervalId);
            } else {
              _EventLogger._safeFlushAndForget(this._sdkKey);
            }
          }, flushInterval);
          this._flushIntervalId = intervalId;
        }
      };
      exports.EventLogger = EventLogger;
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/StatsigMetadata.js
  var require_StatsigMetadata = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/StatsigMetadata.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.StatsigMetadataProvider = exports.SDK_VERSION = void 0;
      exports.SDK_VERSION = "3.18.2";
      var metadata = {
        sdkVersion: exports.SDK_VERSION,
        sdkType: "js-mono"
        // js-mono is overwritten by Precomp and OnDevice clients
      };
      exports.StatsigMetadataProvider = {
        get: () => metadata,
        add: (additions) => {
          metadata = Object.assign(Object.assign({}, metadata), additions);
        }
      };
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/ClientInterfaces.js
  var require_ClientInterfaces = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/ClientInterfaces.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/UUID.js
  var require_UUID = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/UUID.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getUUID = void 0;
      function getUUID() {
        if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
          return crypto.randomUUID();
        }
        let d = (/* @__PURE__ */ new Date()).getTime();
        let d2 = typeof performance !== "undefined" && performance.now && performance.now() * 1e3 || 0;
        const y = "89ab"[Math.floor(Math.random() * 4)];
        return `xxxxxxxx-xxxx-4xxx-${y}xxx-xxxxxxxxxxxx`.replace(/[xy]/g, (c) => {
          let r = Math.random() * 16;
          if (d > 0) {
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
          } else {
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
          }
          return (c === "x" ? r : r & 7 | 8).toString(16);
        });
      }
      exports.getUUID = getUUID;
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/StableID.js
  var require_StableID = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/StableID.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.StableID = void 0;
      var CacheKey_1 = require_CacheKey();
      var Log_1 = require_Log();
      var SafeJs_1 = require_SafeJs();
      var StorageProvider_1 = require_StorageProvider();
      var UUID_1 = require_UUID();
      var PROMISE_MAP = {};
      var COOKIE_ENABLED_MAP = {};
      var DISABLED_MAP = {};
      exports.StableID = {
        cookiesEnabled: false,
        randomID: Math.random().toString(36),
        get: (sdkKey) => {
          if (DISABLED_MAP[sdkKey]) {
            return null;
          }
          if (PROMISE_MAP[sdkKey] != null) {
            return PROMISE_MAP[sdkKey];
          }
          let stableID = null;
          stableID = _loadFromCookie(sdkKey);
          if (stableID != null) {
            PROMISE_MAP[sdkKey] = stableID;
            _persistToStorage(stableID, sdkKey);
            return stableID;
          }
          stableID = _loadFromStorage(sdkKey);
          if (stableID == null) {
            stableID = (0, UUID_1.getUUID)();
          }
          _persistToStorage(stableID, sdkKey);
          _persistToCookie(stableID, sdkKey);
          PROMISE_MAP[sdkKey] = stableID;
          return stableID;
        },
        setOverride: (override, sdkKey) => {
          PROMISE_MAP[sdkKey] = override;
          _persistToStorage(override, sdkKey);
          _persistToCookie(override, sdkKey);
        },
        _setCookiesEnabled: (sdkKey, cookiesEnabled) => {
          COOKIE_ENABLED_MAP[sdkKey] = cookiesEnabled;
        },
        _setDisabled: (sdkKey, disabled) => {
          DISABLED_MAP[sdkKey] = disabled;
        }
      };
      function _getStableIDStorageKey(sdkKey) {
        return `statsig.stable_id.${(0, CacheKey_1._getStorageKey)(sdkKey)}`;
      }
      function _persistToStorage(stableID, sdkKey) {
        const storageKey = _getStableIDStorageKey(sdkKey);
        try {
          (0, StorageProvider_1._setObjectInStorage)(storageKey, stableID);
        } catch (e) {
          Log_1.Log.warn("Failed to save StableID to storage");
        }
      }
      function _loadFromStorage(sdkKey) {
        const storageKey = _getStableIDStorageKey(sdkKey);
        return (0, StorageProvider_1._getObjectFromStorage)(storageKey);
      }
      function _loadFromCookie(sdkKey) {
        if (!COOKIE_ENABLED_MAP[sdkKey] || (0, SafeJs_1._getDocumentSafe)() == null) {
          return null;
        }
        const cookies = document.cookie.split(";");
        for (const cookie of cookies) {
          const [key, value] = cookie.trim().split("=");
          if (key === _getCookieName(sdkKey)) {
            return decodeURIComponent(value);
          }
        }
        return null;
      }
      function _persistToCookie(stableID, sdkKey) {
        if (!COOKIE_ENABLED_MAP[sdkKey] || !document) {
          return;
        }
        const expiryDate = /* @__PURE__ */ new Date();
        expiryDate.setFullYear(expiryDate.getFullYear() + 1);
        document.cookie = `${_getCookieName(sdkKey)}=${encodeURIComponent(stableID)}; expires=${expiryDate.toUTCString()}; path=/`;
      }
      function _getCookieName(sdkKey) {
        return `statsig.stable_id.${(0, CacheKey_1._getStorageKey)(sdkKey)}`;
      }
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/StatsigUser.js
  var require_StatsigUser = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/StatsigUser.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports._getFullUserHash = exports._normalizeUser = void 0;
      var Hashing_1 = require_Hashing();
      var Log_1 = require_Log();
      function _normalizeUser(original, options, fallbackEnvironment) {
        try {
          const copy = JSON.parse(JSON.stringify(original));
          if (options != null && options.environment != null) {
            copy.statsigEnvironment = options.environment;
          } else if (fallbackEnvironment != null) {
            copy.statsigEnvironment = { tier: fallbackEnvironment };
          }
          return copy;
        } catch (error) {
          Log_1.Log.error("Failed to JSON.stringify user");
          return { statsigEnvironment: void 0 };
        }
      }
      exports._normalizeUser = _normalizeUser;
      function _getFullUserHash(user) {
        return user ? (0, Hashing_1._DJB2Object)(user) : null;
      }
      exports._getFullUserHash = _getFullUserHash;
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/TypedJsonParse.js
  var require_TypedJsonParse = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/TypedJsonParse.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports._typedJsonParse = void 0;
      var Log_1 = require_Log();
      function _typedJsonParse(data, guard, typeName) {
        try {
          const result = JSON.parse(data);
          if (result && typeof result === "object" && guard in result) {
            return result;
          }
        } catch (_a) {
        }
        Log_1.Log.error(`Failed to parse ${typeName}`);
        return null;
      }
      exports._typedJsonParse = _typedJsonParse;
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/DataAdapterCore.js
  var require_DataAdapterCore = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/DataAdapterCore.js"(exports) {
      "use strict";
      var __awaiter2 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports._makeDataAdapterResult = exports.DataAdapterCore = void 0;
      var Log_1 = require_Log();
      var StableID_1 = require_StableID();
      var StatsigUser_1 = require_StatsigUser();
      var StorageProvider_1 = require_StorageProvider();
      var TypedJsonParse_1 = require_TypedJsonParse();
      var CACHE_LIMIT = 10;
      var DataAdapterCore = class {
        constructor(_adapterName, _cacheSuffix) {
          this._adapterName = _adapterName;
          this._cacheSuffix = _cacheSuffix;
          this._options = null;
          this._sdkKey = null;
          this._lastModifiedStoreKey = `statsig.last_modified_time.${_cacheSuffix}`;
          this._inMemoryCache = new InMemoryCache();
        }
        attach(sdkKey, options, _network) {
          this._sdkKey = sdkKey;
          this._options = options;
        }
        getDataSync(user) {
          const normalized = user && (0, StatsigUser_1._normalizeUser)(user, this._options);
          const cacheKey = this._getCacheKey(normalized);
          const inMem = this._inMemoryCache.get(cacheKey, normalized);
          if (inMem && this._getIsCacheValueValid(inMem)) {
            return inMem;
          }
          const cache = this._loadFromCache(cacheKey);
          if (cache && this._getIsCacheValueValid(cache)) {
            this._inMemoryCache.add(cacheKey, cache);
            return this._inMemoryCache.get(cacheKey, normalized);
          }
          return null;
        }
        setData(data, user) {
          const normalized = user && (0, StatsigUser_1._normalizeUser)(user, this._options);
          const cacheKey = this._getCacheKey(normalized);
          this._inMemoryCache.add(cacheKey, _makeDataAdapterResult("Bootstrap", data, null, normalized));
        }
        _getIsCacheValueValid(current) {
          return current.stableID == null || current.stableID === StableID_1.StableID.get(this._getSdkKey());
        }
        _getDataAsyncImpl(current, user, options) {
          return __awaiter2(this, void 0, void 0, function* () {
            if (!StorageProvider_1.Storage.isReady()) {
              yield StorageProvider_1.Storage.isReadyResolver();
            }
            const cache = current !== null && current !== void 0 ? current : this.getDataSync(user);
            const ops = [this._fetchAndPrepFromNetwork(cache, user, options)];
            if (options === null || options === void 0 ? void 0 : options.timeoutMs) {
              ops.push(new Promise((r) => setTimeout(r, options.timeoutMs)).then(() => {
                Log_1.Log.debug("Fetching latest value timed out");
                return null;
              }));
            }
            return yield Promise.race(ops);
          });
        }
        _prefetchDataImpl(user, options) {
          return __awaiter2(this, void 0, void 0, function* () {
            const normalized = user && (0, StatsigUser_1._normalizeUser)(user, this._options);
            const cacheKey = this._getCacheKey(normalized);
            const result = yield this._getDataAsyncImpl(null, normalized, options);
            if (result) {
              this._inMemoryCache.add(cacheKey, Object.assign(Object.assign({}, result), { source: "Prefetch" }));
            }
          });
        }
        _fetchAndPrepFromNetwork(cachedResult, user, options) {
          return __awaiter2(this, void 0, void 0, function* () {
            var _a;
            const cachedData = (_a = cachedResult === null || cachedResult === void 0 ? void 0 : cachedResult.data) !== null && _a !== void 0 ? _a : null;
            const isCacheValidFor204 = cachedResult != null && this._isCachedResultValidFor204(cachedResult, user);
            const latest = yield this._fetchFromNetwork(cachedData, user, options, isCacheValidFor204);
            if (!latest) {
              Log_1.Log.debug("No response returned for latest value");
              return null;
            }
            const response = (0, TypedJsonParse_1._typedJsonParse)(latest, "has_updates", "Response");
            const sdkKey = this._getSdkKey();
            const stableID = StableID_1.StableID.get(sdkKey);
            let result = null;
            if ((response === null || response === void 0 ? void 0 : response.has_updates) === true) {
              result = _makeDataAdapterResult("Network", latest, stableID, user);
            } else if (cachedData && (response === null || response === void 0 ? void 0 : response.has_updates) === false) {
              result = _makeDataAdapterResult("NetworkNotModified", cachedData, stableID, user);
            } else {
              return null;
            }
            const cacheKey = this._getCacheKey(user);
            this._inMemoryCache.add(cacheKey, result);
            this._writeToCache(cacheKey, result);
            return result;
          });
        }
        _getSdkKey() {
          if (this._sdkKey != null) {
            return this._sdkKey;
          }
          Log_1.Log.error(`${this._adapterName} is not attached to a Client`);
          return "";
        }
        _loadFromCache(cacheKey) {
          var _a;
          const cache = (_a = StorageProvider_1.Storage.getItem) === null || _a === void 0 ? void 0 : _a.call(StorageProvider_1.Storage, cacheKey);
          if (cache == null) {
            return null;
          }
          const result = (0, TypedJsonParse_1._typedJsonParse)(cache, "source", "Cached Result");
          return result ? Object.assign(Object.assign({}, result), { source: "Cache" }) : null;
        }
        _writeToCache(cacheKey, result) {
          StorageProvider_1.Storage.setItem(cacheKey, JSON.stringify(result));
          this._runLocalStorageCacheEviction(cacheKey);
        }
        _runLocalStorageCacheEviction(cacheKey) {
          var _a;
          const lastModifiedTimeMap = (_a = (0, StorageProvider_1._getObjectFromStorage)(this._lastModifiedStoreKey)) !== null && _a !== void 0 ? _a : {};
          lastModifiedTimeMap[cacheKey] = Date.now();
          const evictable = _getEvictableKey(lastModifiedTimeMap, CACHE_LIMIT);
          if (evictable) {
            delete lastModifiedTimeMap[evictable];
            StorageProvider_1.Storage.removeItem(evictable);
          }
          (0, StorageProvider_1._setObjectInStorage)(this._lastModifiedStoreKey, lastModifiedTimeMap);
        }
      };
      exports.DataAdapterCore = DataAdapterCore;
      function _makeDataAdapterResult(source, data, stableID, user) {
        return {
          source,
          data,
          receivedAt: Date.now(),
          stableID,
          fullUserHash: (0, StatsigUser_1._getFullUserHash)(user)
        };
      }
      exports._makeDataAdapterResult = _makeDataAdapterResult;
      var InMemoryCache = class {
        constructor() {
          this._data = {};
        }
        get(cacheKey, user) {
          var _a;
          const result = this._data[cacheKey];
          const cached = result === null || result === void 0 ? void 0 : result.stableID;
          const provided = (_a = user === null || user === void 0 ? void 0 : user.customIDs) === null || _a === void 0 ? void 0 : _a.stableID;
          if (provided && cached && provided !== cached) {
            Log_1.Log.warn("'StatsigUser.customIDs.stableID' mismatch");
            return null;
          }
          return result;
        }
        add(cacheKey, value) {
          const oldest = _getEvictableKey(this._data, CACHE_LIMIT - 1);
          if (oldest) {
            delete this._data[oldest];
          }
          this._data[cacheKey] = value;
        }
        merge(values) {
          this._data = Object.assign(Object.assign({}, this._data), values);
        }
      };
      function _getEvictableKey(data, limit) {
        const keys = Object.keys(data);
        if (keys.length <= limit) {
          return null;
        }
        return keys.reduce((prevKey, currKey) => {
          const prev = data[prevKey];
          const current = data[currKey];
          if (typeof prev === "object" && typeof current === "object") {
            return current.receivedAt < prev.receivedAt ? currKey : prevKey;
          }
          return current < prev ? currKey : prevKey;
        });
      }
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/DownloadConfigSpecsResponse.js
  var require_DownloadConfigSpecsResponse = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/DownloadConfigSpecsResponse.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/SDKType.js
  var require_SDKType = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/SDKType.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.SDKType = void 0;
      var SDK_CLIENT = {};
      var suffix;
      exports.SDKType = {
        _get: (sdkKey) => {
          var _a;
          return ((_a = SDK_CLIENT[sdkKey]) !== null && _a !== void 0 ? _a : "js-mono") + (suffix !== null && suffix !== void 0 ? suffix : "");
        },
        _setClientType(sdkKey, client) {
          SDK_CLIENT[sdkKey] = client;
        },
        _setBindingType(binding) {
          if (!suffix || suffix === "-react") {
            suffix = "-" + binding;
          }
        }
      };
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/ErrorBoundary.js
  var require_ErrorBoundary = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/ErrorBoundary.js"(exports) {
      "use strict";
      var __awaiter2 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ErrorBoundary = exports.EXCEPTION_ENDPOINT = void 0;
      var Log_1 = require_Log();
      var SDKType_1 = require_SDKType();
      var StatsigMetadata_1 = require_StatsigMetadata();
      exports.EXCEPTION_ENDPOINT = "https://statsigapi.net/v1/sdk_exception";
      var UNKNOWN_ERROR = "[Statsig] UnknownError";
      var ErrorBoundary = class {
        constructor(_sdkKey, _options, _emitter, _lastSeenError) {
          this._sdkKey = _sdkKey;
          this._options = _options;
          this._emitter = _emitter;
          this._lastSeenError = _lastSeenError;
          this._seen = /* @__PURE__ */ new Set();
        }
        wrap(instance) {
          try {
            const obj = instance;
            _getAllInstanceMethodNames(obj).forEach((name) => {
              const original = obj[name];
              if ("$EB" in original) {
                return;
              }
              obj[name] = (...args) => {
                return this._capture(name, () => original.apply(instance, args));
              };
              obj[name].$EB = true;
            });
          } catch (err) {
            this._onError("eb:wrap", err);
          }
        }
        logError(tag, error) {
          this._onError(tag, error);
        }
        getLastSeenErrorAndReset() {
          const tempError = this._lastSeenError;
          this._lastSeenError = void 0;
          return tempError !== null && tempError !== void 0 ? tempError : null;
        }
        attachErrorIfNoneExists(error) {
          if (this._lastSeenError) {
            return;
          }
          this._lastSeenError = _resolveError(error);
        }
        _capture(tag, task) {
          try {
            const res = task();
            if (res && res instanceof Promise) {
              return res.catch((err) => this._onError(tag, err));
            }
            return res;
          } catch (error) {
            this._onError(tag, error);
            return null;
          }
        }
        _onError(tag, error) {
          try {
            Log_1.Log.warn(`Caught error in ${tag}`, { error });
            const impl = () => __awaiter2(this, void 0, void 0, function* () {
              var _a, _b, _c, _d, _e, _f, _g;
              const unwrapped = error ? error : Error(UNKNOWN_ERROR);
              const isError = unwrapped instanceof Error;
              const name = isError ? unwrapped.name : "No Name";
              const resolvedError = _resolveError(unwrapped);
              this._lastSeenError = resolvedError;
              if (this._seen.has(name)) {
                return;
              }
              this._seen.add(name);
              if ((_b = (_a = this._options) === null || _a === void 0 ? void 0 : _a.networkConfig) === null || _b === void 0 ? void 0 : _b.preventAllNetworkTraffic) {
                (_c = this._emitter) === null || _c === void 0 ? void 0 : _c.call(this, {
                  name: "error",
                  error,
                  tag
                });
                return;
              }
              const sdkType = SDKType_1.SDKType._get(this._sdkKey);
              const statsigMetadata = StatsigMetadata_1.StatsigMetadataProvider.get();
              const info = isError ? unwrapped.stack : _getDescription(unwrapped);
              const body = Object.assign({ tag, exception: name, info, statsigOptions: _getStatsigOptionLoggingCopy(this._options) }, Object.assign(Object.assign({}, statsigMetadata), { sdkType }));
              const func = (_f = (_e = (_d = this._options) === null || _d === void 0 ? void 0 : _d.networkConfig) === null || _e === void 0 ? void 0 : _e.networkOverrideFunc) !== null && _f !== void 0 ? _f : fetch;
              yield func(exports.EXCEPTION_ENDPOINT, {
                method: "POST",
                headers: {
                  "STATSIG-API-KEY": this._sdkKey,
                  "STATSIG-SDK-TYPE": String(sdkType),
                  "STATSIG-SDK-VERSION": String(statsigMetadata.sdkVersion),
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
              });
              (_g = this._emitter) === null || _g === void 0 ? void 0 : _g.call(this, {
                name: "error",
                error,
                tag
              });
            });
            impl().then(() => {
            }).catch(() => {
            });
          } catch (_error) {
          }
        }
      };
      exports.ErrorBoundary = ErrorBoundary;
      function _resolveError(error) {
        if (error instanceof Error) {
          return error;
        } else if (typeof error === "string") {
          return new Error(error);
        } else {
          return new Error("An unknown error occurred.");
        }
      }
      function _getDescription(obj) {
        try {
          return JSON.stringify(obj);
        } catch (_a) {
          return UNKNOWN_ERROR;
        }
      }
      function _getAllInstanceMethodNames(instance) {
        const names = /* @__PURE__ */ new Set();
        let proto = Object.getPrototypeOf(instance);
        while (proto && proto !== Object.prototype) {
          Object.getOwnPropertyNames(proto).filter((prop) => typeof (proto === null || proto === void 0 ? void 0 : proto[prop]) === "function").forEach((name) => names.add(name));
          proto = Object.getPrototypeOf(proto);
        }
        return Array.from(names);
      }
      function _getStatsigOptionLoggingCopy(options) {
        if (!options) {
          return {};
        }
        const loggingCopy = {};
        Object.entries(options).forEach(([option, value]) => {
          const valueType = typeof value;
          switch (valueType) {
            case "number":
            case "bigint":
            case "boolean":
              loggingCopy[String(option)] = value;
              break;
            case "string":
              if (value.length < 50) {
                loggingCopy[String(option)] = value;
              } else {
                loggingCopy[String(option)] = "set";
              }
              break;
            case "object":
              if (option === "environment") {
                loggingCopy["environment"] = value;
              } else if (option === "networkConfig") {
                loggingCopy["networkConfig"] = value;
              } else {
                loggingCopy[String(option)] = value != null ? "set" : "unset";
              }
              break;
            default:
          }
        });
        return loggingCopy;
      }
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/EvaluationOptions.js
  var require_EvaluationOptions = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/EvaluationOptions.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/EvaluationTypes.js
  var require_EvaluationTypes = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/EvaluationTypes.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/InitializeResponse.js
  var require_InitializeResponse = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/InitializeResponse.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/MemoKey.js
  var require_MemoKey = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/MemoKey.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createMemoKey = exports.MemoPrefix = void 0;
      exports.MemoPrefix = {
        _gate: "g",
        _dynamicConfig: "c",
        _experiment: "e",
        _layer: "l",
        _paramStore: "p"
      };
      var EXIST_KEYS = /* @__PURE__ */ new Set([
        // Add keys that should be memoized based only on their existence, not their value
      ]);
      var DO_NOT_MEMO_KEYS = /* @__PURE__ */ new Set([
        // Add keys that if exist, should not be memoized
        "userPersistedValues"
      ]);
      function createMemoKey(prefix, name, options) {
        let cacheKey = `${prefix}|${name}`;
        if (!options) {
          return cacheKey;
        }
        for (const key of Object.keys(options)) {
          if (DO_NOT_MEMO_KEYS.has(key)) {
            return void 0;
          }
          if (EXIST_KEYS.has(key)) {
            cacheKey += `|${key}=true`;
          } else {
            cacheKey += `|${key}=${options[key]}`;
          }
        }
        return cacheKey;
      }
      exports.createMemoKey = createMemoKey;
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/DnsTxtQuery.js
  var require_DnsTxtQuery = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/DnsTxtQuery.js"(exports) {
      "use strict";
      var __awaiter2 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports._fetchTxtRecords = void 0;
      var FEATURE_ASSETS_DNS_QUERY = new Uint8Array([
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        13,
        102,
        101,
        97,
        116,
        117,
        114,
        101,
        97,
        115,
        115,
        101,
        116,
        115,
        3,
        111,
        114,
        103,
        0,
        0,
        16,
        0,
        1
      ]);
      var DNS_QUERY_ENDPOINT = "https://cloudflare-dns.com/dns-query";
      var DOMAIN_CHARS = [
        "i",
        // initialize
        "e",
        // events
        "d"
        // dcs
      ];
      var MAX_START_LOOKUP = 200;
      function _fetchTxtRecords(networkFunc) {
        return __awaiter2(this, void 0, void 0, function* () {
          const response = yield networkFunc(DNS_QUERY_ENDPOINT, {
            method: "POST",
            headers: {
              "Content-Type": "application/dns-message",
              Accept: "application/dns-message"
            },
            body: FEATURE_ASSETS_DNS_QUERY
          });
          if (!response.ok) {
            const err = new Error("Failed to fetch TXT records from DNS");
            err.name = "DnsTxtFetchError";
            throw err;
          }
          const data = yield response.arrayBuffer();
          const bytes = new Uint8Array(data);
          return _parseDnsResponse(bytes);
        });
      }
      exports._fetchTxtRecords = _fetchTxtRecords;
      function _parseDnsResponse(input) {
        const start = input.findIndex((byte, index) => index < MAX_START_LOOKUP && String.fromCharCode(byte) === "=" && DOMAIN_CHARS.includes(String.fromCharCode(input[index - 1])));
        if (start === -1) {
          const err = new Error("Failed to parse TXT records from DNS");
          err.name = "DnsTxtParseError";
          throw err;
        }
        let result = "";
        for (let i = start - 1; i < input.length; i++) {
          result += String.fromCharCode(input[i]);
        }
        return result.split(",");
      }
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/NetworkFallbackResolver.js
  var require_NetworkFallbackResolver = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/NetworkFallbackResolver.js"(exports) {
      "use strict";
      var __awaiter2 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports._isDomainFailure = exports.NetworkFallbackResolver = void 0;
      var DnsTxtQuery_1 = require_DnsTxtQuery();
      var Hashing_1 = require_Hashing();
      var Log_1 = require_Log();
      var StorageProvider_1 = require_StorageProvider();
      var DEFAULT_TTL_MS = 7 * 24 * 60 * 60 * 1e3;
      var COOLDOWN_TIME_MS = 4 * 60 * 60 * 1e3;
      var NetworkFallbackResolver = class {
        constructor(options) {
          var _a;
          this._fallbackInfo = null;
          this._errorBoundary = null;
          this._dnsQueryCooldowns = {};
          this._networkOverrideFunc = (_a = options.networkConfig) === null || _a === void 0 ? void 0 : _a.networkOverrideFunc;
        }
        setErrorBoundary(errorBoundary) {
          this._errorBoundary = errorBoundary;
        }
        tryBumpExpiryTime(sdkKey, urlConfig) {
          var _a;
          const info = (_a = this._fallbackInfo) === null || _a === void 0 ? void 0 : _a[urlConfig.endpoint];
          if (!info) {
            return;
          }
          info.expiryTime = Date.now() + DEFAULT_TTL_MS;
          _tryWriteFallbackInfoToCache(sdkKey, Object.assign(Object.assign({}, this._fallbackInfo), { [urlConfig.endpoint]: info }));
        }
        getActiveFallbackUrl(sdkKey, urlConfig) {
          var _a, _b;
          if (urlConfig.customUrl != null && urlConfig.fallbackUrls != null) {
            return null;
          }
          let info = this._fallbackInfo;
          if (info == null) {
            info = (_a = _readFallbackInfoFromCache(sdkKey)) !== null && _a !== void 0 ? _a : {};
            this._fallbackInfo = info;
          }
          const entry = info[urlConfig.endpoint];
          if (!entry || Date.now() > ((_b = entry.expiryTime) !== null && _b !== void 0 ? _b : 0) || urlConfig.getChecksum() !== entry.urlConfigChecksum) {
            delete info[urlConfig.endpoint];
            this._fallbackInfo = info;
            _tryWriteFallbackInfoToCache(sdkKey, this._fallbackInfo);
            return null;
          }
          if (entry.url) {
            return entry.url;
          }
          return null;
        }
        tryFetchUpdatedFallbackInfo(sdkKey, urlConfig, errorMessage, timedOut) {
          return __awaiter2(this, void 0, void 0, function* () {
            var _a, _b;
            try {
              if (!_isDomainFailure(errorMessage, timedOut)) {
                return false;
              }
              const canUseNetworkFallbacks = urlConfig.customUrl == null && urlConfig.fallbackUrls == null;
              const urls = canUseNetworkFallbacks ? yield this._tryFetchFallbackUrlsFromNetwork(urlConfig) : urlConfig.fallbackUrls;
              const newUrl = this._pickNewFallbackUrl((_a = this._fallbackInfo) === null || _a === void 0 ? void 0 : _a[urlConfig.endpoint], urls);
              if (!newUrl) {
                return false;
              }
              this._updateFallbackInfoWithNewUrl(sdkKey, urlConfig, newUrl);
              return true;
            } catch (error) {
              (_b = this._errorBoundary) === null || _b === void 0 ? void 0 : _b.logError("tryFetchUpdatedFallbackInfo", error);
              return false;
            }
          });
        }
        _updateFallbackInfoWithNewUrl(sdkKey, urlConfig, newUrl) {
          var _a, _b, _c;
          const newFallbackInfo = {
            urlConfigChecksum: urlConfig.getChecksum(),
            url: newUrl,
            expiryTime: Date.now() + DEFAULT_TTL_MS,
            previous: []
          };
          const endpoint = urlConfig.endpoint;
          const previousInfo = (_a = this._fallbackInfo) === null || _a === void 0 ? void 0 : _a[endpoint];
          if (previousInfo) {
            newFallbackInfo.previous.push(...previousInfo.previous);
          }
          if (newFallbackInfo.previous.length > 10) {
            newFallbackInfo.previous = [];
          }
          const previousUrl = (_c = (_b = this._fallbackInfo) === null || _b === void 0 ? void 0 : _b[endpoint]) === null || _c === void 0 ? void 0 : _c.url;
          if (previousUrl != null) {
            newFallbackInfo.previous.push(previousUrl);
          }
          this._fallbackInfo = Object.assign(Object.assign({}, this._fallbackInfo), { [endpoint]: newFallbackInfo });
          _tryWriteFallbackInfoToCache(sdkKey, this._fallbackInfo);
        }
        _tryFetchFallbackUrlsFromNetwork(urlConfig) {
          return __awaiter2(this, void 0, void 0, function* () {
            var _a;
            const cooldown = this._dnsQueryCooldowns[urlConfig.endpoint];
            if (cooldown && Date.now() < cooldown) {
              return null;
            }
            this._dnsQueryCooldowns[urlConfig.endpoint] = Date.now() + COOLDOWN_TIME_MS;
            const result = [];
            const records = yield (0, DnsTxtQuery_1._fetchTxtRecords)((_a = this._networkOverrideFunc) !== null && _a !== void 0 ? _a : fetch);
            const path = _extractPathFromUrl(urlConfig.defaultUrl);
            for (const record of records) {
              if (!record.startsWith(urlConfig.endpointDnsKey + "=")) {
                continue;
              }
              const parts = record.split("=");
              if (parts.length > 1) {
                let baseUrl = parts[1];
                if (baseUrl.endsWith("/")) {
                  baseUrl = baseUrl.slice(0, -1);
                }
                result.push(`https://${baseUrl}${path}`);
              }
            }
            return result;
          });
        }
        _pickNewFallbackUrl(currentFallbackInfo, urls) {
          var _a;
          if (urls == null) {
            return null;
          }
          const previouslyUsed = new Set((_a = currentFallbackInfo === null || currentFallbackInfo === void 0 ? void 0 : currentFallbackInfo.previous) !== null && _a !== void 0 ? _a : []);
          const currentFallbackUrl = currentFallbackInfo === null || currentFallbackInfo === void 0 ? void 0 : currentFallbackInfo.url;
          let found = null;
          for (const loopUrl of urls) {
            const url = loopUrl.endsWith("/") ? loopUrl.slice(0, -1) : loopUrl;
            if (!previouslyUsed.has(loopUrl) && url !== currentFallbackUrl) {
              found = url;
              break;
            }
          }
          return found;
        }
      };
      exports.NetworkFallbackResolver = NetworkFallbackResolver;
      function _isDomainFailure(errorMsg, timedOut) {
        var _a;
        const lowerErrorMsg = (_a = errorMsg === null || errorMsg === void 0 ? void 0 : errorMsg.toLowerCase()) !== null && _a !== void 0 ? _a : "";
        return timedOut || lowerErrorMsg.includes("uncaught exception") || lowerErrorMsg.includes("failed to fetch") || lowerErrorMsg.includes("networkerror when attempting to fetch resource");
      }
      exports._isDomainFailure = _isDomainFailure;
      function _getFallbackInfoStorageKey(sdkKey) {
        return `statsig.network_fallback.${(0, Hashing_1._DJB2)(sdkKey)}`;
      }
      function _tryWriteFallbackInfoToCache(sdkKey, info) {
        const hashKey = _getFallbackInfoStorageKey(sdkKey);
        if (!info || Object.keys(info).length === 0) {
          StorageProvider_1.Storage.removeItem(hashKey);
          return;
        }
        StorageProvider_1.Storage.setItem(hashKey, JSON.stringify(info));
      }
      function _readFallbackInfoFromCache(sdkKey) {
        const hashKey = _getFallbackInfoStorageKey(sdkKey);
        const data = StorageProvider_1.Storage.getItem(hashKey);
        if (!data) {
          return null;
        }
        try {
          return JSON.parse(data);
        } catch (_a) {
          Log_1.Log.error("Failed to parse FallbackInfo");
          return null;
        }
      }
      function _extractPathFromUrl(urlString) {
        try {
          const url = new URL(urlString);
          return url.pathname;
        } catch (error) {
          return null;
        }
      }
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/SDKFlags.js
  var require_SDKFlags = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/SDKFlags.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.SDKFlags = void 0;
      var FLAGMAP = {};
      exports.SDKFlags = {
        setFlags: (sdkKey, flags) => {
          FLAGMAP[sdkKey] = flags;
        },
        get: (sdkKey, flagKey) => {
          var _a, _b;
          return (_b = (_a = FLAGMAP[sdkKey]) === null || _a === void 0 ? void 0 : _a[flagKey]) !== null && _b !== void 0 ? _b : false;
        }
      };
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/SessionID.js
  var require_SessionID = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/SessionID.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.StatsigSession = exports.SessionID = void 0;
      var __StatsigGlobal_1 = require_StatsigGlobal();
      var CacheKey_1 = require_CacheKey();
      var Log_1 = require_Log();
      var StorageProvider_1 = require_StorageProvider();
      var UUID_1 = require_UUID();
      var MAX_SESSION_IDLE_TIME = 30 * 60 * 1e3;
      var MAX_SESSION_AGE = 4 * 60 * 60 * 1e3;
      var PROMISE_MAP = {};
      exports.SessionID = {
        get: (sdkKey) => {
          return exports.StatsigSession.get(sdkKey).data.sessionID;
        }
      };
      exports.StatsigSession = {
        get: (sdkKey) => {
          if (PROMISE_MAP[sdkKey] == null) {
            PROMISE_MAP[sdkKey] = _loadSession(sdkKey);
          }
          const session = PROMISE_MAP[sdkKey];
          return _bumpSession(session);
        },
        overrideInitialSessionID: (override, sdkKey) => {
          PROMISE_MAP[sdkKey] = _overrideSessionId(override, sdkKey);
        }
      };
      function _loadSession(sdkKey) {
        let data = _loadFromStorage(sdkKey);
        const now = Date.now();
        if (!data) {
          data = {
            sessionID: (0, UUID_1.getUUID)(),
            startTime: now,
            lastUpdate: now
          };
        }
        return {
          data,
          sdkKey
        };
      }
      function _overrideSessionId(override, sdkKey) {
        const now = Date.now();
        return {
          data: {
            sessionID: override,
            startTime: now,
            lastUpdate: now
          },
          sdkKey
        };
      }
      function _bumpSession(session) {
        const now = Date.now();
        const data = session.data;
        const sdkKey = session.sdkKey;
        if (_isIdle(data) || _hasRunTooLong(data)) {
          data.sessionID = (0, UUID_1.getUUID)();
          data.startTime = now;
          const client = __STATSIG__ === null || __STATSIG__ === void 0 ? void 0 : __STATSIG__.instance(sdkKey);
          if (client) {
            client.$emt({ name: "session_expired" });
          }
        }
        data.lastUpdate = now;
        _persistToStorage(data, session.sdkKey);
        clearTimeout(session.idleTimeoutID);
        clearTimeout(session.ageTimeoutID);
        const lifetime = now - data.startTime;
        session.idleTimeoutID = _createSessionTimeout(sdkKey, MAX_SESSION_IDLE_TIME);
        session.ageTimeoutID = _createSessionTimeout(sdkKey, MAX_SESSION_AGE - lifetime);
        return session;
      }
      function _createSessionTimeout(sdkKey, duration) {
        return setTimeout(() => {
          var _a;
          const client = (_a = (0, __StatsigGlobal_1._getStatsigGlobal)()) === null || _a === void 0 ? void 0 : _a.instance(sdkKey);
          if (client) {
            client.$emt({ name: "session_expired" });
          }
        }, duration);
      }
      function _isIdle({ lastUpdate }) {
        return Date.now() - lastUpdate > MAX_SESSION_IDLE_TIME;
      }
      function _hasRunTooLong({ startTime }) {
        return Date.now() - startTime > MAX_SESSION_AGE;
      }
      function _getSessionIDStorageKey(sdkKey) {
        return `statsig.session_id.${(0, CacheKey_1._getStorageKey)(sdkKey)}`;
      }
      function _persistToStorage(session, sdkKey) {
        const storageKey = _getSessionIDStorageKey(sdkKey);
        try {
          (0, StorageProvider_1._setObjectInStorage)(storageKey, session);
        } catch (e) {
          Log_1.Log.warn("Failed to save SessionID");
        }
      }
      function _loadFromStorage(sdkKey) {
        const storageKey = _getSessionIDStorageKey(sdkKey);
        return (0, StorageProvider_1._getObjectFromStorage)(storageKey);
      }
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/StatsigClientEventEmitter.js
  var require_StatsigClientEventEmitter = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/StatsigClientEventEmitter.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ErrorTag = void 0;
      exports.ErrorTag = {
        NetworkError: "NetworkError"
      };
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/NetworkCore.js
  var require_NetworkCore = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/NetworkCore.js"(exports) {
      "use strict";
      var __awaiter2 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.NetworkCore = void 0;
      require_StatsigGlobal();
      var __StatsigGlobal_1 = require_StatsigGlobal();
      var Diagnostics_1 = require_Diagnostics();
      var Log_1 = require_Log();
      var NetworkConfig_1 = require_NetworkConfig();
      var NetworkFallbackResolver_1 = require_NetworkFallbackResolver();
      var SDKFlags_1 = require_SDKFlags();
      var SDKType_1 = require_SDKType();
      var SafeJs_1 = require_SafeJs();
      var SessionID_1 = require_SessionID();
      var StableID_1 = require_StableID();
      var StatsigClientEventEmitter_1 = require_StatsigClientEventEmitter();
      var StatsigMetadata_1 = require_StatsigMetadata();
      var StatsigOptionsCommon_1 = require_StatsigOptionsCommon();
      var VisibilityObserving_1 = require_VisibilityObserving();
      var DEFAULT_TIMEOUT_MS = 1e4;
      var BACKOFF_BASE_MS = 500;
      var BACKOFF_MAX_MS = 3e4;
      var RATE_LIMIT_WINDOW_MS = 1e3;
      var RATE_LIMIT_MAX_REQ_COUNT = 50;
      var LEAK_RATE = RATE_LIMIT_MAX_REQ_COUNT / RATE_LIMIT_WINDOW_MS;
      var RETRYABLE_CODES = /* @__PURE__ */ new Set([408, 500, 502, 503, 504, 522, 524, 599]);
      var NetworkCore = class {
        constructor(options, _emitter) {
          this._emitter = _emitter;
          this._errorBoundary = null;
          this._timeout = DEFAULT_TIMEOUT_MS;
          this._netConfig = {};
          this._options = {};
          this._leakyBucket = {};
          this._lastUsedInitUrl = null;
          if (options) {
            this._options = options;
          }
          if (this._options.networkConfig) {
            this._netConfig = this._options.networkConfig;
          }
          if (this._netConfig.networkTimeoutMs) {
            this._timeout = this._netConfig.networkTimeoutMs;
          }
          this._fallbackResolver = new NetworkFallbackResolver_1.NetworkFallbackResolver(this._options);
          this.setLogEventCompressionMode(this._getLogEventCompressionMode(options));
        }
        setLogEventCompressionMode(mode) {
          this._options.logEventCompressionMode = mode;
        }
        setErrorBoundary(errorBoundary) {
          this._errorBoundary = errorBoundary;
          this._errorBoundary.wrap(this);
          this._errorBoundary.wrap(this._fallbackResolver);
          this._fallbackResolver.setErrorBoundary(errorBoundary);
        }
        isBeaconSupported() {
          return typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function";
        }
        getLastUsedInitUrlAndReset() {
          const tempUrl = this._lastUsedInitUrl;
          this._lastUsedInitUrl = null;
          return tempUrl;
        }
        beacon(args) {
          if (!_ensureValidSdkKey(args)) {
            return false;
          }
          const argsInternal = this._getInternalRequestArgs("POST", args);
          const url = this._getPopulatedURL(argsInternal);
          const nav = navigator;
          return nav.sendBeacon.bind(nav)(url, argsInternal.body);
        }
        post(args) {
          return __awaiter2(this, void 0, void 0, function* () {
            const argsInternal = this._getInternalRequestArgs("POST", args);
            this._tryEncodeBody(argsInternal);
            yield this._tryToCompressBody(argsInternal);
            return this._sendRequest(argsInternal);
          });
        }
        get(args) {
          const argsInternal = this._getInternalRequestArgs("GET", args);
          return this._sendRequest(argsInternal);
        }
        _sendRequest(args) {
          return __awaiter2(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            if (!_ensureValidSdkKey(args)) {
              return null;
            }
            if (this._netConfig.preventAllNetworkTraffic) {
              return null;
            }
            const { method, body, retries, attempt } = args;
            const endpoint = args.urlConfig.endpoint;
            if (this._isRateLimited(endpoint)) {
              Log_1.Log.warn(`Request to ${endpoint} was blocked because you are making requests too frequently.`);
              return null;
            }
            const currentAttempt = attempt !== null && attempt !== void 0 ? attempt : 1;
            const abortController = typeof AbortController !== "undefined" ? new AbortController() : null;
            const timeoutHandle = setTimeout(() => {
              abortController === null || abortController === void 0 ? void 0 : abortController.abort(`Timeout of ${this._timeout}ms expired.`);
            }, this._timeout);
            const populatedUrl = this._getPopulatedURL(args);
            let response = null;
            const keepalive = (0, VisibilityObserving_1._isUnloading)();
            try {
              const config = {
                method,
                body,
                headers: Object.assign({}, args.headers),
                signal: abortController === null || abortController === void 0 ? void 0 : abortController.signal,
                priority: args.priority,
                keepalive
              };
              _tryMarkInitStart(args, currentAttempt);
              const bucket = this._leakyBucket[endpoint];
              if (bucket) {
                bucket.lastRequestTime = Date.now();
                this._leakyBucket[endpoint] = bucket;
              }
              const func = (_a = this._netConfig.networkOverrideFunc) !== null && _a !== void 0 ? _a : fetch;
              response = yield func(populatedUrl, config);
              clearTimeout(timeoutHandle);
              if (!response.ok) {
                const text2 = yield response.text().catch(() => "No Text");
                const err = new Error(`NetworkError: ${populatedUrl} ${text2}`);
                err.name = "NetworkError";
                throw err;
              }
              const text = yield response.text();
              _tryMarkInitEnd(args, response, currentAttempt, text);
              this._fallbackResolver.tryBumpExpiryTime(args.sdkKey, args.urlConfig);
              return {
                body: text,
                code: response.status
              };
            } catch (error) {
              const errorMessage = _getErrorMessage(abortController, error);
              const timedOut = _didTimeout(abortController);
              _tryMarkInitEnd(args, response, currentAttempt, "", error);
              const fallbackUpdated = yield this._fallbackResolver.tryFetchUpdatedFallbackInfo(args.sdkKey, args.urlConfig, errorMessage, timedOut);
              if (fallbackUpdated) {
                args.fallbackUrl = this._fallbackResolver.getActiveFallbackUrl(args.sdkKey, args.urlConfig);
              }
              if (!retries || currentAttempt > retries || !RETRYABLE_CODES.has((_b = response === null || response === void 0 ? void 0 : response.status) !== null && _b !== void 0 ? _b : 500)) {
                (_c = this._emitter) === null || _c === void 0 ? void 0 : _c.call(this, {
                  name: "error",
                  error,
                  tag: StatsigClientEventEmitter_1.ErrorTag.NetworkError,
                  requestArgs: args
                });
                const formattedErrorMsg = `A networking error occurred during ${method} request to ${populatedUrl}.`;
                Log_1.Log.error(formattedErrorMsg, errorMessage, error);
                (_d = this._errorBoundary) === null || _d === void 0 ? void 0 : _d.attachErrorIfNoneExists(formattedErrorMsg);
                return null;
              }
              yield _exponentialBackoff(currentAttempt);
              return this._sendRequest(Object.assign(Object.assign({}, args), { retries, attempt: currentAttempt + 1 }));
            }
          });
        }
        _getLogEventCompressionMode(options) {
          let compressionMode = options === null || options === void 0 ? void 0 : options.logEventCompressionMode;
          if (!compressionMode && (options === null || options === void 0 ? void 0 : options.disableCompression) === true) {
            compressionMode = StatsigOptionsCommon_1.LogEventCompressionMode.Disabled;
          }
          if (!compressionMode) {
            compressionMode = StatsigOptionsCommon_1.LogEventCompressionMode.Enabled;
          }
          return compressionMode;
        }
        _isRateLimited(endpoint) {
          var _a;
          const now = Date.now();
          const bucket = (_a = this._leakyBucket[endpoint]) !== null && _a !== void 0 ? _a : {
            count: 0,
            lastRequestTime: now
          };
          const elapsed = now - bucket.lastRequestTime;
          const leakedRequests = Math.floor(elapsed * LEAK_RATE);
          bucket.count = Math.max(0, bucket.count - leakedRequests);
          if (bucket.count >= RATE_LIMIT_MAX_REQ_COUNT) {
            return true;
          }
          bucket.count += 1;
          bucket.lastRequestTime = now;
          this._leakyBucket[endpoint] = bucket;
          return false;
        }
        _getPopulatedURL(args) {
          var _a;
          const url = (_a = args.fallbackUrl) !== null && _a !== void 0 ? _a : args.urlConfig.getUrl();
          if (args.urlConfig.endpoint === NetworkConfig_1.Endpoint._initialize || args.urlConfig.endpoint === NetworkConfig_1.Endpoint._download_config_specs) {
            this._lastUsedInitUrl = url;
          }
          const params = Object.assign({ [NetworkConfig_1.NetworkParam.SdkKey]: args.sdkKey, [NetworkConfig_1.NetworkParam.SdkType]: SDKType_1.SDKType._get(args.sdkKey), [NetworkConfig_1.NetworkParam.SdkVersion]: StatsigMetadata_1.SDK_VERSION, [NetworkConfig_1.NetworkParam.Time]: String(Date.now()), [NetworkConfig_1.NetworkParam.SessionID]: SessionID_1.SessionID.get(args.sdkKey) }, args.params);
          const query = Object.keys(params).map((key) => {
            return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
          }).join("&");
          return `${url}${query ? `?${query}` : ""}`;
        }
        _tryEncodeBody(args) {
          var _a;
          const win = (0, SafeJs_1._getWindowSafe)();
          const body = args.body;
          if (!args.isStatsigEncodable || this._options.disableStatsigEncoding || typeof body !== "string" || (0, __StatsigGlobal_1._getStatsigGlobalFlag)("no-encode") != null || !(win === null || win === void 0 ? void 0 : win.btoa)) {
            return;
          }
          try {
            args.body = win.btoa(body).split("").reverse().join("");
            args.params = Object.assign(Object.assign({}, (_a = args.params) !== null && _a !== void 0 ? _a : {}), { [NetworkConfig_1.NetworkParam.StatsigEncoded]: "1" });
          } catch (e) {
            Log_1.Log.warn(`Request encoding failed for ${args.urlConfig.getUrl()}`, e);
          }
        }
        _tryToCompressBody(args) {
          return __awaiter2(this, void 0, void 0, function* () {
            var _a;
            const body = args.body;
            if (typeof body !== "string" || !_allowCompression(args, this._options)) {
              return;
            }
            try {
              const bytes = new TextEncoder().encode(body);
              const stream = new CompressionStream("gzip");
              const writer = stream.writable.getWriter();
              writer.write(bytes).catch(Log_1.Log.error);
              writer.close().catch(Log_1.Log.error);
              const reader = stream.readable.getReader();
              const chunks = [];
              let result;
              while (!(result = yield reader.read()).done) {
                chunks.push(result.value);
              }
              const totalLength = chunks.reduce((acc, chunk) => acc + chunk.length, 0);
              const combined = new Uint8Array(totalLength);
              let offset = 0;
              for (const chunk of chunks) {
                combined.set(chunk, offset);
                offset += chunk.length;
              }
              args.body = combined;
              args.params = Object.assign(Object.assign({}, (_a = args.params) !== null && _a !== void 0 ? _a : {}), { [NetworkConfig_1.NetworkParam.IsGzipped]: "1" });
            } catch (e) {
              Log_1.Log.warn(`Request compression failed for ${args.urlConfig.getUrl()}`, e);
            }
          });
        }
        _getInternalRequestArgs(method, args) {
          const fallbackUrl = this._fallbackResolver.getActiveFallbackUrl(args.sdkKey, args.urlConfig);
          const result = Object.assign(Object.assign({}, args), {
            method,
            fallbackUrl
          });
          if ("data" in args) {
            _populateRequestBody(result, args.data);
          }
          return result;
        }
      };
      exports.NetworkCore = NetworkCore;
      var _ensureValidSdkKey = (args) => {
        if (!args.sdkKey) {
          Log_1.Log.warn("Unable to make request without an SDK key");
          return false;
        }
        return true;
      };
      var _populateRequestBody = (args, data) => {
        const { sdkKey, fallbackUrl } = args;
        const stableID = StableID_1.StableID.get(sdkKey);
        const sessionID = SessionID_1.SessionID.get(sdkKey);
        const sdkType = SDKType_1.SDKType._get(sdkKey);
        args.body = JSON.stringify(Object.assign(Object.assign({}, data), { statsigMetadata: Object.assign(Object.assign({}, StatsigMetadata_1.StatsigMetadataProvider.get()), {
          stableID,
          sessionID,
          sdkType,
          fallbackUrl
        }) }));
      };
      function _allowCompression(args, options) {
        if (!args.isCompressable) {
          return false;
        }
        if ((0, __StatsigGlobal_1._getStatsigGlobalFlag)("no-compress") != null || typeof CompressionStream === "undefined" || typeof TextEncoder === "undefined") {
          return false;
        }
        const isProxy = args.urlConfig.customUrl != null || args.urlConfig.fallbackUrls != null;
        const flagEnabled = SDKFlags_1.SDKFlags.get(args.sdkKey, "enable_log_event_compression") === true;
        switch (options.logEventCompressionMode) {
          case StatsigOptionsCommon_1.LogEventCompressionMode.Disabled:
            return false;
          case StatsigOptionsCommon_1.LogEventCompressionMode.Enabled:
            if (isProxy && !flagEnabled) {
              return false;
            }
            return true;
          case StatsigOptionsCommon_1.LogEventCompressionMode.Forced:
            return true;
          default:
            return false;
        }
      }
      function _getErrorMessage(controller, error) {
        if ((controller === null || controller === void 0 ? void 0 : controller.signal.aborted) && typeof controller.signal.reason === "string") {
          return controller.signal.reason;
        }
        if (typeof error === "string") {
          return error;
        }
        if (error instanceof Error) {
          return `${error.name}: ${error.message}`;
        }
        return "Unknown Error";
      }
      function _didTimeout(controller) {
        const timeout = (controller === null || controller === void 0 ? void 0 : controller.signal.aborted) && typeof controller.signal.reason === "string" && controller.signal.reason.includes("Timeout");
        return timeout || false;
      }
      function _tryMarkInitStart(args, attempt) {
        if (args.urlConfig.endpoint !== NetworkConfig_1.Endpoint._initialize) {
          return;
        }
        Diagnostics_1.Diagnostics._markInitNetworkReqStart(args.sdkKey, {
          attempt
        });
      }
      function _tryMarkInitEnd(args, response, attempt, body, err) {
        if (args.urlConfig.endpoint !== NetworkConfig_1.Endpoint._initialize) {
          return;
        }
        Diagnostics_1.Diagnostics._markInitNetworkReqEnd(args.sdkKey, Diagnostics_1.Diagnostics._getDiagnosticsData(response, attempt, body, err));
      }
      function _exponentialBackoff(attempt) {
        return __awaiter2(this, void 0, void 0, function* () {
          yield new Promise((r) => setTimeout(r, Math.min(BACKOFF_BASE_MS * (attempt * attempt), BACKOFF_MAX_MS)));
        });
      }
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/OverrideAdapter.js
  var require_OverrideAdapter = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/OverrideAdapter.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/ParamStoreTypes.js
  var require_ParamStoreTypes = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/ParamStoreTypes.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/StatsigClientBase.js
  var require_StatsigClientBase = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/StatsigClientBase.js"(exports) {
      "use strict";
      var __awaiter2 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.StatsigClientBase = void 0;
      require_StatsigGlobal();
      var __StatsigGlobal_1 = require_StatsigGlobal();
      var ErrorBoundary_1 = require_ErrorBoundary();
      var EventLogger_1 = require_EventLogger();
      var Log_1 = require_Log();
      var MemoKey_1 = require_MemoKey();
      var SafeJs_1 = require_SafeJs();
      var SessionID_1 = require_SessionID();
      var StableID_1 = require_StableID();
      var StatsigOptionsCommon_1 = require_StatsigOptionsCommon();
      var StorageProvider_1 = require_StorageProvider();
      var MAX_MEMO_CACHE_SIZE = 3e3;
      var StatsigClientBase = class {
        constructor(sdkKey, adapter, network, options) {
          var _a, _b, _c, _d;
          this.loadingStatus = "Uninitialized";
          this._initializePromise = null;
          this._listeners = {};
          const emitter = this.$emt.bind(this);
          (options === null || options === void 0 ? void 0 : options.logLevel) != null && (Log_1.Log.level = options.logLevel);
          (options === null || options === void 0 ? void 0 : options.disableStorage) && StorageProvider_1.Storage._setDisabled(true);
          (options === null || options === void 0 ? void 0 : options.initialSessionID) && SessionID_1.StatsigSession.overrideInitialSessionID(options.initialSessionID, sdkKey);
          (options === null || options === void 0 ? void 0 : options.storageProvider) && StorageProvider_1.Storage._setProvider(options.storageProvider);
          (options === null || options === void 0 ? void 0 : options.enableCookies) && StableID_1.StableID._setCookiesEnabled(sdkKey, options.enableCookies);
          (options === null || options === void 0 ? void 0 : options.disableStableID) && StableID_1.StableID._setDisabled(sdkKey, true);
          this._sdkKey = sdkKey;
          this._options = options !== null && options !== void 0 ? options : {};
          this._memoCache = {};
          this.overrideAdapter = (_a = options === null || options === void 0 ? void 0 : options.overrideAdapter) !== null && _a !== void 0 ? _a : null;
          this._logger = new EventLogger_1.EventLogger(sdkKey, emitter, network, options);
          this._errorBoundary = new ErrorBoundary_1.ErrorBoundary(sdkKey, options, emitter);
          this._errorBoundary.wrap(this);
          this._errorBoundary.wrap(adapter);
          this._errorBoundary.wrap(this._logger);
          network.setErrorBoundary(this._errorBoundary);
          this.dataAdapter = adapter;
          this.dataAdapter.attach(sdkKey, options, network);
          this.storageProvider = StorageProvider_1.Storage;
          (_d = (_c = (_b = this.overrideAdapter) === null || _b === void 0 ? void 0 : _b.loadFromStorage) === null || _c === void 0 ? void 0 : _c.call(_b)) === null || _d === void 0 ? void 0 : _d.catch((e) => this._errorBoundary.logError("OA::loadFromStorage", e));
          this._primeReadyRipcord();
          _assignGlobalInstance(sdkKey, this);
        }
        /**
         * Updates runtime configuration options for the SDK, allowing toggling of certain behaviors such as logging and storage to comply with user preferences or regulations such as GDPR.
         *
         * @param {StatsigRuntimeMutableOptions} options - The configuration options that dictate the runtime behavior of the SDK.
         */
        updateRuntimeOptions(options) {
          if (options.loggingEnabled) {
            this._options.loggingEnabled = options.loggingEnabled;
            this._logger.setLoggingEnabled(options.loggingEnabled);
          } else if (options.disableLogging != null) {
            this._options.disableLogging = options.disableLogging;
            this._logger.setLoggingEnabled(options.disableLogging ? "disabled" : "browser-only");
          }
          if (options.disableStorage != null) {
            this._options.disableStorage = options.disableStorage;
            StorageProvider_1.Storage._setDisabled(options.disableStorage);
          }
          if (options.enableCookies != null) {
            this._options.enableCookies = options.enableCookies;
            StableID_1.StableID._setCookiesEnabled(this._sdkKey, options.enableCookies);
          }
          if (options.logEventCompressionMode) {
            this._logger.setLogEventCompressionMode(options.logEventCompressionMode);
          } else if (options.disableCompression) {
            this._logger.setLogEventCompressionMode(StatsigOptionsCommon_1.LogEventCompressionMode.Disabled);
          }
        }
        /**
         * Flushes any currently queued events.
         */
        flush() {
          return this._logger.flush();
        }
        /**
         * Gracefully shuts down the SDK, ensuring that all pending events are send before the SDK stops.
         * This function emits a 'pre_shutdown' event and then waits for the logger to complete its shutdown process.
         *
         * @returns {Promise<void>} A promise that resolves when all shutdown procedures, including logging shutdown, have been completed.
         */
        shutdown() {
          return __awaiter2(this, void 0, void 0, function* () {
            this.$emt({ name: "pre_shutdown" });
            this._setStatus("Uninitialized", null);
            this._initializePromise = null;
            yield this._logger.stop();
          });
        }
        /**
         * Subscribes a callback function to a specific {@link StatsigClientEvent} or all StatsigClientEvents if the wildcard '*' is used.
         * Once subscribed, the listener callback will be invoked whenever the specified event is emitted.
         *
         * @param {StatsigClientEventName} event - The name of the event to subscribe to, or '*' to subscribe to all events.
         * @param {StatsigClientEventCallback<T>} listener - The callback function to execute when the event occurs. The function receives event-specific data as its parameter.
         * @see {@link off} for unsubscribing from events.
         */
        on(event, listener) {
          if (!this._listeners[event]) {
            this._listeners[event] = [];
          }
          this._listeners[event].push(listener);
        }
        /**
         * Unsubscribes a previously registered callback function from a specific {@link StatsigClientEvent} or all StatsigClientEvents if the wildcard '*' is used.
         *
         * @param {StatsigClientEventName} event - The name of the event from which to unsubscribe, or '*' to unsubscribe from all events.
         * @param {StatsigClientEventCallback<T>} listener - The callback function to remove from the event's notification list.
         * @see {@link on} for subscribing to events.
         */
        off(event, listener) {
          if (this._listeners[event]) {
            const index = this._listeners[event].indexOf(listener);
            if (index !== -1) {
              this._listeners[event].splice(index, 1);
            }
          }
        }
        $on(event, listener) {
          listener.__isInternal = true;
          this.on(event, listener);
        }
        $emt(event) {
          var _a;
          const barrier = (listener) => {
            try {
              listener(event);
            } catch (error) {
              if (listener.__isInternal === true) {
                this._errorBoundary.logError(`__emit:${event.name}`, error);
                return;
              }
              Log_1.Log.error(`An error occurred in a StatsigClientEvent listener. This is not an issue with Statsig.`, event);
            }
          };
          if (this._listeners[event.name]) {
            this._listeners[event.name].forEach((l) => barrier(l));
          }
          (_a = this._listeners["*"]) === null || _a === void 0 ? void 0 : _a.forEach(barrier);
        }
        _setStatus(newStatus, values) {
          this.loadingStatus = newStatus;
          this._memoCache = {};
          this.$emt({ name: "values_updated", status: newStatus, values });
        }
        _enqueueExposure(name, exposure, options) {
          if ((options === null || options === void 0 ? void 0 : options.disableExposureLog) === true) {
            this._logger.incrementNonExposureCount(name);
            return;
          }
          this._logger.enqueue(exposure);
        }
        _memoize(prefix, fn) {
          return (name, options) => {
            if (this._options.disableEvaluationMemoization) {
              return fn(name, options);
            }
            const memoKey = (0, MemoKey_1.createMemoKey)(prefix, name, options);
            if (!memoKey) {
              return fn(name, options);
            }
            if (!(memoKey in this._memoCache)) {
              if (Object.keys(this._memoCache).length >= MAX_MEMO_CACHE_SIZE) {
                this._memoCache = {};
              }
              this._memoCache[memoKey] = fn(name, options);
            }
            return this._memoCache[memoKey];
          };
        }
      };
      exports.StatsigClientBase = StatsigClientBase;
      function _assignGlobalInstance(sdkKey, client) {
        var _a;
        if ((0, SafeJs_1._isServerEnv)()) {
          return;
        }
        const statsigGlobal = (0, __StatsigGlobal_1._getStatsigGlobal)();
        const instances = (_a = statsigGlobal.instances) !== null && _a !== void 0 ? _a : {};
        const inst = client;
        if (instances[sdkKey] != null) {
          Log_1.Log.warn("Creating multiple Statsig clients with the same SDK key can lead to unexpected behavior. Multi-instance support requires different SDK keys.");
        }
        instances[sdkKey] = inst;
        if (!statsigGlobal.firstInstance) {
          statsigGlobal.firstInstance = inst;
        }
        statsigGlobal.instances = instances;
        __STATSIG__ = statsigGlobal;
      }
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/StatsigDataAdapter.js
  var require_StatsigDataAdapter = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/StatsigDataAdapter.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DataAdapterCachePrefix = void 0;
      exports.DataAdapterCachePrefix = "statsig.cached";
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/StatsigPlugin.js
  var require_StatsigPlugin = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/StatsigPlugin.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/StatsigTypeFactories.js
  var require_StatsigTypeFactories = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/StatsigTypeFactories.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports._makeTypedGet = exports._mergeOverride = exports._makeLayer = exports._makeExperiment = exports._makeDynamicConfig = exports._makeFeatureGate = void 0;
      var Log_1 = require_Log();
      var TypingUtils_1 = require_TypingUtils();
      function _makeEvaluation(name, details, evaluation, value) {
        var _a;
        return {
          name,
          details,
          ruleID: (_a = evaluation === null || evaluation === void 0 ? void 0 : evaluation.rule_id) !== null && _a !== void 0 ? _a : "",
          __evaluation: evaluation,
          value
        };
      }
      function _makeFeatureGate(name, details, evaluation) {
        var _a;
        return Object.assign(Object.assign({}, _makeEvaluation(name, details, evaluation, (evaluation === null || evaluation === void 0 ? void 0 : evaluation.value) === true)), { idType: (_a = evaluation === null || evaluation === void 0 ? void 0 : evaluation.id_type) !== null && _a !== void 0 ? _a : null });
      }
      exports._makeFeatureGate = _makeFeatureGate;
      function _makeDynamicConfig(name, details, evaluation) {
        var _a;
        const value = (_a = evaluation === null || evaluation === void 0 ? void 0 : evaluation.value) !== null && _a !== void 0 ? _a : {};
        return Object.assign(Object.assign({}, _makeEvaluation(name, details, evaluation, value)), { get: _makeTypedGet(name, evaluation === null || evaluation === void 0 ? void 0 : evaluation.value) });
      }
      exports._makeDynamicConfig = _makeDynamicConfig;
      function _makeExperiment(name, details, evaluation) {
        var _a;
        const result = _makeDynamicConfig(name, details, evaluation);
        return Object.assign(Object.assign({}, result), { groupName: (_a = evaluation === null || evaluation === void 0 ? void 0 : evaluation.group_name) !== null && _a !== void 0 ? _a : null });
      }
      exports._makeExperiment = _makeExperiment;
      function _makeLayer(name, details, evaluation, exposeFunc) {
        var _a, _b;
        return Object.assign(Object.assign({}, _makeEvaluation(name, details, evaluation, void 0)), { get: _makeTypedGet(name, evaluation === null || evaluation === void 0 ? void 0 : evaluation.value, exposeFunc), groupName: (_a = evaluation === null || evaluation === void 0 ? void 0 : evaluation.group_name) !== null && _a !== void 0 ? _a : null, __value: (_b = evaluation === null || evaluation === void 0 ? void 0 : evaluation.value) !== null && _b !== void 0 ? _b : {} });
      }
      exports._makeLayer = _makeLayer;
      function _mergeOverride(original, overridden, value, exposeFunc) {
        return Object.assign(Object.assign(Object.assign({}, original), overridden), { get: _makeTypedGet(original.name, value, exposeFunc) });
      }
      exports._mergeOverride = _mergeOverride;
      function _makeTypedGet(name, value, exposeFunc) {
        return (param, fallback) => {
          var _a;
          const found = (_a = value === null || value === void 0 ? void 0 : value[param]) !== null && _a !== void 0 ? _a : null;
          if (found == null) {
            return fallback !== null && fallback !== void 0 ? fallback : null;
          }
          if (fallback != null && !(0, TypingUtils_1._isTypeMatch)(found, fallback)) {
            Log_1.Log.warn(`Parameter type mismatch. '${name}.${param}' was found to be type '${typeof found}' but fallback/return type is '${typeof fallback}'. See https://docs.statsig.com/client/javascript-sdk/#typed-getters`);
            return fallback !== null && fallback !== void 0 ? fallback : null;
          }
          exposeFunc === null || exposeFunc === void 0 ? void 0 : exposeFunc(param);
          return found;
        };
      }
      exports._makeTypedGet = _makeTypedGet;
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/StatsigTypes.js
  var require_StatsigTypes = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/StatsigTypes.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/StatsigUpdateDetails.js
  var require_StatsigUpdateDetails = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/StatsigUpdateDetails.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.UPDATE_DETAIL_ERROR_MESSAGES = exports.createUpdateDetails = void 0;
      var createUpdateDetails = (success, source, initDuration, error, sourceUrl, warnings) => {
        return {
          duration: initDuration,
          source,
          success,
          error,
          sourceUrl,
          warnings
        };
      };
      exports.createUpdateDetails = createUpdateDetails;
      exports.UPDATE_DETAIL_ERROR_MESSAGES = {
        NO_NETWORK_DATA: "No data was returned from the network. This may be due to a network timeout if a timeout value was specified in the options or ad blocker error."
      };
    }
  });

  // node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/index.js
  var require_src = __commonJS({
    "node_modules/@statsig/js-client/node_modules/@statsig/client-core/src/index.js"(exports) {
      "use strict";
      var __createBinding2 = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      }) : (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      }));
      var __exportStar2 = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding2(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Storage = exports.Log = exports.EventLogger = exports.Diagnostics = void 0;
      require_StatsigGlobal();
      var __StatsigGlobal_1 = require_StatsigGlobal();
      var Diagnostics_1 = require_Diagnostics();
      Object.defineProperty(exports, "Diagnostics", { enumerable: true, get: function() {
        return Diagnostics_1.Diagnostics;
      } });
      var EventLogger_1 = require_EventLogger();
      Object.defineProperty(exports, "EventLogger", { enumerable: true, get: function() {
        return EventLogger_1.EventLogger;
      } });
      var Log_1 = require_Log();
      Object.defineProperty(exports, "Log", { enumerable: true, get: function() {
        return Log_1.Log;
      } });
      var StatsigMetadata_1 = require_StatsigMetadata();
      var StorageProvider_1 = require_StorageProvider();
      Object.defineProperty(exports, "Storage", { enumerable: true, get: function() {
        return StorageProvider_1.Storage;
      } });
      __exportStar2(require_StatsigGlobal(), exports);
      __exportStar2(require_CacheKey(), exports);
      __exportStar2(require_ClientInterfaces(), exports);
      __exportStar2(require_DataAdapterCore(), exports);
      __exportStar2(require_Diagnostics(), exports);
      __exportStar2(require_DownloadConfigSpecsResponse(), exports);
      __exportStar2(require_ErrorBoundary(), exports);
      __exportStar2(require_EvaluationOptions(), exports);
      __exportStar2(require_EvaluationTypes(), exports);
      __exportStar2(require_Hashing(), exports);
      __exportStar2(require_InitializeResponse(), exports);
      __exportStar2(require_Log(), exports);
      __exportStar2(require_MemoKey(), exports);
      __exportStar2(require_NetworkConfig(), exports);
      __exportStar2(require_NetworkCore(), exports);
      __exportStar2(require_OverrideAdapter(), exports);
      __exportStar2(require_ParamStoreTypes(), exports);
      __exportStar2(require_SafeJs(), exports);
      __exportStar2(require_SDKType(), exports);
      __exportStar2(require_SessionID(), exports);
      __exportStar2(require_StableID(), exports);
      __exportStar2(require_StatsigClientBase(), exports);
      __exportStar2(require_StatsigClientEventEmitter(), exports);
      __exportStar2(require_StatsigDataAdapter(), exports);
      __exportStar2(require_StatsigEvent(), exports);
      __exportStar2(require_StatsigMetadata(), exports);
      __exportStar2(require_StatsigOptionsCommon(), exports);
      __exportStar2(require_StatsigPlugin(), exports);
      __exportStar2(require_StatsigTypeFactories(), exports);
      __exportStar2(require_StatsigTypes(), exports);
      __exportStar2(require_StatsigUser(), exports);
      __exportStar2(require_StorageProvider(), exports);
      __exportStar2(require_TypedJsonParse(), exports);
      __exportStar2(require_TypingUtils(), exports);
      __exportStar2(require_UrlConfiguration(), exports);
      __exportStar2(require_UUID(), exports);
      __exportStar2(require_VisibilityObserving(), exports);
      __exportStar2(require_StatsigUpdateDetails(), exports);
      __exportStar2(require_SDKFlags(), exports);
      Object.assign((0, __StatsigGlobal_1._getStatsigGlobal)(), { Log: Log_1.Log, SDK_VERSION: StatsigMetadata_1.SDK_VERSION });
    }
  });

  // node_modules/@statsig/js-client/src/EvaluationStore.js
  var require_EvaluationStore = __commonJS({
    "node_modules/@statsig/js-client/src/EvaluationStore.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var client_core_1 = require_src();
      var EvaluationStore = class {
        constructor(_sdkKey) {
          this._sdkKey = _sdkKey;
          this._rawValues = null;
          this._values = null;
          this._source = "Uninitialized";
          this._lcut = 0;
          this._receivedAt = 0;
          this._bootstrapMetadata = null;
          this._warnings = /* @__PURE__ */ new Set();
        }
        reset() {
          this._values = null;
          this._rawValues = null;
          this._source = "Loading";
          this._lcut = 0;
          this._receivedAt = 0;
          this._bootstrapMetadata = null;
        }
        finalize() {
          if (this._values) {
            return;
          }
          this._source = "NoValues";
        }
        getValues() {
          return this._rawValues ? (0, client_core_1._typedJsonParse)(this._rawValues, "has_updates", "EvaluationStoreValues") : null;
        }
        setValues(result, user) {
          var _a;
          if (!result) {
            return false;
          }
          const values = (0, client_core_1._typedJsonParse)(result.data, "has_updates", "EvaluationResponse");
          if (values == null) {
            return false;
          }
          this._source = result.source;
          if ((values === null || values === void 0 ? void 0 : values.has_updates) !== true) {
            return true;
          }
          this._rawValues = result.data;
          this._lcut = values.time;
          this._receivedAt = result.receivedAt;
          this._values = values;
          this._bootstrapMetadata = this._extractBootstrapMetadata(result.source, values);
          if (result.source && values.user) {
            this._setWarningState(user, values);
          }
          client_core_1.SDKFlags.setFlags(this._sdkKey, (_a = values.sdk_flags) !== null && _a !== void 0 ? _a : {});
          return true;
        }
        getWarnings() {
          if (this._warnings.size === 0) {
            return void 0;
          }
          return Array.from(this._warnings);
        }
        getGate(name) {
          var _a;
          return this._getDetailedStoreResult((_a = this._values) === null || _a === void 0 ? void 0 : _a.feature_gates, name);
        }
        getConfig(name) {
          var _a;
          return this._getDetailedStoreResult((_a = this._values) === null || _a === void 0 ? void 0 : _a.dynamic_configs, name);
        }
        getLayer(name) {
          var _a;
          return this._getDetailedStoreResult((_a = this._values) === null || _a === void 0 ? void 0 : _a.layer_configs, name);
        }
        getParamStore(name) {
          var _a;
          return this._getDetailedStoreResult((_a = this._values) === null || _a === void 0 ? void 0 : _a.param_stores, name);
        }
        getSource() {
          return this._source;
        }
        getExposureMapping() {
          var _a;
          return (_a = this._values) === null || _a === void 0 ? void 0 : _a.exposures;
        }
        _extractBootstrapMetadata(source, values) {
          if (source !== "Bootstrap") {
            return null;
          }
          const bootstrapMetadata = {};
          if (values.user) {
            bootstrapMetadata.user = values.user;
          }
          if (values.sdkInfo) {
            bootstrapMetadata.generatorSDKInfo = values.sdkInfo;
          }
          bootstrapMetadata.lcut = values.time;
          return bootstrapMetadata;
        }
        _getDetailedStoreResult(lookup, name) {
          let result = null;
          if (lookup) {
            result = lookup[name] ? lookup[name] : lookup[(0, client_core_1._DJB2)(name)];
          }
          return {
            result,
            details: this._getDetails(result == null)
          };
        }
        _setWarningState(user, values) {
          var _a, _b;
          const stableID = client_core_1.StableID.get(this._sdkKey);
          if (((_a = user.customIDs) === null || _a === void 0 ? void 0 : _a.stableID) !== stableID && // don't throw if they're both undefined
          (((_b = user.customIDs) === null || _b === void 0 ? void 0 : _b.stableID) || stableID)) {
            this._warnings.add("StableIDMismatch");
            return;
          }
          if ("user" in values) {
            const bootstrapUser = values["user"];
            if ((0, client_core_1._getFullUserHash)(user) !== (0, client_core_1._getFullUserHash)(bootstrapUser)) {
              this._warnings.add("PartialUserMatch");
            }
          }
        }
        getCurrentSourceDetails() {
          if (this._source === "Uninitialized" || this._source === "NoValues") {
            return { reason: this._source };
          }
          const sourceDetails = {
            reason: this._source,
            lcut: this._lcut,
            receivedAt: this._receivedAt
          };
          if (this._warnings.size > 0) {
            sourceDetails.warnings = Array.from(this._warnings);
          }
          return sourceDetails;
        }
        _getDetails(isUnrecognized) {
          var _a, _b;
          const sourceDetails = this.getCurrentSourceDetails();
          let reason = sourceDetails.reason;
          const warnings = (_a = sourceDetails.warnings) !== null && _a !== void 0 ? _a : [];
          if (this._source === "Bootstrap" && warnings.length > 0) {
            reason = reason + warnings[0];
          }
          if (reason !== "Uninitialized" && reason !== "NoValues") {
            const subreason = isUnrecognized ? "Unrecognized" : "Recognized";
            reason = `${reason}:${subreason}`;
          }
          const bootstrapMetadata = this._source === "Bootstrap" ? (_b = this._bootstrapMetadata) !== null && _b !== void 0 ? _b : void 0 : void 0;
          if (bootstrapMetadata) {
            sourceDetails.bootstrapMetadata = bootstrapMetadata;
          }
          return Object.assign(Object.assign({}, sourceDetails), { reason });
        }
      };
      exports.default = EvaluationStore;
    }
  });

  // node_modules/@statsig/js-client/src/EvaluationResponseDeltas.js
  var require_EvaluationResponseDeltas = __commonJS({
    "node_modules/@statsig/js-client/src/EvaluationResponseDeltas.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports._resolveDeltasResponse = void 0;
      var client_core_1 = require_src();
      var MAX_DELTAS_SORT_DEPTH = 2;
      function _resolveDeltasResponse(cache, deltasString) {
        const deltas = (0, client_core_1._typedJsonParse)(deltasString, "checksum", "DeltasEvaluationResponse");
        if (!deltas) {
          return {
            hadBadDeltaChecksum: true
          };
        }
        const merged = _mergeDeltasIntoCache(cache, deltas);
        const resolved = _handleDeletedEntries(merged);
        const actualChecksum = (0, client_core_1._DJB2Object)({
          feature_gates: resolved.feature_gates,
          dynamic_configs: resolved.dynamic_configs,
          layer_configs: resolved.layer_configs
        }, MAX_DELTAS_SORT_DEPTH);
        const isMatch = actualChecksum === deltas.checksumV2;
        if (!isMatch) {
          return {
            hadBadDeltaChecksum: true,
            badChecksum: actualChecksum,
            badMergedConfigs: resolved,
            badFullResponse: deltas.deltas_full_response
          };
        }
        return JSON.stringify(resolved);
      }
      exports._resolveDeltasResponse = _resolveDeltasResponse;
      function _mergeDeltasIntoCache(cache, deltas) {
        return Object.assign(Object.assign(Object.assign({}, cache), deltas), { feature_gates: Object.assign(Object.assign({}, cache.feature_gates), deltas.feature_gates), layer_configs: Object.assign(Object.assign({}, cache.layer_configs), deltas.layer_configs), dynamic_configs: Object.assign(Object.assign({}, cache.dynamic_configs), deltas.dynamic_configs) });
      }
      function _handleDeletedEntries(deltas) {
        const result = deltas;
        _deleteEntriesInRecord(deltas.deleted_gates, result.feature_gates);
        delete result.deleted_gates;
        _deleteEntriesInRecord(deltas.deleted_configs, result.dynamic_configs);
        delete result.deleted_configs;
        _deleteEntriesInRecord(deltas.deleted_layers, result.layer_configs);
        delete result.deleted_layers;
        return result;
      }
      function _deleteEntriesInRecord(keys, values) {
        keys === null || keys === void 0 ? void 0 : keys.forEach((key) => {
          delete values[key];
        });
      }
    }
  });

  // node_modules/@statsig/js-client/src/Network.js
  var require_Network = __commonJS({
    "node_modules/@statsig/js-client/src/Network.js"(exports) {
      "use strict";
      var __awaiter2 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var client_core_1 = require_src();
      var EvaluationResponseDeltas_1 = require_EvaluationResponseDeltas();
      var StatsigNetwork = class extends client_core_1.NetworkCore {
        constructor(options, emitter) {
          super(options, emitter);
          const config = options === null || options === void 0 ? void 0 : options.networkConfig;
          this._option = options;
          this._initializeUrlConfig = new client_core_1.UrlConfiguration(client_core_1.Endpoint._initialize, config === null || config === void 0 ? void 0 : config.initializeUrl, config === null || config === void 0 ? void 0 : config.api, config === null || config === void 0 ? void 0 : config.initializeFallbackUrls);
        }
        fetchEvaluations(sdkKey, current, priority, user, isCacheValidFor204) {
          return __awaiter2(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f;
            const cache = current ? (0, client_core_1._typedJsonParse)(current, "has_updates", "InitializeResponse") : null;
            let data = {
              user,
              hash: (_c = (_b = (_a = this._option) === null || _a === void 0 ? void 0 : _a.networkConfig) === null || _b === void 0 ? void 0 : _b.initializeHashAlgorithm) !== null && _c !== void 0 ? _c : "djb2",
              deltasResponseRequested: false,
              full_checksum: null
            };
            if (cache === null || cache === void 0 ? void 0 : cache.has_updates) {
              const hasHashChanged = (cache === null || cache === void 0 ? void 0 : cache.hash_used) !== ((_f = (_e = (_d = this._option) === null || _d === void 0 ? void 0 : _d.networkConfig) === null || _e === void 0 ? void 0 : _e.initializeHashAlgorithm) !== null && _f !== void 0 ? _f : "djb2");
              data = Object.assign(Object.assign({}, data), { sinceTime: isCacheValidFor204 && !hasHashChanged ? cache.time : 0, previousDerivedFields: "derived_fields" in cache && isCacheValidFor204 ? cache.derived_fields : {}, deltasResponseRequested: true, full_checksum: cache.full_checksum, partialUserMatchSinceTime: !hasHashChanged ? cache.time : 0 });
            }
            return this._fetchEvaluations(sdkKey, cache, data, priority);
          });
        }
        _fetchEvaluations(sdkKey, cache, data, priority) {
          return __awaiter2(this, void 0, void 0, function* () {
            var _a, _b;
            const response = yield this.post({
              sdkKey,
              urlConfig: this._initializeUrlConfig,
              data,
              retries: 2,
              isStatsigEncodable: true,
              priority
            });
            if ((response === null || response === void 0 ? void 0 : response.code) === 204) {
              return '{"has_updates": false}';
            }
            if ((response === null || response === void 0 ? void 0 : response.code) !== 200) {
              return (_a = response === null || response === void 0 ? void 0 : response.body) !== null && _a !== void 0 ? _a : null;
            }
            if ((cache === null || cache === void 0 ? void 0 : cache.has_updates) !== true || ((_b = response.body) === null || _b === void 0 ? void 0 : _b.includes('"is_delta":true')) !== true || data.deltasResponseRequested !== true) {
              return response.body;
            }
            const result = (0, EvaluationResponseDeltas_1._resolveDeltasResponse)(cache, response.body);
            if (typeof result === "string") {
              return result;
            }
            return this._fetchEvaluations(sdkKey, cache, Object.assign(Object.assign(Object.assign({}, data), result), { deltasResponseRequested: false }), priority);
          });
        }
      };
      exports.default = StatsigNetwork;
    }
  });

  // node_modules/@statsig/js-client/src/ParamStoreGetterFactory.js
  var require_ParamStoreGetterFactory = __commonJS({
    "node_modules/@statsig/js-client/src/ParamStoreGetterFactory.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports._makeParamStoreGetter = void 0;
      var client_core_1 = require_src();
      var NO_EXPOSURE_OPT = {
        disableExposureLog: true
      };
      function _shouldLogExposure(options) {
        return options == null || options.disableExposureLog === false;
      }
      function _shouldReturnFallback(value, fallback) {
        return fallback != null && !(0, client_core_1._isTypeMatch)(value, fallback);
      }
      function _getMappedStaticValue(param, _options) {
        return param.value;
      }
      function _getMappedGateValue(client, param, options) {
        const gate = client.getFeatureGate(param.gate_name, _shouldLogExposure(options) ? void 0 : NO_EXPOSURE_OPT);
        if (gate.value) {
          return param.pass_value;
        }
        return param.fail_value;
      }
      function _getMappedDynamicConfigValue(client, param, fallback, options) {
        const config = client.getDynamicConfig(param.config_name, _shouldLogExposure(options) ? void 0 : NO_EXPOSURE_OPT);
        const value = config.get(param.param_name);
        if (_shouldReturnFallback(value, fallback)) {
          return fallback;
        }
        return value;
      }
      function _getMappedExperimentValue(client, param, fallback, options) {
        const experiment = client.getExperiment(param.experiment_name, _shouldLogExposure(options) ? void 0 : NO_EXPOSURE_OPT);
        const value = experiment.get(param.param_name);
        if (_shouldReturnFallback(value, fallback)) {
          return fallback;
        }
        return value;
      }
      function _getMappedLayerValue(client, param, fallback, options) {
        const layer = client.getLayer(param.layer_name, _shouldLogExposure(options) ? void 0 : NO_EXPOSURE_OPT);
        const value = layer.get(param.param_name);
        if (_shouldReturnFallback(value, fallback)) {
          return fallback;
        }
        return value;
      }
      function _makeParamStoreGetter(client, config, options) {
        return (paramName, fallback) => {
          if (config == null) {
            return fallback;
          }
          const param = config[paramName];
          if (param == null || fallback != null && (0, client_core_1._typeOf)(fallback) !== param.param_type) {
            return fallback;
          }
          switch (param.ref_type) {
            case "static":
              return _getMappedStaticValue(param, options);
            case "gate":
              return _getMappedGateValue(client, param, options);
            case "dynamic_config":
              return _getMappedDynamicConfigValue(client, param, fallback, options);
            case "experiment":
              return _getMappedExperimentValue(client, param, fallback, options);
            case "layer":
              return _getMappedLayerValue(client, param, fallback, options);
            default:
              return fallback;
          }
        };
      }
      exports._makeParamStoreGetter = _makeParamStoreGetter;
    }
  });

  // node_modules/@statsig/js-client/src/StatsigEvaluationsDataAdapter.js
  var require_StatsigEvaluationsDataAdapter = __commonJS({
    "node_modules/@statsig/js-client/src/StatsigEvaluationsDataAdapter.js"(exports) {
      "use strict";
      var __awaiter2 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.StatsigEvaluationsDataAdapter = void 0;
      var client_core_1 = require_src();
      var Network_1 = require_Network();
      var StatsigEvaluationsDataAdapter = class extends client_core_1.DataAdapterCore {
        constructor() {
          super("EvaluationsDataAdapter", "evaluations");
          this._network = null;
          this._options = null;
        }
        attach(sdkKey, options, network) {
          super.attach(sdkKey, options, network);
          if (network !== null && network instanceof Network_1.default) {
            this._network = network;
          } else {
            this._network = new Network_1.default(options !== null && options !== void 0 ? options : {});
          }
        }
        getDataAsync(current, user, options) {
          return this._getDataAsyncImpl(current, (0, client_core_1._normalizeUser)(user, this._options), options);
        }
        prefetchData(user, options) {
          return this._prefetchDataImpl(user, options);
        }
        setData(data) {
          const values = (0, client_core_1._typedJsonParse)(data, "has_updates", "data");
          if (values && "user" in values) {
            super.setData(data, values.user);
          } else {
            client_core_1.Log.error("StatsigUser not found. You may be using an older server SDK version. Please upgrade your SDK or use setDataLegacy.");
          }
        }
        setDataLegacy(data, user) {
          super.setData(data, user);
        }
        _fetchFromNetwork(current, user, options, isCacheValidFor204) {
          return __awaiter2(this, void 0, void 0, function* () {
            var _a;
            const result = yield (_a = this._network) === null || _a === void 0 ? void 0 : _a.fetchEvaluations(this._getSdkKey(), current, options === null || options === void 0 ? void 0 : options.priority, user, isCacheValidFor204);
            return result !== null && result !== void 0 ? result : null;
          });
        }
        _getCacheKey(user) {
          var _a;
          const key = (0, client_core_1._getStorageKey)(this._getSdkKey(), user, (_a = this._options) === null || _a === void 0 ? void 0 : _a.customUserCacheKeyFunc);
          return `${client_core_1.DataAdapterCachePrefix}.${this._cacheSuffix}.${key}`;
        }
        _isCachedResultValidFor204(result, user) {
          return result.fullUserHash != null && result.fullUserHash === (0, client_core_1._getFullUserHash)(user);
        }
      };
      exports.StatsigEvaluationsDataAdapter = StatsigEvaluationsDataAdapter;
    }
  });

  // node_modules/@statsig/js-client/src/StatsigClient.js
  var require_StatsigClient = __commonJS({
    "node_modules/@statsig/js-client/src/StatsigClient.js"(exports) {
      "use strict";
      var __awaiter2 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var client_core_1 = require_src();
      var EvaluationStore_1 = require_EvaluationStore();
      var Network_1 = require_Network();
      var ParamStoreGetterFactory_1 = require_ParamStoreGetterFactory();
      var StatsigEvaluationsDataAdapter_1 = require_StatsigEvaluationsDataAdapter();
      var StatsigClient = class _StatsigClient extends client_core_1.StatsigClientBase {
        /**
         * Retrieves an instance of the StatsigClient based on the provided SDK key.
         *  If no SDK key is provided, the method returns the most recently created instance of the StatsigClient.
         *  The method ensures that each unique SDK key corresponds to a single instance of StatsigClient, effectively implementing a singleton pattern for each key.
         *  If no instance exists for the given SDK key, a new StatsigClient instance will be created and returned.
         *
         * @param {string} [sdkKey] - Optional. The SDK key used to identify a specific instance of the StatsigClient. If omitted, the method returns the last created instance.
         * @returns {StatsigClient} Returns the StatsigClient instance associated with the given SDK key, creating a new one if needed.
         */
        static instance(sdkKey) {
          const instance = (0, client_core_1._getStatsigGlobal)().instance(sdkKey);
          if (instance instanceof _StatsigClient) {
            return instance;
          }
          client_core_1.Log.warn((0, client_core_1._isServerEnv)() ? "StatsigClient.instance is not supported in server environments" : "Unable to find StatsigClient instance");
          return new _StatsigClient(sdkKey !== null && sdkKey !== void 0 ? sdkKey : "", {});
        }
        /**
         * StatsigClient constructor
         *
         * @param {string} sdkKey A Statsig client SDK key. eg "client-xyz123..."
         * @param {StatsigUser} user StatsigUser object containing various attributes related to a user.
         * @param {StatsigOptions | null} options StatsigOptions, used to customize the behavior of the SDK.
         */
        constructor(sdkKey, user, options = null) {
          var _a, _b;
          client_core_1.SDKType._setClientType(sdkKey, "javascript-client");
          const network = new Network_1.default(options, (e) => {
            this.$emt(e);
          });
          super(sdkKey, (_a = options === null || options === void 0 ? void 0 : options.dataAdapter) !== null && _a !== void 0 ? _a : new StatsigEvaluationsDataAdapter_1.StatsigEvaluationsDataAdapter(), network, options);
          this.getFeatureGate = this._memoize(client_core_1.MemoPrefix._gate, this._getFeatureGateImpl.bind(this));
          this.getDynamicConfig = this._memoize(client_core_1.MemoPrefix._dynamicConfig, this._getDynamicConfigImpl.bind(this));
          this.getExperiment = this._memoize(client_core_1.MemoPrefix._experiment, this._getExperimentImpl.bind(this));
          this.getLayer = this._memoize(client_core_1.MemoPrefix._layer, this._getLayerImpl.bind(this));
          this.getParameterStore = this._memoize(client_core_1.MemoPrefix._paramStore, this._getParameterStoreImpl.bind(this));
          this._store = new EvaluationStore_1.default(sdkKey);
          this._network = network;
          this._user = this._configureUser(user, options);
          this._sdkInstanceID = (0, client_core_1.getUUID)();
          const plugins = (_b = options === null || options === void 0 ? void 0 : options.plugins) !== null && _b !== void 0 ? _b : [];
          for (const plugin of plugins) {
            plugin.bind(this);
          }
        }
        /**
         * Initializes the StatsigClient using cached values. This method sets up the client synchronously by utilizing previously cached values.
         * After initialization, cache values are updated in the background for future use, either in subsequent sessions or when `updateUser` is called.
         * This is useful for quickly starting with the last-known-good configurations while refreshing data to keep settings up-to-date.
         *
         * @see {@link initializeAsync} for the asynchronous version of this method.
         */
        initializeSync(options) {
          var _a;
          if (this.loadingStatus !== "Uninitialized") {
            return (0, client_core_1.createUpdateDetails)(true, this._store.getSource(), -1, null, null, ["MultipleInitializations", ...(_a = this._store.getWarnings()) !== null && _a !== void 0 ? _a : []]);
          }
          this._logger.start();
          return this.updateUserSync(this._user, options);
        }
        /**
         * Initializes the StatsigClient asynchronously by first using cached values and then updating to the latest values from the network.
         * Once the network values are fetched, they replace the existing cached values. If this method's promise is not awaited,
         * there might be a transition from cached to network values during the session, which can affect consistency.
         * This method is useful when it's acceptable to begin with potentially stale data and switch to the latest configuration as it becomes available.
         *
         * @param {AsyncUpdateOptions} [options] - Optional. Additional options to customize the method call.
         * @returns {Promise<void>} A promise that resolves once the client is fully initialized with the latest values from the network or a timeout (if set) is hit.
         * @see {@link initializeSync} for the synchronous version of this method.
         */
        initializeAsync(options) {
          return __awaiter2(this, void 0, void 0, function* () {
            if (this._initializePromise) {
              return this._initializePromise;
            }
            this._initializePromise = this._initializeAsyncImpl(options);
            return this._initializePromise;
          });
        }
        /**
         * Synchronously updates the user in the Statsig client and switches the internal state to use cached values for the newly specified user.
         * After the initial switch to cached values, this method updates these values in the background, preparing them for future sessions or subsequent calls to updateUser.
         * This method ensures the client is quickly ready with available data.
         *
         * @param {StatsigUser} user - The new StatsigUser for which the client should update its internal state.
         * @see {@link updateUserAsync} for the asynchronous version of this method.
         */
        updateUserSync(user, options) {
          const startTime = performance.now();
          try {
            return this._updateUserSyncImpl(user, options, startTime);
          } catch (e) {
            const err = e instanceof Error ? e : new Error(String(e));
            return this._createErrorUpdateDetails(err, startTime);
          }
        }
        _updateUserSyncImpl(user, options, startTime) {
          var _a;
          const warnings = [...(_a = this._store.getWarnings()) !== null && _a !== void 0 ? _a : []];
          this._resetForUser(user);
          const result = this.dataAdapter.getDataSync(this._user);
          if (result == null) {
            warnings.push("NoCachedValues");
          }
          this._store.setValues(result, this._user);
          this._finalizeUpdate(result);
          const disable = options === null || options === void 0 ? void 0 : options.disableBackgroundCacheRefresh;
          if (disable === true || disable == null && (result === null || result === void 0 ? void 0 : result.source) === "Bootstrap") {
            return (0, client_core_1.createUpdateDetails)(true, this._store.getSource(), performance.now() - startTime, this._errorBoundary.getLastSeenErrorAndReset(), this._network.getLastUsedInitUrlAndReset(), warnings);
          }
          this._runPostUpdate(result !== null && result !== void 0 ? result : null, this._user);
          return (0, client_core_1.createUpdateDetails)(true, this._store.getSource(), performance.now() - startTime, this._errorBoundary.getLastSeenErrorAndReset(), this._network.getLastUsedInitUrlAndReset(), warnings);
        }
        /**
         * Asynchronously updates the user in the Statsig client by initially using cached values and then fetching the latest values from the network.
         * When the latest values are fetched, they replace the cached values. If the promise returned by this method is not awaited,
         * the client's state may shift from cached to updated network values during the session, potentially affecting consistency.
         * This method is best used in scenarios where up-to-date configuration is critical and initial delays are acceptable.
         *
         * @param {StatsigUser} user - The new StatsigUser for which the client should update its internal state.
         * @param {AsyncUpdateOptions} [options] - Optional. Additional options to customize the method call.
         * @returns {Promise<void>} A promise that resolves once the client is fully updated with the latest values from the network or a timeout (if set) is hit.
         * @see {@link updateUserSync} for the synchronous version of this method.
         */
        updateUserAsync(user, options) {
          return __awaiter2(this, void 0, void 0, function* () {
            const startTime = performance.now();
            try {
              return yield this._updateUserAsyncImpl(user, options);
            } catch (e) {
              const err = e instanceof Error ? e : new Error(String(e));
              return this._createErrorUpdateDetails(err, startTime);
            }
          });
        }
        _updateUserAsyncImpl(user, options) {
          return __awaiter2(this, void 0, void 0, function* () {
            this._resetForUser(user);
            const initiator = this._user;
            client_core_1.Diagnostics._markInitOverallStart(this._sdkKey);
            let result = this.dataAdapter.getDataSync(initiator);
            this._store.setValues(result, this._user);
            this._setStatus("Loading", result);
            result = yield this.dataAdapter.getDataAsync(result, initiator, options);
            if (initiator !== this._user) {
              return (0, client_core_1.createUpdateDetails)(false, this._store.getSource(), -1, new Error("User changed during update"), this._network.getLastUsedInitUrlAndReset());
            }
            let isUsingNetworkValues = false;
            if (result != null) {
              client_core_1.Diagnostics._markInitProcessStart(this._sdkKey);
              isUsingNetworkValues = this._store.setValues(result, this._user);
              client_core_1.Diagnostics._markInitProcessEnd(this._sdkKey, {
                success: isUsingNetworkValues
              });
            }
            this._finalizeUpdate(result);
            if (!isUsingNetworkValues) {
              this._errorBoundary.attachErrorIfNoneExists(client_core_1.UPDATE_DETAIL_ERROR_MESSAGES.NO_NETWORK_DATA);
              this.$emt({ name: "initialization_failure" });
            }
            client_core_1.Diagnostics._markInitOverallEnd(this._sdkKey, isUsingNetworkValues, this._store.getCurrentSourceDetails());
            const initDuration = client_core_1.Diagnostics._enqueueDiagnosticsEvent(this._user, this._logger, this._sdkKey, this._options);
            return (0, client_core_1.createUpdateDetails)(isUsingNetworkValues, this._store.getSource(), initDuration, this._errorBoundary.getLastSeenErrorAndReset(), this._network.getLastUsedInitUrlAndReset(), this._store.getWarnings());
          });
        }
        /**
         * Retrieves a synchronous context containing data currently being used by the SDK. Represented as a {@link PrecomputedEvaluationsContext} object.
         *
         * @returns {PrecomputedEvaluationsContext} The current synchronous context for the this StatsigClient instance.
         */
        getContext() {
          return {
            sdkKey: this._sdkKey,
            options: this._options,
            values: this._store.getValues(),
            user: JSON.parse(JSON.stringify(this._user)),
            errorBoundary: this._errorBoundary,
            session: client_core_1.StatsigSession.get(this._sdkKey),
            stableID: client_core_1.StableID.get(this._sdkKey),
            sdkInstanceID: this._sdkInstanceID
          };
        }
        /**
         * Retrieves the value of a feature gate for the current user, represented as a simple boolean.
         *
         * @param {string} name - The name of the feature gate to retrieve.
         * @param {FeatureGateEvaluationOptions} [options] - Optional. Additional options to customize the method call.
         * @returns {boolean} - The boolean value representing the gate's current evaluation results for the user.
         */
        checkGate(name, options) {
          return this.getFeatureGate(name, options).value;
        }
        /**
         * Logs an event to the internal logging system. This function allows logging by either passing a fully formed event object or by specifying the event name with optional value and metadata.
         *
         * @param {StatsigEvent|string} eventOrName - The event object conforming to the StatsigEvent interface, or the name of the event as a string.
         * @param {string|number} value - Optional. The value associated with the event, which can be a string or a number. This parameter is ignored if the first parameter is a StatsigEvent object.
         * @param {Record<string, string>} metadata - Optional. A key-value record containing metadata about the event. This is also ignored if the first parameter is an event object.
         */
        logEvent(eventOrName, value, metadata) {
          const event = typeof eventOrName === "string" ? {
            eventName: eventOrName,
            value,
            metadata
          } : eventOrName;
          this.$emt({
            name: "log_event_called",
            event
          });
          this._logger.enqueue(Object.assign(Object.assign({}, event), { user: this._user, time: Date.now() }));
        }
        _primeReadyRipcord() {
          this.$on("error", () => {
            this.loadingStatus === "Loading" && this._finalizeUpdate(null);
          });
        }
        _initializeAsyncImpl(options) {
          return __awaiter2(this, void 0, void 0, function* () {
            if (!client_core_1.Storage.isReady()) {
              yield client_core_1.Storage.isReadyResolver();
            }
            this._logger.start();
            return this.updateUserAsync(this._user, options);
          });
        }
        _createErrorUpdateDetails(error, startTime) {
          var _a;
          return (0, client_core_1.createUpdateDetails)(false, this._store.getSource(), performance.now() - startTime, error, null, [...(_a = this._store.getWarnings()) !== null && _a !== void 0 ? _a : []]);
        }
        _finalizeUpdate(values) {
          this._store.finalize();
          this._setStatus("Ready", values);
        }
        _runPostUpdate(current, user) {
          this.dataAdapter.getDataAsync(current, user, { priority: "low" }).catch((err) => {
            client_core_1.Log.error("An error occurred after update.", err);
          });
        }
        _resetForUser(user) {
          this._logger.reset();
          this._store.reset();
          this._user = this._configureUser(user, this._options);
        }
        _configureUser(originalUser, options) {
          var _a;
          const user = (0, client_core_1._normalizeUser)(originalUser, options);
          const stableIdOverride = (_a = user.customIDs) === null || _a === void 0 ? void 0 : _a.stableID;
          if (stableIdOverride) {
            client_core_1.StableID.setOverride(stableIdOverride, this._sdkKey);
          }
          return user;
        }
        _getFeatureGateImpl(name, options) {
          var _a, _b;
          const { result: evaluation, details } = this._store.getGate(name);
          const gate = (0, client_core_1._makeFeatureGate)(name, details, evaluation);
          const overridden = (_b = (_a = this.overrideAdapter) === null || _a === void 0 ? void 0 : _a.getGateOverride) === null || _b === void 0 ? void 0 : _b.call(_a, gate, this._user, options);
          const result = overridden !== null && overridden !== void 0 ? overridden : gate;
          this._enqueueExposure(name, (0, client_core_1._createGateExposure)(this._user, result, this._store.getExposureMapping()), options);
          this.$emt({ name: "gate_evaluation", gate: result });
          return result;
        }
        _getDynamicConfigImpl(name, options) {
          var _a, _b;
          const { result: evaluation, details } = this._store.getConfig(name);
          const config = (0, client_core_1._makeDynamicConfig)(name, details, evaluation);
          const overridden = (_b = (_a = this.overrideAdapter) === null || _a === void 0 ? void 0 : _a.getDynamicConfigOverride) === null || _b === void 0 ? void 0 : _b.call(_a, config, this._user, options);
          const result = overridden !== null && overridden !== void 0 ? overridden : config;
          this._enqueueExposure(name, (0, client_core_1._createConfigExposure)(this._user, result, this._store.getExposureMapping()), options);
          this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: result });
          return result;
        }
        _getExperimentImpl(name, options) {
          var _a, _b, _c, _d;
          const { result: evaluation, details } = this._store.getConfig(name);
          const experiment = (0, client_core_1._makeExperiment)(name, details, evaluation);
          if (experiment.__evaluation != null) {
            experiment.__evaluation.secondary_exposures = (0, client_core_1._mapExposures)((_b = (_a = experiment.__evaluation) === null || _a === void 0 ? void 0 : _a.secondary_exposures) !== null && _b !== void 0 ? _b : [], this._store.getExposureMapping());
          }
          const overridden = (_d = (_c = this.overrideAdapter) === null || _c === void 0 ? void 0 : _c.getExperimentOverride) === null || _d === void 0 ? void 0 : _d.call(_c, experiment, this._user, options);
          const result = overridden !== null && overridden !== void 0 ? overridden : experiment;
          this._enqueueExposure(name, (0, client_core_1._createConfigExposure)(this._user, result, this._store.getExposureMapping()), options);
          this.$emt({ name: "experiment_evaluation", experiment: result });
          return result;
        }
        _getLayerImpl(name, options) {
          var _a, _b, _c;
          const { result: evaluation, details } = this._store.getLayer(name);
          const layer = (0, client_core_1._makeLayer)(name, details, evaluation);
          const overridden = (_b = (_a = this.overrideAdapter) === null || _a === void 0 ? void 0 : _a.getLayerOverride) === null || _b === void 0 ? void 0 : _b.call(_a, layer, this._user, options);
          if (options === null || options === void 0 ? void 0 : options.disableExposureLog) {
            this._logger.incrementNonExposureCount(name);
          }
          const result = (0, client_core_1._mergeOverride)(layer, overridden, (_c = overridden === null || overridden === void 0 ? void 0 : overridden.__value) !== null && _c !== void 0 ? _c : layer.__value, (param) => {
            if (options === null || options === void 0 ? void 0 : options.disableExposureLog) {
              return;
            }
            this._enqueueExposure(name, (0, client_core_1._createLayerParameterExposure)(this._user, result, param, this._store.getExposureMapping()), options);
          });
          this.$emt({ name: "layer_evaluation", layer: result });
          return result;
        }
        _getParameterStoreImpl(name, options) {
          var _a, _b;
          const { result: configuration, details } = this._store.getParamStore(name);
          this._logger.incrementNonExposureCount(name);
          const paramStore = {
            name,
            details,
            __configuration: configuration,
            get: (0, ParamStoreGetterFactory_1._makeParamStoreGetter)(this, configuration, options)
          };
          const overridden = (_b = (_a = this.overrideAdapter) === null || _a === void 0 ? void 0 : _a.getParamStoreOverride) === null || _b === void 0 ? void 0 : _b.call(_a, paramStore, options);
          if (overridden != null) {
            paramStore.__configuration = overridden.config;
            paramStore.details = overridden.details;
            paramStore.get = (0, ParamStoreGetterFactory_1._makeParamStoreGetter)(this, overridden.config, options);
          }
          return paramStore;
        }
      };
      exports.default = StatsigClient;
    }
  });

  // node_modules/@statsig/js-client/src/index.js
  var require_src2 = __commonJS({
    "node_modules/@statsig/js-client/src/index.js"(exports) {
      "use strict";
      var __createBinding2 = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      }) : (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      }));
      var __exportStar2 = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding2(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.StatsigClient = void 0;
      var client_core_1 = require_src();
      var StatsigClient_1 = require_StatsigClient();
      exports.StatsigClient = StatsigClient_1.default;
      __exportStar2(require_src(), exports);
      var __STATSIG__2 = Object.assign((0, client_core_1._getStatsigGlobal)(), {
        StatsigClient: StatsigClient_1.default
      });
      exports.default = __STATSIG__2;
    }
  });

  // node_modules/@forge/bridge/out/featureFlags/initFeatureFlags.js
  var require_initFeatureFlags = __commonJS({
    "node_modules/@forge/bridge/out/featureFlags/initFeatureFlags.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.initFeatureFlags = void 0;
      var bridge_1 = require_bridge();
      var errors_1 = require_errors();
      var utils_1 = require_utils();
      var maxOps = 500;
      var intervalInMs = 1e3 * 25;
      var callBridge = (0, bridge_1.getCallBridge)();
      var validatePayload = (payload) => {
        if (!payload || !payload.user) {
          throw new errors_1.BridgeAPIError("Missing required parameters. Parameter user is required in the payload.");
        }
        if (Object.values(payload).some((val) => typeof val === "function")) {
          throw new errors_1.BridgeAPIError("Passing functions as part of the payload is not supported!");
        }
      };
      var _initFeatureFlags = (payload) => {
        validatePayload(payload);
        return callBridge("initFeatureFlags", { user: payload.user });
      };
      exports.initFeatureFlags = (0, utils_1.withRateLimiter)(_initFeatureFlags, maxOps, intervalInMs, `Feature flags initialisation calls are rate limited at ${maxOps}req/${intervalInMs / 1e3}s`);
    }
  });

  // node_modules/@forge/bridge/out/featureFlags/dataAdapter.js
  var require_dataAdapter = __commonJS({
    "node_modules/@forge/bridge/out/featureFlags/dataAdapter.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ForgeDataAdapter = void 0;
      var initFeatureFlags_1 = require_initFeatureFlags();
      var ForgeDataAdapter = class {
        constructor() {
          this.options = null;
          this.environment = void 0;
          this.cache = null;
        }
        async getDataAsync(current, user, options) {
          var _a;
          if (current) {
            return current;
          }
          this.environment = ((_a = this.options) === null || _a === void 0 ? void 0 : _a.environment) || { tier: "development" };
          const initUser = {
            ...user,
            statsigEnvironment: this.environment
          };
          const result = await (0, initFeatureFlags_1.initFeatureFlags)({ user: initUser });
          const data = {
            source: "Network",
            data: JSON.stringify(result),
            receivedAt: Date.now(),
            stableID: null,
            fullUserHash: null
          };
          this.cache = data;
          return data;
        }
        getDataSync(_user) {
          return this.cache;
        }
        async attach(_sdkKey, options, _network) {
          this.options = options;
        }
        async prefetchData() {
        }
        async setData(_data) {
        }
        async setDataLegacy(_data) {
        }
        async shutdown() {
          this.options = null;
          this.cache = null;
          this.environment = void 0;
        }
      };
      exports.ForgeDataAdapter = ForgeDataAdapter;
    }
  });

  // node_modules/@forge/bridge/out/types.js
  var require_types3 = __commonJS({
    "node_modules/@forge/bridge/out/types.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.FeatureFlagEventType = exports.ExtensionEnvironment = void 0;
      var ExtensionEnvironment;
      (function(ExtensionEnvironment2) {
        ExtensionEnvironment2["DEVELOPMENT"] = "DEVELOPMENT";
        ExtensionEnvironment2["STAGING"] = "STAGING";
        ExtensionEnvironment2["PRODUCTION"] = "PRODUCTION";
      })(ExtensionEnvironment = exports.ExtensionEnvironment || (exports.ExtensionEnvironment = {}));
      var EcosystemLicenseMode;
      (function(EcosystemLicenseMode2) {
        EcosystemLicenseMode2["USER_ACCESS"] = "USER_ACCESS";
      })(EcosystemLicenseMode || (EcosystemLicenseMode = {}));
      var FeatureFlagEventType;
      (function(FeatureFlagEventType2) {
        FeatureFlagEventType2["CHECKFLAG"] = "checkFlag";
      })(FeatureFlagEventType = exports.FeatureFlagEventType || (exports.FeatureFlagEventType = {}));
    }
  });

  // node_modules/@forge/bridge/out/featureFlags/featureFlagEvents.js
  var require_featureFlagEvents = __commonJS({
    "node_modules/@forge/bridge/out/featureFlags/featureFlagEvents.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.trackFeatureFlagEvent = void 0;
      var bridge_1 = require_bridge();
      var errors_1 = require_errors();
      var types_1 = require_types3();
      var utils_1 = require_utils();
      var maxOps = 500;
      var intervalInMs = 1e3 * 25;
      var callBridge = (0, bridge_1.getCallBridge)();
      var validatePayload = (payload) => {
        if (!payload || !payload.type || !payload.properties) {
          throw new errors_1.BridgeAPIError("Missing required parameters. Parameter type, and properties are required in the payload.");
        }
        if (!(payload.type.toUpperCase() in types_1.FeatureFlagEventType)) {
          throw new errors_1.BridgeAPIError("Event type is not supported");
        }
        if (Object.values(payload).some((val) => typeof val === "function")) {
          throw new errors_1.BridgeAPIError("Passing functions as part of the payload is not supported!");
        }
      };
      var _trackFeatureFlagEvent = (payload) => {
        validatePayload(payload);
        return callBridge("trackFeatureFlagEvent", payload);
      };
      exports.trackFeatureFlagEvent = (0, utils_1.withRateLimiter)(_trackFeatureFlagEvent, maxOps, intervalInMs, `Feature flags calls are rate limited at ${maxOps}req/${intervalInMs / 1e3}s`);
    }
  });

  // node_modules/@forge/bridge/out/featureFlags/featureFlags.js
  var require_featureFlags = __commonJS({
    "node_modules/@forge/bridge/out/featureFlags/featureFlags.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ForgeFeatureFlags = void 0;
      var js_client_1 = require_src2();
      var dataAdapter_1 = require_dataAdapter();
      var types_1 = require_types3();
      var featureFlagEvents_1 = require_featureFlagEvents();
      var ForgeFeatureFlags = class {
        constructor() {
          this.initialized = false;
          this.client = null;
          this.dataAdapter = null;
          this.eventProps = {};
          this.CLIENT_KEY = "client-forge-internal-key";
        }
        async initialize(user, config = {}) {
          var _a;
          if (this.isInitialized()) {
            return;
          }
          this.dataAdapter = new dataAdapter_1.ForgeDataAdapter();
          const options = {
            environment: { tier: config.environment || "development" },
            disableEvaluationMemoization: false,
            loggingEnabled: js_client_1.LoggingEnabledOption.disabled,
            logLevel: js_client_1.LogLevel.None,
            dataAdapter: this.dataAdapter
          };
          this.eventProps.environment = (_a = options.environment) === null || _a === void 0 ? void 0 : _a.tier;
          this.client = new js_client_1.StatsigClient(this.CLIENT_KEY, this.convertUser(user), options);
          await this.client.initializeAsync();
          this.initialized = true;
        }
        checkFlag(flagName) {
          if (!this.isInitialized() || !this.client) {
            this.sendCheckFlagEvent(flagName, false);
            throw new Error("ForgeFeatureFlags not initialized. Call initialize() first.");
          }
          this.sendCheckFlagEvent(flagName, true);
          return this.client.checkGate(flagName, { disableExposureLog: true });
        }
        async shutdown() {
          if (!this.isInitialized() || !this.client) {
            return;
          }
          await this.client.shutdown();
          if (this.dataAdapter) {
            await this.dataAdapter.shutdown();
          }
          this.initialized = false;
        }
        isInitialized() {
          return this.initialized;
        }
        convertUser(user) {
          return {
            userID: user.userId,
            custom: { ...user.custom || {}, ...user.attributes || {} },
            customIDs: user.identifiers || {}
          };
        }
        sendCheckFlagEvent(flagName, success) {
          const props = {
            type: types_1.FeatureFlagEventType.CHECKFLAG,
            properties: {
              ...this.eventProps,
              environment: this.eventProps.environment || "development",
              name: flagName,
              success
            }
          };
          void (0, featureFlagEvents_1.trackFeatureFlagEvent)(props);
        }
      };
      exports.ForgeFeatureFlags = ForgeFeatureFlags;
    }
  });

  // node_modules/@forge/bridge/out/featureFlags/index.js
  var require_featureFlags2 = __commonJS({
    "node_modules/@forge/bridge/out/featureFlags/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ForgeFeatureFlags = void 0;
      var featureFlags_1 = require_featureFlags();
      Object.defineProperty(exports, "ForgeFeatureFlags", { enumerable: true, get: function() {
        return featureFlags_1.ForgeFeatureFlags;
      } });
    }
  });

  // node_modules/@forge/bridge/out/index.js
  var require_out2 = __commonJS({
    "node_modules/@forge/bridge/out/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.i18n = exports.NavigationTarget = void 0;
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      var targets_1 = require_targets();
      Object.defineProperty(exports, "NavigationTarget", { enumerable: true, get: function() {
        return targets_1.NavigationTarget;
      } });
      tslib_1.__exportStar(require_invoke2(), exports);
      tslib_1.__exportStar(require_invoke_endpoint2(), exports);
      tslib_1.__exportStar(require_view2(), exports);
      tslib_1.__exportStar(require_router2(), exports);
      tslib_1.__exportStar(require_modal2(), exports);
      tslib_1.__exportStar(require_fetch2(), exports);
      tslib_1.__exportStar(require_flag2(), exports);
      tslib_1.__exportStar(require_events2(), exports);
      tslib_1.__exportStar(require_realtime2(), exports);
      tslib_1.__exportStar(require_rovo2(), exports);
      exports.i18n = tslib_1.__importStar(require_i18n());
      tslib_1.__exportStar(require_permissions2(), exports);
      tslib_1.__exportStar(require_object_store(), exports);
      tslib_1.__exportStar(require_featureFlags2(), exports);
    }
  });

  // src/app.js
  var require_app = __commonJS({
    "src/app.js"() {
      var import_bridge = __toESM(require_out2());
      var DEBOUNCE_MS = 600;
      var STATUS_CONFIG = {
        untested: { icon: "\u{1F9EA}", text: "Test Status", label: "Untested" },
        passed: { icon: "\u2705", text: "Test Passed", label: "Passed" },
        failed: { icon: "\u274C", text: "Test Failed", label: "Failed" },
        blocked: { icon: "\u{1F6AB}", text: "Blocked", label: "Blocked" },
        in_progress: { icon: "\u{1F504}", text: "Testing in Progress", label: "In Progress" }
      };
      var currentIssueId = null;
      var currentStatus = "untested";
      var saveTimeout = null;
      var pendingStatusSave = null;
      var elements = {};
      async function init() {
        console.log("[QuickTest] Initializing v2.7.0...");
        cacheElements();
        setupEventListeners();
        try {
          const context = await import_bridge.view.getContext();
          currentIssueId = context?.extension?.issue?.id;
          if (!currentIssueId) {
            showError("Could not get issue context");
            return;
          }
          await loadTestCase();
          showMainContent();
        } catch (error) {
          console.error("[QuickTest] Init error:", error);
          showError("Failed to initialize");
        }
      }
      function cacheElements() {
        elements.loadingState = document.getElementById("loading-state");
        elements.mainContent = document.getElementById("main-content");
        elements.errorState = document.getElementById("error-state");
        elements.statusDisplay = document.getElementById("status-display");
        elements.statusIcon = document.getElementById("status-icon");
        elements.statusText = document.getElementById("status-text");
        elements.testNotes = document.getElementById("test-notes");
        elements.saveIndicator = document.getElementById("save-indicator");
        elements.historyCount = document.getElementById("history-count");
        elements.historyList = document.getElementById("history-list");
        elements.emptyHistory = document.getElementById("empty-history");
        elements.lastUpdated = document.getElementById("last-updated");
        elements.errorMessage = document.getElementById("error-message");
      }
      function setupEventListeners() {
        document.querySelectorAll(".action-btn").forEach((btn) => {
          btn.addEventListener("click", (e) => {
            e.preventDefault();
            const status = btn.dataset.status;
            if (status) updateStatus(status);
          });
        });
        document.getElementById("btn-reset")?.addEventListener("click", (e) => {
          e.preventDefault();
          resetTestCase();
        });
        document.getElementById("test-notes")?.addEventListener("input", handleNotesInput);
        document.getElementById("retry-btn")?.addEventListener("click", () => location.reload());
      }
      async function loadTestCase() {
        try {
          const response = await (0, import_bridge.invoke)("getTestCase", { issueId: currentIssueId });
          if (response?.success && response.testCase) {
            updateUI(response.testCase);
          } else {
            updateUI({ status: "untested", notes: "", runs: [] });
          }
        } catch (error) {
          console.error("[QuickTest] Load error:", error);
          updateUI({ status: "untested", notes: "", runs: [] });
        }
      }
      function updateUI(testCase) {
        currentStatus = testCase.status || "untested";
        const config = STATUS_CONFIG[currentStatus] || STATUS_CONFIG.untested;
        if (elements.statusIcon) elements.statusIcon.textContent = config.icon;
        if (elements.statusText) elements.statusText.textContent = config.text;
        if (elements.statusDisplay) {
          elements.statusDisplay.className = "status-display";
          if (currentStatus !== "untested") {
            elements.statusDisplay.classList.add(currentStatus);
          }
        }
        updateButtonStates(currentStatus);
        if (elements.testNotes && testCase.notes !== void 0) {
          elements.testNotes.value = testCase.notes || "";
        }
        if (elements.lastUpdated && testCase.updatedAt) {
          elements.lastUpdated.textContent = formatTime(testCase.updatedAt);
        }
        updateHistory(testCase.runs || []);
      }
      function updateButtonStates(status) {
        document.querySelectorAll(".action-btn").forEach((btn) => {
          btn.classList.toggle("active", btn.dataset.status === status);
        });
      }
      function updateStatus(newStatus) {
        if (newStatus === currentStatus) return;
        currentStatus = newStatus;
        const config = STATUS_CONFIG[newStatus];
        if (elements.statusIcon) elements.statusIcon.textContent = config.icon;
        if (elements.statusText) elements.statusText.textContent = config.text;
        if (elements.statusDisplay) {
          elements.statusDisplay.className = `status-display ${newStatus}`;
        }
        updateButtonStates(newStatus);
        showSaveIndicator("saving", "Saving...");
        if (pendingStatusSave) {
          pendingStatusSave.cancelled = true;
        }
        const saveRequest = { cancelled: false, status: newStatus };
        pendingStatusSave = saveRequest;
        saveStatusToBackend(saveRequest);
      }
      async function saveStatusToBackend(saveRequest) {
        try {
          const notes = elements.testNotes?.value || "";
          const response = await (0, import_bridge.invoke)("updateStatus", {
            issueId: currentIssueId,
            status: saveRequest.status,
            notes
          });
          if (saveRequest.cancelled) return;
          if (response?.success) {
            showSaveIndicator("saved", "\u2713 Saved");
            if (response.testCase) {
              updateHistory(response.testCase.runs || []);
              if (response.testCase.updatedAt && elements.lastUpdated) {
                elements.lastUpdated.textContent = formatTime(response.testCase.updatedAt);
              }
            }
            setTimeout(() => hideSaveIndicator(), 1500);
          } else {
            throw new Error(response?.error || "Save failed");
          }
        } catch (error) {
          if (saveRequest.cancelled) return;
          console.error("[QuickTest] Save error:", error);
          showSaveIndicator("error", "\u2717 Error");
          setTimeout(() => hideSaveIndicator(), 2e3);
        }
      }
      function handleNotesInput() {
        if (saveTimeout) clearTimeout(saveTimeout);
        saveTimeout = setTimeout(async () => {
          showSaveIndicator("saving", "Saving...");
          try {
            const notes = elements.testNotes?.value || "";
            const response = await (0, import_bridge.invoke)("updateNotes", {
              issueId: currentIssueId,
              notes
            });
            if (response?.success) {
              showSaveIndicator("saved", "\u2713 Saved");
              if (response.testCase?.updatedAt && elements.lastUpdated) {
                elements.lastUpdated.textContent = formatTime(response.testCase.updatedAt);
              }
              setTimeout(() => hideSaveIndicator(), 1500);
            } else {
              throw new Error(response?.error || "Save failed");
            }
          } catch (error) {
            console.error("[QuickTest] Save notes error:", error);
            showSaveIndicator("error", "\u2717 Error");
            setTimeout(() => hideSaveIndicator(), 2e3);
          }
        }, DEBOUNCE_MS);
      }
      async function resetTestCase() {
        if (currentStatus === "untested" && !elements.testNotes?.value?.trim()) return;
        currentStatus = "untested";
        if (elements.testNotes) elements.testNotes.value = "";
        updateUI({ status: "untested", notes: "", runs: [] });
        showSaveIndicator("saving", "Resetting...");
        try {
          const response = await (0, import_bridge.invoke)("resetTestCase", { issueId: currentIssueId });
          if (response?.success) {
            if (response.testCase) updateUI(response.testCase);
            showSaveIndicator("saved", "\u2713 Reset");
            setTimeout(() => hideSaveIndicator(), 1500);
          } else {
            throw new Error(response?.error || "Reset failed");
          }
        } catch (error) {
          console.error("[QuickTest] Reset error:", error);
          showSaveIndicator("error", "\u2717 Error");
          setTimeout(() => hideSaveIndicator(), 2e3);
        }
      }
      function updateHistory(runs) {
        if (!elements.historyCount || !elements.historyList || !elements.emptyHistory) return;
        const count = runs?.length || 0;
        elements.historyCount.textContent = `${count} run${count !== 1 ? "s" : ""}`;
        if (count === 0) {
          elements.emptyHistory.style.display = "block";
          elements.historyList.innerHTML = "";
          return;
        }
        elements.emptyHistory.style.display = "none";
        elements.historyList.innerHTML = runs.map((run) => {
          const config = STATUS_CONFIG[run.status] || STATUS_CONFIG.untested;
          return `
            <div class="history-item ${run.status || "untested"}">
                <div class="history-item-content">
                    <div class="history-item-header">
                        <span class="history-item-status">${config.label}</span>
                        <span class="history-item-time">${formatTime(run.timestamp)}</span>
                    </div>
                    ${run.notes ? `<div class="history-item-notes">${escapeHtml(run.notes)}</div>` : ""}
                </div>
            </div>
        `;
        }).join("");
      }
      function formatTime(isoDate) {
        if (!isoDate) return "";
        try {
          const date = new Date(isoDate);
          const now = /* @__PURE__ */ new Date();
          const diffMs = now - date;
          const diffMins = Math.floor(diffMs / 6e4);
          const diffHours = Math.floor(diffMins / 60);
          const diffDays = Math.floor(diffHours / 24);
          if (diffMins < 1) return "Just now";
          if (diffMins < 60) return `${diffMins}m ago`;
          if (diffHours < 24) return `${diffHours}h ago`;
          if (diffDays < 7) return `${diffDays}d ago`;
          return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
        } catch (e) {
          return "";
        }
      }
      function showSaveIndicator(status, text) {
        if (elements.saveIndicator) {
          elements.saveIndicator.className = `save-indicator ${status}`;
          elements.saveIndicator.textContent = text;
          elements.saveIndicator.style.display = "inline-block";
        }
      }
      function hideSaveIndicator() {
        if (elements.saveIndicator) {
          elements.saveIndicator.textContent = "";
          elements.saveIndicator.className = "save-indicator";
          elements.saveIndicator.style.display = "none";
        }
      }
      function showMainContent() {
        if (elements.loadingState) elements.loadingState.style.display = "none";
        if (elements.mainContent) elements.mainContent.style.display = "block";
        if (elements.errorState) elements.errorState.style.display = "none";
      }
      function showError(message) {
        if (elements.loadingState) elements.loadingState.style.display = "none";
        if (elements.mainContent) elements.mainContent.style.display = "none";
        if (elements.errorState) elements.errorState.style.display = "flex";
        if (elements.errorMessage) elements.errorMessage.textContent = message;
      }
      function escapeHtml(text) {
        if (!text) return "";
        const div = document.createElement("div");
        div.textContent = text;
        return div.innerHTML;
      }
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
      } else {
        init();
      }
    }
  });
  require_app();
})();
