import {
    getStyleguideColorsCode,
    getStyleguideTextStylesCode,
    getLayerCode
} from "./helpers";

import { OPTION_NAMES } from "./constants";

function genCodeObject(code) {
    return { code, language: "typescript" };
}

function styleguideColors(context, colors) {
    let options = { colorFormat: context.getOption(OPTION_NAMES.COLOR_FORMAT) };
    let code = getStyleguideColorsCode(options, colors);

    return genCodeObject(code);
}

function styleguideTextStyles(context, textStyles) {
    let options = {
        colorFormat: context.getOption(OPTION_NAMES.COLOR_FORMAT),
        defaultValues: context.getOption(OPTION_NAMES.SHOW_DEFAULT_VALUES)
    };
    let code = getStyleguideTextStylesCode(
        options,
        context.project,
        textStyles
    );
    return genCodeObject(code);
}

function layer(context, selectedLayer) {
    let options = {
        showDimensions: context.getOption(OPTION_NAMES.SHOW_DIMENSIONS),
        colorFormat: context.getOption(OPTION_NAMES.COLOR_FORMAT),
        defaultValues: context.getOption(OPTION_NAMES.SHOW_DEFAULT_VALUES)
    };
    let code = getLayerCode(context.project, selectedLayer, options);
    return genCodeObject(code);
}

function exportStyleguideColors(context, colors) {
    let { code, language } = styleguideColors(context, colors);
    return {
        code,
        language,
        fileName: "colors.ts"
    };
}

function exportStyleguideTextStyles(context, textStyles) {
    let { code, language } = styleguideTextStyles(context, textStyles);
    return {
        code,
        language,
        fileName: "textStyles.ts"
    };
}

function comment(context, text) {
    return `// ${text}`;
}

export default {
    layer,
    styleguideColors,
    styleguideTextStyles,
    exportStyleguideColors,
    exportStyleguideTextStyles,
    comment
};
