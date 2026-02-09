import { assetsPath } from '../system.mjs';

/**
 * Extend the base Item document to support attributes and groups with a custom template creation dialog.
 * @extends {Item}
 */
export class MM4Item extends Item {
    static async create(data, options = {}) {
        // Replace default image
        if (data.img === undefined) {
            switch (data.type) {
                case 'equipement':
                    data.img = `${assetsPath}/icons/equipement.svg`;
                    break;

                case 'modificateur':
                    data.img = `${assetsPath}/icons/modificateur.svg`;
                    break;

                case 'pouvoir':
                    data.img = `${assetsPath}/icons/pouvoir.svg`;
                    break;

                case 'qg':
                    data.img = `${assetsPath}/icons/qg.svg`;
                    break;

                case 'talent':
                    data.img = `${assetsPath}/icons/talent.svg`;
                    break;

                case 'vehicule':
                    data.img = `${assetsPath}/icons/vehicule.svg`;
                    break;
            }
        }

        await super.create(data, options);
    }

    prepareDerivedData() {}
}
