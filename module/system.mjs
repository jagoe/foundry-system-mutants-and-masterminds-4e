import system from '../system.json' with { type: 'json' };

export const systemId = system.id;
export const assetsPath = `systems/${systemId}/assets`;
export const templatesPath = `systems/${systemId}/templates`;
