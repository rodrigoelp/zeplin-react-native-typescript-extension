import {
    getStyleguideColorsCode,
    getStyleguideTextStylesCode,
    getLayerCode
} from "./helpers";

import { OPTION_NAMES } from "./constants";

function genCodeObject(code) {
    return { code, language: "typescript" };
}

/**
 * Generates string or code object from Styleguide colors.
 * @param {Context} context context currently executing. Gives you access to the project and to options.
 * @param {Array<Color>} colors colors identified in the current project.
 * @returns returns a code object { language: string, code: string } containing the autogenerated code associated with the color palette
 * (it could also return a string, but not in this code).
 */
function styleguideColors(context, colors) {
    let options = { colorFormat: context.getOption(OPTION_NAMES.COLOR_FORMAT) };
    let code = getStyleguideColorsCode(options, colors);

    return genCodeObject(code);
}

/**
 * Generates string or code object from Styleguide text styles.
 * @param {Context} context context currently executing. Gives you access to the project and to options. 
 * @param {Array<TextStyle>} textStyles styles applied to text.
 */
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

/**
 * Generates string or code object from selected layer.
 * @param {Context} context context context currently executing. Gives you access to the project and to options.  
 * @param {Layer} selectedLayer styles applied to layers
 */
function layer(context, selectedLayer) {
    let options = {
        showDimensions: context.getOption(OPTION_NAMES.SHOW_DIMENSIONS),
        colorFormat: context.getOption(OPTION_NAMES.COLOR_FORMAT),
        defaultValues: context.getOption(OPTION_NAMES.SHOW_DEFAULT_VALUES)
    };
    let code = getLayerCode(context.project, selectedLayer, options);
    return genCodeObject(code);
}

/**
 * Generates comment from the text, in extension's target language.
 * @param {Context} context 
 * @param {string} text 
 */
function comment(context, text) {
    return `// ${text}`;
}

/**
 * Exports all the code associated with the color palette
 * @param {Context} context 
 * @param {Array<Color>} colors 
 */
function exportStyleguideColors(context, colors) {
    let { code, language } = styleguideColors(context, colors);
    return {
        code,
        language,
        fileName: "colors.ts"
    };
}

/**
 * Exports all the code associated with the color palette
 * @param {Context} context 
 * @param {Array<TextStyle>} textStyles 
 */
function exportStyleguideTextStyles(context, textStyles) {
    let { code, language } = styleguideTextStyles(context, textStyles);
    return {
        code,
        language,
        fileName: "textStyles.ts"
    };
}

export default {
    layer,
    styleguideColors,
    styleguideTextStyles,
    exportStyleguideColors,
    exportStyleguideTextStyles,
    comment
};
