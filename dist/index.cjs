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
var index_exports = {};
__export(index_exports, {
  adminConfig: () => adminConfig,
  datavConfig: () => datavConfig,
  h5Config: () => h5Config,
  uniappConfig: () => uniappConfig,
  webConfig: () => webConfig,
  webRemConfig: () => webRemConfig
});
module.exports = __toCommonJS(index_exports);

// node_modules/.pnpm/@unocss+core@66.6.8/node_modules/@unocss/core/dist/index.mjs
var LAYER_DEFAULT = "default";
var LAYER_PREFLIGHTS = "preflights";
var LAYER_SHORTCUTS = "shortcuts";
var LAYER_IMPORTS = "imports";
var DEFAULT_LAYERS = {
  [LAYER_IMPORTS]: -200,
  [LAYER_PREFLIGHTS]: -100,
  [LAYER_SHORTCUTS]: -10,
  [LAYER_DEFAULT]: 0
};
function definePreset(preset) {
  return preset;
}

// node_modules/.pnpm/@unocss+preset-legacy-compat@66.6.8/node_modules/@unocss/preset-legacy-compat/dist/index.mjs
function toCommaStyleColorFunction(str) {
  return str.replace(/((?:rgb|hsl)a?)\(([^)]+)\)/g, (_, fn, v) => {
    const [rgb, alpha] = v.split(/\//g).map((i) => i.trim());
    if (alpha && !fn.endsWith("a")) fn += "a";
    const parts = rgb.split(/,?\s+/).map((i) => i.trim());
    if (alpha) parts.push(alpha);
    return `${fn}(${parts.filter(Boolean).join(", ")})`;
  });
}
var presetLegacyCompat = definePreset((options = {}) => {
  const { commaStyleColorFunction = false, legacyColorSpace = false } = options;
  return {
    name: "@unocss/preset-legacy-compat",
    postprocess: (util) => {
      util.entries.forEach((i) => {
        let value = i[1];
        if (typeof value !== "string") return;
        if (commaStyleColorFunction) value = toCommaStyleColorFunction(value);
        if (value !== i[1]) i[1] = value;
        if (legacyColorSpace) i[1] = i[1].replace(/\s*in (oklch|oklab)/g, "");
      });
    }
  };
});

// src/uno.h5.config.ts
var import_unocss = require("unocss");

// src/breakpoints.ts
var breakpoints = {
  xs: "320px",
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1600px",
  s320: "320px",
  m320: "320.1px",
  s480: "480px",
  m480: "480.1px",
  s768: "768px",
  m768: "768.1px",
  s1024: "1024px",
  m1024: "1024.1px",
  s1280: "1280px",
  m1280: "1280.1px",
  s1440: "1440px",
  m1440: "1440.1px",
  s1600: "1600px",
  m1600: "1600.1px"
};
var breakpoints_default = breakpoints;

// src/shortcuts.ts
var shortcuts = [
  [
    "custom-btn",
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
  ["line-4", "text-truncate line-clamp-4"],
  ["text-xs", "text-12px lh-16px"],
  ["text-sm", "text-14px lh-20px"],
  ["text-tiny", "text-14px lh-20px"],
  ["text-base", "text-16px lh-24px"],
  ["text-lg", "text-18px lh-28px"],
  ["text-xl", "text-20px lh-28px"],
  ["text-2xl", "text-24px lh-32px"],
  ["text-3xl", "text-30px lh-36px"],
  ["text-4xl", "text-36px lh-40px"],
  ["text-5xl", "text-48px lh-60px"],
  ["text-6xl", "text-64px lh-72px"],
  ["text-7xl", "text-80px lh-88px"],
  ["text-8xl", "text-96px lh-104px"],
  ["text-9xl", "text-128px lh-136px"]
];
var shortcuts_default = shortcuts;

// src/units.ts
var pxRE = /(-?[.\d]+)px/g;
var remRE = /(-?[.\d]+)rem/g;
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

// src/uno.h5.config.ts
function h5Config(pxToRemconfig = {}, preset = "wind3", presetConfig = {}) {
  const presets2 = [
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
    }),
    pxToRemPreset(pxToRemconfig)
  ];
  if (preset === "wind4") {
    presets2.push((0, import_unocss.presetWind4)(presetConfig));
  } else if (preset === "mini") {
    presets2.push((0, import_unocss.presetMini)(presetConfig));
  } else if (preset === "wind3") {
    presets2.push((0, import_unocss.presetWind3)(presetConfig));
  }
  if (preset !== "wind4") {
    presets2.push(presetLegacyCompat({
      commaStyleColorFunction: true,
      legacyColorSpace: true
    }));
  }
  return (0, import_unocss.defineConfig)({
    shortcuts: shortcuts_default,
    presets: presets2,
    transformers: [
      /**
       * 开启jsx文件的属性模式
       * @see https://unocss.dev/transformers/attributify-jsx
       */
      (0, import_unocss.transformerAttributifyJsx)(),
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
      (0, import_unocss.transformerCompileClass)()
    ],
    safelist: [],
    rules: [],
    theme: {
      breakpoints: breakpoints_default
    }
  });
}

