import * as _unocss_core from '@unocss/core';

declare function adminConfig(): _unocss_core.UserConfig<object>;

interface OpType {
    baseFontSize?: number;
    noneUnti2Rem?: boolean;
    unti?: 'rem' | 'rpx';
}

declare function datavConfig(config?: OpType): _unocss_core.UserConfig<object>;

declare function h5Config(config?: OpType): _unocss_core.UserConfig<object>;

declare function uniappConfig(config?: OpType): _unocss_core.UserConfig<object>;

export { adminConfig, datavConfig, h5Config, uniappConfig };
