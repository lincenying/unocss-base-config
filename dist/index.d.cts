import { PresetMiniOptions } from 'unocss/preset-mini';
import { PresetWind3Options } from 'unocss/preset-wind3';
import { PresetWind4Options } from 'unocss/preset-wind4';
import { TransformerAttributifyOptions } from 'unocss-applet';

interface PxToRemConfigType {
    baseFontSize?: number;
    /** 是否将无单位属性还原成rem单位 */
    noneUnti2Rem?: boolean;
    /** 转换的目标单位 */
    unti?: 'rem' | 'rpx';
}

declare function h5Config(pxToRemconfig?: PxToRemConfigType, preset?: 'wind3', presetConfig?: PresetWind3Options): void;
declare function h5Config(pxToRemconfig?: PxToRemConfigType, preset?: 'wind4', presetConfig?: PresetWind4Options): void;
declare function h5Config(pxToRemconfig?: PxToRemConfigType, preset?: 'mini', presetConfig?: PresetMiniOptions): void;

declare function uniappConfig(pxToRemconfig?: PxToRemConfigType, wxAttrConfig?: boolean | TransformerAttributifyOptions, preset?: 'wind3', presetConfig?: PresetWind3Options): void;
declare function uniappConfig(pxToRemconfig?: PxToRemConfigType, wxAttrConfig?: boolean | TransformerAttributifyOptions, preset?: 'wind4', presetConfig?: PresetWind4Options): void;
declare function uniappConfig(pxToRemconfig?: PxToRemConfigType, wxAttrConfig?: boolean | TransformerAttributifyOptions, preset?: 'mini', presetConfig?: PresetMiniOptions): void;

declare function webConfig(preset?: 'wind3', presetConfig?: PresetWind3Options): void;
declare function webConfig(preset?: 'wind4', presetConfig?: PresetWind4Options): void;
declare function webConfig(preset?: 'mini', presetConfig?: PresetMiniOptions): void;
declare const adminConfig: typeof webConfig;

declare function webRemConfig(pxToRemconfig?: PxToRemConfigType, preset?: 'wind3', presetConfig?: PresetWind3Options): void;
declare function webRemConfig(pxToRemconfig?: PxToRemConfigType, preset?: 'wind4', presetConfig?: PresetWind4Options): void;
declare function webRemConfig(pxToRemconfig?: PxToRemConfigType, preset?: 'mini', presetConfig?: PresetMiniOptions): void;
declare const datavConfig: typeof webRemConfig;

export { adminConfig, datavConfig, h5Config, uniappConfig, webConfig, webRemConfig };
