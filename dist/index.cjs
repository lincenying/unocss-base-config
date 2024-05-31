"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  adminConfig: () => adminConfig,
  datavConfig: () => datavConfig,
  h5Config: () => h5Config,
  uniappConfig: () => uniappConfig,
  webConfig: () => webConfig,
  webRemConfig: () => webRemConfig
});
module.exports = __toCommonJS(src_exports);

// src/uno.web.config.ts
var import_unocss = require("unocss");

// src/shortcuts.ts
var shortcuts = [
  [
    "btn",
    "px-8px py-1px rounded inline-block bg-hex-3aced5ff text-white text-13px cursor-pointer !outline-none hover:bg-hex-3aced5ee disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50"
  ],
  ["icon-btn", "inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-hex-3aced5dd"],
  ["flex--c", "flex justify-start items-center"],
  ["flex-c-", "flex justify-center items-stretch"],
  ["flex-cc", "flex justify-center items-center"],
  ["flex-bc", "flex justify-between items-center"],
  ["flex-ac", "flex justify-around items-center"],
  ["canvas", "absolute top-0 left-0 w-full h-full"],
  ["line-1", "text-truncate"],
  ["line-2", "text-truncate line-clamp-2"],
  ["line-3", "text-truncate line-clamp-3"],
  ["line-4", "text-truncate line-clamp-4"]
];
var shortcuts_default = shortcuts;

// src/uno.web.config.ts
function webConfig() {
  return (0, import_unocss.defineConfig)({
    shortcuts: shortcuts_default,
    presets: [
      /**
       * 默认预设
       * @see https://unocss.dev/presets/uno
       */
      (0, import_unocss.presetUno)(),
      /**
       * 开启属性模式
       * @see https://unocss.dev/presets/attributify
       * @example <div text="sm white" font="mono light"></div>
       */
      (0, import_unocss.presetAttributify)(),
      /**
       * 开启自定义图标模式
       * @see https://unocss.dev/presets/icons
       * @example <div i-<collection>-<icon></div>
       */
      (0, import_unocss.presetIcons)({
        prefix: "i-"
      })
    ],
    transformers: [
      /**
       * 启用 --uno: 功能
       * @see https://unocss.dev/transformers/directives
       * @example .custom-div { --uno: text-center my-0 font-medium; }
       */
      (0, import_unocss.transformerDirectives)(),
      /**
       * 启用 () 分组功能
       * @see https://unocss.dev/transformers/variant-group
       * @example <div class="hover:(bg-gray-400 font-medium) font-(light mono)"/>
       */
      (0, import_unocss.transformerVariantGroup)(),
      /**
       * 将一组classes编译为一个class
       * @see https://unocss.dev/transformers/compile-class
       * @example <div class=":uno: text-sm font-bold hover:text-red"/>
       */
      (0, import_unocss.transformerCompileClass)(),
      /**
       * 开启jsx文件的属性模式
       * @see https://unocss.dev/transformers/attributify-jsx
       * @example ```
       * export function Component() {
       *   return ( <div text-red text-center text-5xl animate-bounce>unocss</div> )
       * }
       * ```
       */
      (0, import_unocss.transformerAttributifyJsx)()
    ],
    safelist: "svg-text1 svg-text2".split(" "),
    rules: []
  });
}
var adminConfig = webConfig;

// src/uno.web.rem.config.ts
var import_unocss2 = require("unocss");

// src/units.ts
var pxRE = /(-?[\.\d]+)px/g;
var remRE = /(-?[\.\d]+)rem/g;
function pxToRemPreset(options = {}) {
  const { baseFontSize = 100, noneUnti2Rem = false, unti = "rem" } = options;
  return {
    name: "unocss-preset-px-to-rem",
    postprocess: (util) => {
      util.entries.forEach((i) => {
        const value = i[1];
        if (value && typeof value === "string" && pxRE.test(value))
          i[1] = value.replace(pxRE, (_, p1) => `${p1 / baseFontSize}${unti}`);
        if (noneUnti2Rem) {
          if (value && typeof value === "string" && remRE.test(value))
            i[1] = value.replace(remRE, (_, p1) => `${p1 * 4 / baseFontSize}rem`);
        }
      });
    }
  };
}

