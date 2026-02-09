import { accessibility } from '../helpers/common.mjs';
import { templatesPath } from '../system.mjs';

/**
 * @extends {ItemSheet}
 */
export class EquipementItemSheet extends ItemSheet {
    /** @inheritdoc */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ['mm4', 'sheet', 'item', 'talent'],
            template: `${templatesPath}/equipement-item-sheet.html`,
            width: 850,
            height: 480,
            tabs: [{ navSelector: '.sheet-tabs', contentSelector: '.sheet-body', initial: 'equipement' }],
            dragDrop: [{ dragSelector: '.draggable', dropSelector: null }],
        });
    }

    /* -------------------------------------------- */

    /** @inheritdoc */
    getData() {
        const context = super.getData();

        context.systemData = context.data.system;

        return context;
    }

    /**
     * Return a light sheet if in "limited" state
     * @override
     */
    get template() {
        return this.options.template;
    }

    /* -------------------------------------------- */

    /** @inheritdoc */
    activateListeners(html) {
        super.activateListeners(html);

        accessibility(this.item, html);

        // Everything below here is only needed if the sheet is editable
        if (!this.isEditable) return;
    }
}
