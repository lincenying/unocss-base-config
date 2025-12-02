import * as unocss from 'unocss';
import { TransformerAttributifyOptions } from 'unocss-applet';

interface PxToRemConfigType {
    baseFontSize?: number;
    /** 是否将无单位属性还原成rem单位 */
    noneUnti2Rem?: boolean;
    /** 转换的目标单位 */
    unti?: 'rem' | 'rpx';
}

/**
 * 配置H5环境下的UnoCSS
 * @param pxToRemconfig px转rem/rpx配置选项
 * @param preset 使用的预设类型，可选'wind3'、'wind4'或'mini'，默认为'wind3'
 * @returns UnoCSS配置对象
 */
declare function h5Config(pxToRemconfig?: PxToRemConfigType, preset?: 'wind3' | 'wind4' | 'mini'): unocss.UserConfig<object>;

/**
 * 配置 UnoCSS 用于 UniApp 项目的函数
 * @param pxToRemConfig px转rem的配置选项
 * @param wxAttrConfig 是否启用属性化模式或配置选项
 * @param preset 使用的预设类型，可选值为 'wind3' | 'wind4' | 'mini'
 * @returns 返回 UnoCSS 的配置对象
 */
declare function uniappConfig(pxToRemConfig?: PxToRemConfigType, wxAttrConfig?: boolean | TransformerAttributifyOptions, preset?: 'wind3' | 'wind4' | 'mini'): unocss.UserConfig<object>;

/**
 * 创建Web环境下的UnoCSS配置
 * @param preset 预设类型，可选值为'wind3'、'wind4'或'mini'，默认为'wind3'
 * @returns 返回UnoCSS的配置对象
 */
declare function webConfig(preset?: 'wind3' | 'wind4' | 'mini'): unocss.UserConfig<object>;
declare const adminConfig: typeof webConfig;

/**
 * 创建适用于Web端的UnoCSS配置（使用rem单位）
 * @param pxToRemconfig - px转rem的配置选项
 * @param pxToRemconfig.baseFontSize - 基准字体大小，默认为100
 * @param pxToRemconfig.noneUnti2Rem - 是否将无单位属性还原成rem单位
 * @param pxToRemconfig.unti - 转换的目标单位
 * @param preset - 预设类型，可选值为'wind3'、'wind4'或'mini'，默认为'wind3'
 * @returns UnoCSS的配置对象
 */
declare function webRemConfig(pxToRemconfig?: PxToRemConfigType, preset?: 'wind3' | 'wind4' | 'mini'): unocss.UserConfig<object>;
declare const datavConfig: typeof webRemConfig;

export { adminConfig, datavConfig, h5Config, uniappConfig, webConfig, webRemConfig };
