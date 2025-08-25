import type { PxToRemConfigType } from './types'
import { defineConfig, presetAttributify, presetIcons, presetWind3, transformerAttributifyJsx, transformerCompileClass, transformerDirectives, transformerVariantGroup } from 'unocss'
import breakpoints from './breakpoints'
import shortcuts from './shortcuts'
import { pxToRemPreset } from './units'

export function webRemConfig(pxToRemconfig: PxToRemConfigType = {}) {
    return defineConfig({
        shortcuts,
        presets: [
            /**
             * 默认预设
             * @see https://unocss.dev/presets/uno
             */
            presetWind3(),
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
            pxToRemPreset(pxToRemconfig),
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
            transformerCompileClass(),
            /**
             * 开启jsx文件的属性模式
             * @see https://unocss.dev/transformers/attributify-jsx
             * @example ```
             * export function Component() {
             *   return ( <div text-red text-center text-5xl animate-bounce>unocss</div> )
             * }
             * ```
             */
            transformerAttributifyJsx(),
        ],
        safelist: [],
        rules: [],
        theme: {
            breakpoints,
        },
    })
}

export const datavConfig = webRemConfig
