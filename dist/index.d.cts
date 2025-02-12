import * as unocss from 'unocss';

interface OpType {
    baseFontSize?: number;
    /** 是否将无单位属性还原成rem单位 */
    noneUnti2Rem?: boolean;
    /** 转换的目标单位 */
    unti?: 'rem' | 'rpx';
    /** 是否禁用属性预设 */
    disableAttr?: boolean;
}

declare function h5Config(config?: OpType): unocss.UserConfig<object>;

declare function uniappConfig(config?: OpType): unocss.UserConfig<object>;

declare function webConfig(): unocss.UserConfig<object>;
declare const adminConfig: typeof webConfig;

declare function webRemConfig(config?: OpType): unocss.UserConfig<object>;
declare const datavConfig: typeof webRemConfig;

export { adminConfig, datavConfig, h5Config, uniappConfig, webConfig, webRemConfig };
