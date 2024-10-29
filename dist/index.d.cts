import * as unocss from 'unocss';

interface OpType {
    baseFontSize?: number;
    noneUnti2Rem?: boolean;
    unti?: 'rem' | 'rpx';
}

declare function h5Config(config?: OpType): unocss.UserConfig<object>;

declare function uniappConfig(config?: OpType): unocss.UserConfig<object>;

declare function webConfig(): unocss.UserConfig<object>;
declare const adminConfig: typeof webConfig;

declare function webRemConfig(config?: OpType): unocss.UserConfig<object>;
declare const datavConfig: typeof webRemConfig;

export { adminConfig, datavConfig, h5Config, uniappConfig, webConfig, webRemConfig };
