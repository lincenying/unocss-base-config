// src/uno.admin.config.ts
import { defineConfig, presetAttributify, presetIcons, presetUno, transformerCompileClass, transformerDirectives, transformerVariantGroup } from "unocss";

// src/shortcuts.ts
var shortcuts = [
  ["btn", "px-8px py-1px rounded inline-block bg-hex-3aced5ff text-white text-13px cursor-pointer !outline-none hover:bg-hex-3aced5ee disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50"],
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

// src/uno.admin.config.ts
function adminConfig() {
  return defineConfig({
    shortcuts: shortcuts_default,
    presets: [
      /**
       * 默认预设
       * @see https://unocss.dev/presets/uno
       */
      presetUno(),
      /**
       * 开启属性模式
       * @see https://unocss.dev/presets/attributify
       * @example <div text="sm white" font="mono light"></div>
       */
      presetAttributify(),
      /**
       * 开启自定义图标模式
       * @see https://unocss.dev/presets/icons
       * @example <div i-<collection>-<icon></div>
       */
      presetIcons({
        prefix: "i-"
      })
    ],
    transformers: [
      /**
       * 启用 --uno: 功能
       * @see https://unocss.dev/transformers/directives
       * @example .custom-div { --uno: text-center my-0 font-medium; }
       */
      transformerDirectives(),
      /**
       * 启用 () 分组功能
       * @see https://unocss.dev/transformers/variant-group
       * @example <div class="hover:(bg-gray-400 font-medium) font-(light mono)"/>
       */
      transformerVariantGroup(),
      /**
       * 将一组classes编译为一个class
       * @see https://unocss.dev/transformers/compile-class
       * @example <div class=":uno: text-sm font-bold hover:text-red"/>
       */
      transformerCompileClass()
    ],
    safelist: "svg-text1 svg-text2".split(" "),
    rules: []
  });
}

// src/uno.datav.config.ts
import { defineConfig as defineConfig2, presetAttributify as presetAttributify2, presetIcons as presetIcons2, presetUno as presetUno2, transformerCompileClass as transformerCompileClass2, transformerDirectives as transformerDirectives2, transformerVariantGroup as transformerVariantGroup2 } from "unocss";

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

// src/uno.datav.config.ts
function datavConfig(config = {}) {
  return defineConfig2({
    shortcuts: shortcuts_default,
    presets: [
      /**
       * 默认预设
       * @see https://unocss.dev/presets/uno
       */
      presetUno2(),
      /**
       * 开启属性模式
       * @see https://unocss.dev/presets/attributify
       * @example <div text="sm white" font="mono light"></div>
       */
      presetAttributify2(),
      /**
       * 开启自定义图标模式
       * @see https://unocss.dev/presets/icons
       * @example <div i-<collection>-<icon></div>
       */
      presetIcons2({
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
      transformerDirectives2(),
      /**
       * 启用 () 分组功能
       * @see https://unocss.dev/transformers/variant-group
       * @example <div class="hover:(bg-gray-400 font-medium) font-(light mono)"/>
       */
      transformerVariantGroup2(),
      /**
       * 将一组classes编译为一个class
       * @see https://unocss.dev/transformers/compile-class
       * @example <div class=":uno: text-sm font-bold hover:text-red"/>
       */
      transformerCompileClass2()
    ],
    safelist: "svg-text1 svg-text2".split(" "),
    rules: []
  });
}

// src/uno.h5.config.ts
import { defineConfig as defineConfig3, presetAttributify as presetAttributify3, presetIcons as presetIcons3, presetUno as presetUno3, transformerAttributifyJsx, transformerCompileClass as transformerCompileClass3, transformerDirectives as transformerDirectives3, transformerVariantGroup as transformerVariantGroup3 } from "unocss";
function h5Config(config = {}) {
  return defineConfig3({
    shortcuts: shortcuts_default,
    presets: [
      /**
       * 默认预设
       * @see https://unocss.dev/presets/uno
       */
      presetUno3(),
      /**
       * 开启属性模式
       * @see https://unocss.dev/presets/attributify
       * @example <div text="sm white" font="mono light"></div>
       */
      presetAttributify3(),
      /**
       * 开启自定义图标模式
       * @see https://unocss.dev/presets/icons
       * @example <div i-<collection>-<icon></div>
       */
      presetIcons3({
        prefix: "i-"
      }),
      pxToRemPreset(config)
    ],
    transformers: [
      /**
       * 开启jsx文件的属性模式
       * @see https://unocss.dev/transformers/attributify-jsx
       */
      transformerAttributifyJsx(),
      /**
       * 启用 --uno: 功能
       * @see https://unocss.dev/transformers/directives
       * @example .custom-div { --uno: text-center my-0 font-medium; }
       */
      transformerDirectives3(),
      /**
       * 启用 () 分组功能
       * @see https://unocss.dev/transformers/variant-group
       * @example <div class="hover:(bg-gray-400 font-medium) font-(light mono)"/>
       */
      transformerVariantGroup3(),
      /**
       * 将一组classes编译为一个class
       * @see https://unocss.dev/transformers/compile-class
       * @example <div class=":uno: text-sm font-bold hover:text-red"/>
       */
      transformerCompileClass3()
    ],
    safelist: "svg-text1 svg-text2".split(" "),
    rules: []
  });
}

// src/uno.uniapp.config.ts
import process from "process";
import { defineConfig as defineConfig4, presetAttributify as presetAttributify4, presetIcons as presetIcons4, presetUno as presetUno4, transformerCompileClass as transformerCompileClass4, transformerDirectives as transformerDirectives4, transformerVariantGroup as transformerVariantGroup4 } from "unocss";
import { presetApplet, transformerApplet, transformerAttributify } from "unocss-applet";
var isApplet = process.env?.UNI_PLATFORM?.startsWith("mp-") ?? false;
var presets = [];
var transformers = [];
if (isApplet) {
  presets.push(presetApplet());
  transformers.push(transformerAttributify());
  transformers.push(transformerApplet());
} else {
  presets.push(presetUno4());
  presets.push(presetAttributify4());
}
function uniappConfig(config = {}) {
  return defineConfig4({
    presets: [
      // 由 Iconify 提供支持的纯 CSS 图标解决方案
      presetIcons4({
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
      transformerDirectives4(),
      /**
       * 启用 () 分组功能
       * @see https://unocss.dev/transformers/variant-group
       * @example <div class="hover:(bg-gray-400 font-medium) font-(light mono)"/>
       */
      transformerVariantGroup4(),
      /**
       * 将一组classes编译为一个class
       * @see https://unocss.dev/transformers/compile-class
       * @example <div class=":uno: text-sm font-bold hover:text-red"/>
       */
      transformerCompileClass4(),
      ...transformers
    ]
  });
}
export {
  adminConfig,
  datavConfig,
  h5Config,
  uniappConfig
};