// src/uno.web.rem.config.ts
function webRemConfig(config = {}) {
  return (0, import_unocss2.defineConfig)({
    shortcuts: shortcuts_default,
    presets: [
      /**
       * 默认预设
       * @see https://unocss.dev/presets/uno
       */
      (0, import_unocss2.presetUno)(),
      /**
       * 开启属性模式
       * @see https://unocss.dev/presets/attributify
       * @example <div text="sm white" font="mono light"></div>
       */
      (0, import_unocss2.presetAttributify)(),
      /**
       * 开启自定义图标模式
       * @see https://unocss.dev/presets/icons
       * @example <div i-<collection>-<icon></div>
       */
      (0, import_unocss2.presetIcons)({
        prefix: "i-"
      }),
      pxToRemPreset(config)
    ],
    transformers: [
      /**
       * 启用 --uno: 功能
       * @see https://unocss.dev/transformers/directives
       * @example .custom-div { --uno: text-center my-0 font-medium; }
       */
      (0, import_unocss2.transformerDirectives)(),
      /**
       * 启用 () 分组功能
       * @see https://unocss.dev/transformers/variant-group
       * @example <div class="hover:(bg-gray-400 font-medium) font-(light mono)"/>
       */
      (0, import_unocss2.transformerVariantGroup)(),
      /**
       * 将一组classes编译为一个class
       * @see https://unocss.dev/transformers/compile-class
       * @example <div class=":uno: text-sm font-bold hover:text-red"/>
       */
      (0, import_unocss2.transformerCompileClass)(),
      /**
       * 开启jsx文件的属性模式
       * @see https://unocss.dev/transformers/attributify-jsx
       * @example ```
       * export function Component() {
       *   return ( <div text-red text-center text-5xl animate-bounce>unocss</div> )
       * }
       * ```
       */
      (0, import_unocss2.transformerAttributifyJsx)()
    ],
    safelist: "svg-text1 svg-text2".split(" "),
    rules: []
  });
}
var datavConfig = webRemConfig;

// src/uno.h5.config.ts
var import_unocss3 = require("unocss");
function h5Config(config = {}) {
  return (0, import_unocss3.defineConfig)({
    shortcuts: shortcuts_default,
    presets: [
      /**
       * 默认预设
       * @see https://unocss.dev/presets/uno
       */
      (0, import_unocss3.presetUno)(),
      /**
       * 开启属性模式
       * @see https://unocss.dev/presets/attributify
       * @example <div text="sm white" font="mono light"></div>
       */
      (0, import_unocss3.presetAttributify)(),
      /**
       * 开启自定义图标模式
       * @see https://unocss.dev/presets/icons
       * @example <div i-<collection>-<icon></div>
       */
      (0, import_unocss3.presetIcons)({
        prefix: "i-"
      }),
      pxToRemPreset(config)
    ],
    transformers: [
      /**
       * 开启jsx文件的属性模式
       * @see https://unocss.dev/transformers/attributify-jsx
       */
      (0, import_unocss3.transformerAttributifyJsx)(),
      /**
       * 启用 --uno: 功能
       * @see https://unocss.dev/transformers/directives
       * @example .custom-div { --uno: text-center my-0 font-medium; }
       */
      (0, import_unocss3.transformerDirectives)(),
      /**
       * 启用 () 分组功能
       * @see https://unocss.dev/transformers/variant-group
       * @example <div class="hover:(bg-gray-400 font-medium) font-(light mono)"/>
       */
      (0, import_unocss3.transformerVariantGroup)(),
      /**
       * 将一组classes编译为一个class
       * @see https://unocss.dev/transformers/compile-class
       * @example <div class=":uno: text-sm font-bold hover:text-red"/>
       */
      (0, import_unocss3.transformerCompileClass)()
    ],
    safelist: "svg-text1 svg-text2".split(" "),
    rules: []
  });
}

// src/uno.uniapp.config.ts
var import_node_process = __toESM(require("process"), 1);
var import_unocss4 = require("unocss");
var import_unocss_applet = require("unocss-applet");
var isApplet = import_node_process.default.env?.UNI_PLATFORM?.startsWith("mp-") ?? false;
var presets = [];
var transformers = [];
if (isApplet) {
  presets.push((0, import_unocss_applet.presetApplet)());
  transformers.push((0, import_unocss_applet.transformerAttributify)());
} else {
  presets.push((0, import_unocss4.presetUno)());
  presets.push((0, import_unocss4.presetAttributify)());
}
function uniappConfig(config = {}) {
  return (0, import_unocss4.defineConfig)({
    presets: [
      // 由 Iconify 提供支持的纯 CSS 图标解决方案
      (0, import_unocss4.presetIcons)({
        scale: 1,
        warn: true
      }),
      ...presets,
      ...[pxToRemPreset(config)]
    ],
    /**
     * 自定义快捷语句
     * @see https://github.com/unocss/unocss#shortcuts
     */
    shortcuts: shortcuts_default,
    transformers: [
      /**
       * 启用 --uno: 功能
       * @see https://unocss.dev/transformers/directives
       * @example .custom-div { --uno: text-center my-0 font-medium; }
       */
      (0, import_unocss4.transformerDirectives)(),
      /**
       * 启用 () 分组功能
       * @see https://unocss.dev/transformers/variant-group
       * @example <div class="hover:(bg-gray-400 font-medium) font-(light mono)"/>
       */
      (0, import_unocss4.transformerVariantGroup)(),
      /**
       * 将一组classes编译为一个class
       * @see https://unocss.dev/transformers/compile-class
       * @example <div class=":uno: text-sm font-bold hover:text-red"/>
       */
      (0, import_unocss4.transformerCompileClass)(),
      ...transformers
    ]
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  adminConfig,
  datavConfig,
  h5Config,
  uniappConfig,
  webConfig,
  webRemConfig
});
