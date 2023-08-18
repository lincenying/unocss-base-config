import { defineConfig, presetAttributify, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'
import type { Preset } from '@unocss/core'

const pxRE = /(-?[\.\d]+)px/g
const remRE = /(-?[\.\d]+)rem/g

interface OpType {
    baseFontSize?: number
}

function pxToRemPreset(options: OpType = {}): Preset {
    const { baseFontSize = 100 } = options

    return {
        name: 'unocss-preset-px-to-rem',
        postprocess: (util) => {
            util.entries.forEach((i) => {
                const value = i[1]
                // 将px单位转成rem单位
                if (value && typeof value === 'string' && pxRE.test(value))
                    i[1] = value.replace(pxRE, (_, p1) => `${p1 / baseFontSize}rem`)
                // 将无单位生生的rem单位还原成自己需要的rem单位
                if (value && typeof value === 'string' && remRE.test(value))
                    i[1] = value.replace(remRE, (_, p1) => `${(p1 * 4) / baseFontSize}rem`)
            })
        },
    }
}

export default (fontSize: number) => defineConfig({
    shortcuts: [
        ['btn', 'px-8px py-1px rounded inline-block bg-hex-3aced5ff text-white text-13px cursor-pointer !outline-none hover:bg-hex-3aced5ee disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
        ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-hex-3aced5dd'],
        ['flex--c', 'flex items-center'],
        ['flex-cc', 'flex justify-center items-center'],
        ['flex-bc', 'flex justify-between items-center'],
        ['canvas', 'absolute top-0 left-0 w-full h-full'],
        ['line-1', 'text-truncate'],
        ['line-2', 'text-truncate line-clamp-2'],
        ['line-3', 'text-truncate line-clamp-3'],
        ['line-4', 'text-truncate line-clamp-4'],
    ],
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
        pxToRemPreset({ baseFontSize: fontSize }),
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
