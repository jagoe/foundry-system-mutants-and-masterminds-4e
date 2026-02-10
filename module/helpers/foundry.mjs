import { systemId } from '../system.mjs';

export const getSetting = (key) => {
    return game.settings.get(systemId, key);
};

export const getCoreSetting = (key) => {
    return game.settings.get('core', key);
};

export const setSetting = (key, value) => {
    return game.settings.set(systemId, key, value);
};

export const registerSetting = (key, data) => {
    return game.settings.register(systemId, key, data);
};

export const registerSheet = (documentType, sheet, data) => {
    documentType.registerSheet(systemId, sheet, data);
};

export const enrichContext = async (sheet, context, ...paths) => {
    const enricherData = {
        relativeTo: sheet.document,
        secrets: sheet.document.isOwner,
    };

    const deepGet = (o, p) => p.split('.').reduce((a, v) => a[v], o);
    const deepSet = (o, p, value) => {
        const parts = p.split('.');
        const deepObject = parts.slice(0, -1).reduce((a, v) => a[v], o);
        const deepProp = parts.slice(-1);

        deepObject[deepProp] = value;
    };

    await Promise.all(
        paths.map(async (path) => {
            const enriched = await TextEditor.enrichHTML(deepGet(context, path), enricherData);
            deepSet(context, path, enriched);
        }),
    );
};
