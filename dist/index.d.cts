import { UserShortcuts, UserConfig } from 'unocss';
import { Theme, PresetMiniOptions } from 'unocss/preset-mini';
import { PresetWind3Options } from 'unocss/preset-wind3';
import { PresetWind4Options, Theme as Theme$1 } from 'unocss/preset-wind4';
import { TransformerAttributifyOptions } from 'unocss-applet';

declare const breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
    s320: string;
    m320: string;
    s480: string;
    m480: string;
    s768: string;
    m768: string;
    s1024: string;
    m1024: string;
    s1280: string;
    m1280: string;
    s1366: string;
    m1366: string;
    s1440: string;
    m1440: string;
    s1680: string;
    m1680: string;
    s1920: string;
    m1920: string;
};

declare const shortcuts: UserShortcuts<object>;

interface PxToRemConfigType {
    baseFontSize?: number;
    /** 是否将无单位属性还原成rem单位 */
    noneUnti2Rem?: boolean;
    /** 转换的目标单位 */
    unti?: 'rem' | 'rpx';
}

declare function h5Config(pxToRemconfig?: PxToRemConfigType, preset?: 'wind3', presetConfig?: PresetWind3Options): UserConfig<Theme>;
declare function h5Config(pxToRemconfig?: PxToRemConfigType, preset?: 'wind4', presetConfig?: PresetWind4Options): UserConfig<Theme$1>;
declare function h5Config(pxToRemconfig?: PxToRemConfigType, preset?: 'mini', presetConfig?: PresetMiniOptions): UserConfig<Theme>;

declare function uniappConfig(pxToRemconfig?: PxToRemConfigType, wxAttrConfig?: boolean | TransformerAttributifyOptions, preset?: 'wind3', presetConfig?: PresetWind3Options): UserConfig<Theme>;
declare function uniappConfig(pxToRemconfig?: PxToRemConfigType, wxAttrConfig?: boolean | TransformerAttributifyOptions, preset?: 'wind4', presetConfig?: PresetWind4Options): UserConfig<Theme$1>;
declare function uniappConfig(pxToRemconfig?: PxToRemConfigType, wxAttrConfig?: boolean | TransformerAttributifyOptions, preset?: 'mini', presetConfig?: PresetMiniOptions): UserConfig<Theme>;

declare function webConfig(preset?: 'wind3', presetConfig?: PresetWind3Options): UserConfig<Theme>;
declare function webConfig(preset?: 'wind4', presetConfig?: PresetWind4Options): UserConfig<Theme$1>;
declare function webConfig(preset?: 'mini', presetConfig?: PresetMiniOptions): UserConfig<Theme>;
declare const adminConfig: typeof webConfig;

declare function webRemConfig(pxToRemconfig?: PxToRemConfigType, preset?: 'wind3', presetConfig?: PresetWind3Options): UserConfig<Theme>;
declare function webRemConfig(pxToRemconfig?: PxToRemConfigType, preset?: 'wind4', presetConfig?: PresetWind4Options): UserConfig<Theme$1>;
declare function webRemConfig(pxToRemconfig?: PxToRemConfigType, preset?: 'mini', presetConfig?: PresetMiniOptions): UserConfig<Theme>;
declare const datavConfig: typeof webRemConfig;

export { adminConfig, breakpoints, datavConfig, h5Config, shortcuts, uniappConfig, webConfig, webRemConfig };
