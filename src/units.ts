import type { Preset } from '@unocss/core'

const pxRE = /(-?[\.\d]+)px/g
const remRE = /(-?[\.\d]+)rem/g

export interface OpType {
    baseFontSize?: number
    noneUnti2Rem?: boolean
    unti?: 'rem' | 'rpx'
}

export function pxToRemPreset(options: OpType = {}): Preset {
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
