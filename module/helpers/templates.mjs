import { templatesPath } from '../system.mjs';

/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
    // Define template paths to load
    const templatePaths = [
        // Attribute list partial.
        `${templatesPath}/parts/informations.html`,
        `${templatesPath}/parts/vitesse.html`,
        `${templatesPath}/parts/caracteristiques.html`,
        `${templatesPath}/parts/attaque.html`,
        `${templatesPath}/parts/strategie.html`,
        `${templatesPath}/parts/listPouvoirs.html`,
        `${templatesPath}/parts/pouvoirs.html`,
        `${templatesPath}/parts/importations.html`,
        `${templatesPath}/parts/options.html`,
        `${templatesPath}/parts/informations-limited.html`,
        `${templatesPath}/parts/bottom.html`,
        `${templatesPath}/parts/effects.html`,
        `${templatesPath}/limited-personnage-sheet.html`,
        `${templatesPath}/limited-qg-sheet.html`,
        `${templatesPath}/limited-vehicule-sheet.html`,
        `${templatesPath}/dialog/parts/repeat.html`,
    ];

    // Load the template parts
    return loadTemplates(templatePaths);
};
