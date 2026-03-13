import type { UserConfig } from 'unocss'
import type { PresetMiniOptions, Theme as ThemeMini } from 'unocss/preset-mini'
import type { PresetWind3Options } from 'unocss/preset-wind3'
import type { PresetWind4Options, Theme as ThemeWind4 } from 'unocss/preset-wind4'
import type { PxToRemConfigType } from './types'
import presetLegacyCompat from '@unocss/preset-legacy-compat'
import { defineConfig, presetAttributify, presetIcons, presetMini, presetWind3, presetWind4, transformerAttributifyJsx, transformerCompileClass, transformerDirectives, transformerVariantGroup } from 'unocss'
import breakpoints from './breakpoints'
import shortcuts from './shortcuts'
import { pxToRemPreset } from './units'

export function h5Config(pxToRemconfig?: PxToRemConfigType, preset?: 'wind3', presetConfig?: PresetWind3Options): UserConfig<ThemeMini>
export function h5Config(pxToRemconfig?: PxToRemConfigType, preset?: 'wind4', presetConfig?: PresetWind4Options): UserConfig<ThemeWind4>
export function h5Config(pxToRemconfig?: PxToRemConfigType, preset?: 'mini', presetConfig?: PresetMiniOptions): UserConfig<ThemeMini>
/**
 * 配置H5环境下的UnoCSS
 * @param pxToRemconfig px转rem/rpx配置选项
 * @param preset 使用的预设类型，可选'wind3'、'wind4'、'mini'、false，默认为'wind3'
 * @returns UnoCSS配置对象
 */
export function h5Config(pxToRemconfig: PxToRemConfigType = {}, preset: 'wind3' | 'wind4' | 'mini' | false = 'wind3', presetConfig: any = {}) {
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

    // 根据传入的preset参数决定使用哪个预设
    if (preset === 'wind4') {
        presets.push(presetWind4(presetConfig))
    }
    else if (preset === 'mini') {
        presets.push(presetMini(presetConfig))
    }
    else if (preset === 'wind3') {
        presets.push(presetWind3(presetConfig))
    }

    return defineConfig({
        shortcuts,
        presets,
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
        ],
        safelist: [],
        rules: [],
        theme: {
            breakpoints,
        },
    })
}
