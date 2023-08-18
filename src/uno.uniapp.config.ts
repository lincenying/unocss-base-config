import type { Preset, SourceCodeTransformer } from 'unocss'
import { defineConfig, presetAttributify, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'
import { presetApplet, transformerApplet, transformerAttributify } from 'unocss-applet'
import shortcuts from './shortcuts'

const pxRE = /(-?[\.\d]+)px/g
// const rpxRE = /(-?[\.\d]+)rpx/g

interface opType {
    baseFontSize?: number
}

function pxToRpxPreset(options: opType = {}): Preset {
    const { baseFontSize = 100 } = options

    return {
        name: 'unocss-preset-px-to-rpx',
        postprocess: (util) => {
            util.entries.forEach((i) => {
                const value = i[1]
                // 将px单位转成rpx单位
                if (value && typeof value === 'string' && pxRE.test(value))
                    i[1] = value.replace(pxRE, (_, p1) => `${p1 / baseFontSize}rpx`)
                // 将无单位生生的rpx单位还原成自己需要的rpx单位
                // if (value && typeof value === 'string' && rpxRE.test(value))
                //     i[1] = value.replace(rpxRE, (_, p1) => `${(p1 * 4) / baseFontSize}rpx`)
            })
        },
    }
}

const isApplet = process.env?.UNI_PLATFORM?.startsWith('mp-') ?? false

const presets: Preset[] = []
const transformers: SourceCodeTransformer[] = []

if (isApplet) {
    /**
   * UnoCSS Applet
   * @see https://github.com/unocss-applet/unocss-applet
   */
    presets.push(presetApplet())
    // presets.push(presetRemRpx()) // 如果需要使用 rem 转 rpx 单位，需要启用此插件
    transformers.push(transformerAttributify())
    transformers.push(transformerApplet())
}
else {
    /**
     * 默认预设
     * @see https://unocss.dev/presets/uno
     */
    presets.push(presetUno())
    /**
     * 开启属性模式
     * @see https://unocss.dev/presets/attributify
     * @example <div text="sm white" font="mono light"></div>
     */
    presets.push(presetAttributify())
}

presets.push(pxToRpxPreset({ baseFontSize: 1 }))

export default () => defineConfig({
    presets: [
        // 由 Iconify 提供支持的纯 CSS 图标解决方案
        presetIcons({
            scale: 1.0,
            warn: true,
        }),
        ...presets,
    ],
    /**
     * 自定义快捷语句
     * @see https://github.com/unocss/unocss#shortcuts
     */
    shortcuts,
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
        ...transformers,
    ],
})
