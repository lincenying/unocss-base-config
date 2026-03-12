import type { PxToRemConfigType } from './types'
import presetLegacyCompat from '@unocss/preset-legacy-compat'
import { defineConfig, presetAttributify, presetIcons, presetMini, presetWind3, presetWind4, transformerAttributifyJsx, transformerCompileClass, transformerDirectives, transformerVariantGroup } from 'unocss'
import breakpoints from './breakpoints'
import shortcuts from './shortcuts'
import { pxToRemPreset } from './units'

/**
 * 创建适用于Web端的UnoCSS配置（使用rem单位）
 * @param pxToRemconfig - px转rem的配置选项
 * @param pxToRemconfig.baseFontSize - 基准字体大小，默认为100
 * @param pxToRemconfig.noneUnti2Rem - 是否将无单位属性还原成rem单位
 * @param pxToRemconfig.unti - 转换的目标单位
 * @param preset - 使用的预设类型，可选'wind3'、'wind4'、'mini'、false，默认为'wind3'
 * @returns UnoCSS的配置对象
 */
export function webRemConfig(pxToRemconfig: PxToRemConfigType = {}, preset: 'wind3' | 'wind4' | 'mini' = 'wind3') {
    const presets = [

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
        presetLegacyCompat({
            commaStyleColorFunction: true,
            legacyColorSpace: true,
        }),
    ]

    if (preset === 'wind4') {
        presets.push(presetWind4())
    }
    else if (preset === 'mini') {
        presets.push(presetMini({
            preflight: 'on-demand',
        }))
    }
    else if (preset === 'wind3') {
        presets.push(presetWind3({
            preflight: 'on-demand',
        }))
    }

    return defineConfig({
        shortcuts,
        presets,
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
