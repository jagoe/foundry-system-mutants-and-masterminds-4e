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
