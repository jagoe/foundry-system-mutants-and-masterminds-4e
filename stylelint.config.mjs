/** @type {import('stylelint').Config} */
export default {
    extends: ['stylelint-config-standard-scss'],
    plugins: ['stylelint-scss'],
    rules: {
        'selector-class-pattern': null,
        'selector-id-pattern': null,
        'scss/at-mixin-pattern': null,
        'scss/dollar-variable-pattern': null,
    },
    ignoreFiles: ['styles/mm.css'],
};