// src/uno.uniapp.config.ts
var import_node_process = __toESM(require("process"), 1);
var import_unocss2 = require("unocss");
var import_unocss_applet = require("unocss-applet");
var isApplet = import_node_process.default.env?.UNI_PLATFORM?.startsWith("mp-") ?? false;
var presets = [];
var transformers = [];
function uniappConfig(pxToRemConfig = {}, wxAttrConfig = true, preset = "wind3", presetConfig = {}) {
  const disableAttr = typeof wxAttrConfig === "boolean" ? wxAttrConfig : false;
  const attrConfig = typeof wxAttrConfig === "boolean" ? {} : wxAttrConfig;
  if (isApplet) {
    presets.push((0, import_unocss_applet.presetApplet)());
    if (!disableAttr)
      transformers.push((0, import_unocss_applet.transformerAttributify)(attrConfig));
  } else {
    if (preset === "wind4") {
      presets.push((0, import_unocss2.presetWind4)(presetConfig));
    } else if (preset === "mini") {
      presets.push((0, import_unocss2.presetMini)(presetConfig));
    } else if (preset === "wind3") {
      presets.push((0, import_unocss2.presetWind3)(presetConfig));
    }
    if (preset !== "wind4") {
      presets.push(presetLegacyCompat({
        commaStyleColorFunction: true,
        legacyColorSpace: true
      }));
    }
    if (!disableAttr)
      presets.push((0, import_unocss2.presetAttributify)());
  }
  return (0, import_unocss2.defineConfig)({
    presets: [
      // 由 Iconify 提供支持的纯 CSS 图标解决方案
      (0, import_unocss2.presetIcons)({
        scale: 1,
        warn: true
      }),
      ...presets,
      ...[pxToRemPreset(pxToRemConfig)]
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
      ...transformers
    ],
    theme: {
      breakpoints: breakpoints_default
    }
  });
}

// src/uno.web.config.ts
var import_unocss3 = require("unocss");
function webConfig(preset = "wind3", presetConfig = {}) {
  const presets2 = [
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
    })
  ];
  if (preset === "wind4") {
    presets2.push((0, import_unocss3.presetWind4)(presetConfig));
  } else if (preset === "mini") {
    presets2.push((0, import_unocss3.presetMini)(presetConfig));
  } else if (preset === "wind3") {
    presets2.push((0, import_unocss3.presetWind3)(presetConfig));
  }
  if (preset !== "wind4") {
    presets2.push(presetLegacyCompat({
      commaStyleColorFunction: true,
      legacyColorSpace: true
    }));
  }
  return (0, import_unocss3.defineConfig)({
    shortcuts: shortcuts_default,
    presets: presets2,
    transformers: [
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
      (0, import_unocss3.transformerCompileClass)(),
      /**
       * 开启jsx文件的属性模式
       * @see https://unocss.dev/transformers/attributify-jsx
       * @example ```
       * export function Component() {
       *   return ( <div text-red text-center text-5xl animate-bounce>unocss</div> )
       * }
       * ```
       */
      (0, import_unocss3.transformerAttributifyJsx)()
    ],
    safelist: ["svg-text1", "svg-text2"],
    rules: [],
    theme: {
      breakpoints: breakpoints_default
    }
  });
}
var adminConfig = webConfig;

// src/uno.web.rem.config.ts
var import_unocss4 = require("unocss");
function webRemConfig(pxToRemconfig = {}, preset = "wind3", presetConfig = {}) {
  const presets2 = [
    /**
     * 开启属性模式
     * @see https://unocss.dev/presets/attributify
     * @example <div text="sm white" font="mono light"></div>
     */
    (0, import_unocss4.presetAttributify)(),
    /**
     * 开启自定义图标模式
     * @see https://unocss.dev/presets/icons
     * @example <div i-<collection>-<icon></div>
     */
    (0, import_unocss4.presetIcons)({
      prefix: "i-"
    }),
    pxToRemPreset(pxToRemconfig)
  ];
  if (preset === "wind4") {
    presets2.push((0, import_unocss4.presetWind4)(presetConfig));
  } else if (preset === "mini") {
    presets2.push((0, import_unocss4.presetMini)(presetConfig));
  } else if (preset === "wind3") {
    presets2.push((0, import_unocss4.presetWind3)(presetConfig));
  }
  if (preset !== "wind4") {
    presets2.push(presetLegacyCompat({
      commaStyleColorFunction: true,
      legacyColorSpace: true
    }));
  }
  return (0, import_unocss4.defineConfig)({
    shortcuts: shortcuts_default,
    presets: presets2,
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
      /**
       * 开启jsx文件的属性模式
       * @see https://unocss.dev/transformers/attributify-jsx
       * @example ```
       * export function Component() {
       *   return ( <div text-red text-center text-5xl animate-bounce>unocss</div> )
       * }
       * ```
       */
      (0, import_unocss4.transformerAttributifyJsx)()
    ],
    safelist: [],
    rules: [],
    theme: {
      breakpoints: breakpoints_default
    }
  });
}
var datavConfig = webRemConfig;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  adminConfig,
  datavConfig,
  h5Config,
  uniappConfig,
  webConfig,
  webRemConfig
});
