# @lincy/unocss-base-config

Usage

```bash
pnpm install @lincy/unocss-base-config
```

#### 用于一般 web 的配置

uno.config.ts
```ts
import { adminConfig } from '@lincy/unocss-base-config'

export default adminConfig()
```
##### 启用的 presets
- presetUno
  相关文档: https://unocss.dev/presets/uno
- presetAttributify
  相关文档: https://unocss.dev/presets/attributify
- presetIcons
  相关文档: https://unocss.dev/presets/icons

##### 启用的 transformers
- transformerDirectives
  相关文档: https://unocss.dev/transformers/directives
- transformerVariantGroup
  相关文档: https://unocss.dev/transformers/variant-group
- transformerCompileClass
  相关文档: https://unocss.dev/transformers/compile-class

#### 用于 web-rem 的配置

uno.config.ts
```ts
import { datavConfig } from '@lincy/unocss-base-config'

const baseConfig = datavConfig({ baseFontSize: 100 })

export default {
    ...baseConfig,
    safelist: [
        ...(baseConfig.safelist || []),
        ...Array.from({ length: 10 }, (_, i) => `i-fad-digital${i}`),
    ],
}
```
##### 启用的 presets
- presetUno
  相关文档: https://unocss.dev/presets/uno
- presetAttributify
  相关文档: https://unocss.dev/presets/attributify
- presetIcons
  相关文档: https://unocss.dev/presets/icons
- pxToRemPreset
  将`px`转成`rem`

##### 启用的 transformers
- transformerDirectives
  相关文档: https://unocss.dev/transformers/directives
- transformerVariantGroup
  相关文档: https://unocss.dev/transformers/variant-group
- transformerCompileClass
  相关文档: https://unocss.dev/transformers/compile-class

#### 用于 H5 的配置

uno.config.ts
```ts
import { h5Config } from '@lincy/unocss-base-config'

export default h5Config({
    baseFontSize: 37.5,
    unti: 'rem',
})
```
##### 启用的 presets
- presetUno
  相关文档: https://unocss.dev/presets/uno
- presetAttributify
  相关文档: https://unocss.dev/presets/attributify
- presetIcons
  相关文档: https://unocss.dev/presets/icons
- pxToRemPreset
  将`px`转成`rem`

##### 启用的 transformers
- transformerAttributifyJsx
  相关文档: https://unocss.dev/transformers/attributify-jsx
- transformerDirectives
  相关文档: https://unocss.dev/transformers/directives
- transformerVariantGroup
  相关文档: https://unocss.dev/transformers/variant-group
- transformerCompileClass
  相关文档: https://unocss.dev/transformers/compile-class

#### 用于 UniApp 的配置

uno.config.ts
```ts
import { uniappConfig } from '@lincy/unocss-base-config'

export default uniappConfig({
    baseFontSize: 1,
    /** 转换的目标单位 */
    unti: 'rpx',
    /** 是否将无单位属性还原成rem单位 */
    noneUnti2Rem: false,
}, {
    /**
     * @default 'un-'
     */
    prefix: 'un-',
    /**
     * 仅匹配前缀属性
     *
     * @default false
     */
    prefixedOnly: false,
    /**
     * 支持匹配无值属性
     *
     * For example
     * ```html
     * <div mt-2 />
     * ```
     *
     * @default true
     */
    nonValuedAttribute: true,
    /**
     * 提取时要忽略的属性列表
     */
    ignoreAttributes: ['color', 'size', 'fill', 'type'],
    /**
     * 删除在 `class=""` 中添加的属性
     * @default true
     */
    deleteAttributes: true
})
```
##### 启用的 presets

###### 微信小程序
- presetApplet
  相关文档: https://github.com/unocss-applet/unocss-applet
- presetIcons
  相关文档: https://unocss.dev/presets/icons
- pxToRemPreset
  将`px`转成`rem`

###### 其他
- presetUno
  相关文档: https://unocss.dev/presets/uno
- presetAttributify
  相关文档: https://unocss.dev/presets/attributify
- presetIcons
  相关文档: https://unocss.dev/presets/icons
- pxToRemPreset
  将`px`转成`rem`

##### 启用的 transformers

###### 微信小程序
- transformerAttributify
  相关文档: https://github.com/unocss-applet/unocss-applet/tree/main/packages/transformer-attributify
- transformerApplet
  相关文档: https://github.com/unocss-applet/unocss-applet/tree/main/packages/preset-applet
- transformerDirectives
  相关文档: https://unocss.dev/transformers/directives
- transformerVariantGroup
  相关文档: https://unocss.dev/transformers/variant-group
- transformerCompileClass
  相关文档: https://unocss.dev/transformers/compile-class

###### 其他
- transformerDirectives
  相关文档: https://unocss.dev/transformers/directives
- transformerVariantGroup
  相关文档: https://unocss.dev/transformers/variant-group
- transformerCompileClass
  相关文档: https://unocss.dev/transformers/compile-class

License

MIT
