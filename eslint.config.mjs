import js from '@eslint/js';
import globals from 'globals';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import css from '@eslint/css';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs}'],
        plugins: { js },
        extends: ['js/recommended'],
        languageOptions: {
            globals: {
                ...globals.browser,
                $: 'readonly',
                Actor: 'readonly',
                Actors: 'readonly',
                ActorSheet: 'readonly',
                Adventure: 'readonly',
                canvas: 'readonly',
                ChatMessage: 'readonly',
                CONFIG: 'readonly',
                CONST: 'readonly',
                Dialog: 'readonly',
                dragRuler: 'readonly',
                duplicate: 'readonly',
                foundry: 'readonly',
                game: 'readonly',
                getDocumentClass: 'readonly',
                Handlebars: 'readonly',
                Hooks: 'readonly',
                Item: 'readonly',
                Items: 'readonly',
                ItemSheet: 'readonly',
                loadTemplates: 'readonly',
                Macro: 'readonly',
                readTextFromFile: 'readonly',
                renderTemplate: 'readonly',
                Roll: 'readonly',
                SquareGrid: 'readonly',
                TextEditor: 'readonly',
                ui: 'readonly',
            },
        },
        rules: {
            'no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                },
            ],
        },
    },
    { files: ['**/*.json'], plugins: { json }, language: 'json/json', extends: ['json/recommended'] },
    { files: ['**/*.jsonc'], plugins: { json }, language: 'json/jsonc', extends: ['json/recommended'] },
    { files: ['**/*.json5'], plugins: { json }, language: 'json/json5', extends: ['json/recommended'] },
    { files: ['**/*.md'], plugins: { markdown }, language: 'markdown/gfm', extends: ['markdown/recommended'] },
    {
        files: ['**/*.css'],
        plugins: { css },
        language: 'css/css',
        extends: ['css/recommended'],
        rules: {
            'css/no-important': ['off'],
            'css/use-baseline': ['off'],
            'css/no-invalid-properties': ['off'],
        },
    },
    eslintConfigPrettier,
]);
