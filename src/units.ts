import type { Preset } from '@unocss/core'
import type { PxToRemConfigType } from './types'

const pxRE = /(-?[.\d]+)px/g
const remRE = /(-?[.\d]+)rem/g

/**
 * 创建一个将px单位转换为rem单位的UnoCSS预设
 * @param options - 配置选项
 * @param options.baseFontSize - 基准字体大小，默认为100
 * @param options.noneUnti2Rem - 是否将无单位数值转换为rem单位，默认为false
 * @param options.unti - 转换的目标单位，可选'rem'或'rpx'，默认为'rem'
 * @returns 返回一个UnoCSS预设对象
 */
export function pxToRemPreset(options: PxToRemConfigType = {}): Preset {
    const { baseFontSize = 100, noneUnti2Rem = false, unti = 'rem' } = options

    return {
        name: 'unocss-preset-px-to-rem',
        postprocess: (util) => {
            util.entries.forEach((i) => {
                const value = i[1]
                // 将px单位转成rem单位
                if (value && typeof value === 'string' && pxRE.test(value))
                    i[1] = value.replace(pxRE, (_, p1) => `${p1 / baseFontSize}${unti}`)

                if (noneUnti2Rem) {
                    // 将无单位生生的rem单位还原成自己需要的rem单位
                    if (value && typeof value === 'string' && remRE.test(value))
                        i[1] = value.replace(remRE, (_, p1) => `${(p1 * 4) / baseFontSize}rem`)
                }
            })
        },
    }
}
