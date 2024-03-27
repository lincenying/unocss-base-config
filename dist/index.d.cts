import * as unocss from 'unocss';

declare function webConfig(): unocss.UserConfig<object>;
declare const adminConfig: typeof webConfig;

interface OpType {
    baseFontSize?: number;
    noneUnti2Rem?: boolean;
    unti?: 'rem' | 'rpx';
}

declare function webRemConfig(config?: OpType): unocss.UserConfig<object>;
declare const datavConfig: typeof webRemConfig;

declare function h5Config(config?: OpType): unocss.UserConfig<object>;

declare function uniappConfig(config?: OpType): unocss.UserConfig<object>;

export { adminConfig, datavConfig, h5Config, uniappConfig, webConfig, webRemConfig };
