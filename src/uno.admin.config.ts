import { defineConfig, presetAttributify, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'
import shortcuts from './shortcuts'

export default () => defineConfig({
    shortcuts,
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
            prefix: 'i-',
        }),
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
    ],
    safelist: 'svg-text1 svg-text2'.split(' '),
    rules: [],
})
