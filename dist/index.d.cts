import * as unocss from 'unocss';
import { TransformerAttributifyOptions } from 'unocss-applet';

interface PxToRemConfigType {
    baseFontSize?: number;
    /** 是否将无单位属性还原成rem单位 */
    noneUnti2Rem?: boolean;
    /** 转换的目标单位 */
    unti?: 'rem' | 'rpx';
}

declare function h5Config(pxToRemconfig?: PxToRemConfigType): unocss.UserConfig<object>;

declare function uniappConfig(pxToRemConfig?: PxToRemConfigType, wxAttrConfig?: boolean | TransformerAttributifyOptions): unocss.UserConfig<object>;

declare function webConfig(): unocss.UserConfig<object>;
declare const adminConfig: typeof webConfig;

declare function webRemConfig(pxToRemconfig?: PxToRemConfigType): unocss.UserConfig<object>;
declare const datavConfig: typeof webRemConfig;

export { adminConfig, datavConfig, h5Config, uniappConfig, webConfig, webRemConfig };
