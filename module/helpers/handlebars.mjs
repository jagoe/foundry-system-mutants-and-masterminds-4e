import { assetsPath, templatesPath } from '../system.mjs';
import { getDataSubSkill, listFont } from './common.mjs';
import { getSetting } from './foundry.mjs';

export const RegisterHandlebars = function () {
    Handlebars.registerHelper('assetsPath', () => {
        return assetsPath;
    });

    Handlebars.registerHelper('template', (subPath) => {
        return `${templatesPath}/${subPath}`;
    });

    Handlebars.registerHelper('translate', function (where, tra) {
        try {
            let translation = CONFIG.MM4;
            const levels = where.split('.');
            for (let i = 0; i < levels.length; i++) {
                translation = translation[levels[i]];
            }
            return game.i18n.localize(translation[tra]);
        } catch (error) {
            console.error(`Error translating ${tra} in ${where}: ${error}`);
            return '';
        }
    });

    Handlebars.registerHelper('singularOrPlural', function (count, successOrFail) {
        let result;

        if (count > 1) {
            if (successOrFail === 'success') result = game.i18n.localize('MM4.ROLL.DegresReussite');
            else result = game.i18n.localize('MM4.ROLL.DegresEchec');
        } else {
            if (successOrFail === 'success') result = game.i18n.localize('MM4.ROLL.DegreReussite');
            else result = game.i18n.localize('MM4.ROLL.DegreEchec');
        }

        return result;
    });

    Handlebars.registerHelper('mm4concat', function (base, id, last) {
        return `${base}.${id}.${last}`;
    });

    Handlebars.registerHelper('isHigherThan', function (base, compare) {
        return base > compare ? true : false;
    });

    Handlebars.registerHelper('isHigherOrEqual', function (base, compare) {
        return base >= compare ? true : false;
    });

    Handlebars.registerHelper('marge', function (base, toSubstract) {
        return Math.floor((base - toSubstract) / 5);
    });

    Handlebars.registerHelper('isValue', function (base, compare) {
        return base === compare ? true : false;
    });

    Handlebars.registerHelper('isNotValue', function (base, compare) {
        return base !== compare ? true : false;
    });

    Handlebars.registerHelper('hasLinkAndAlt', function (id, actor) {
        let links = actor?.pwrLink?.[id]?.length ?? 0;
        links += actor?.pwrAlternatif?.[id]?.length ?? 0;
        links += actor?.pwrDynamique?.[id]?.length ?? 0;

        return links > 0 ? true : false;
    });

    Handlebars.registerHelper('hasLink', function (id, actor) {
        let links = actor?.pwrLink?.[id]?.length ?? 0;

        return links > 0 ? true : false;
    });

    Handlebars.registerHelper('hasAlt', function (id, actor) {
        let links = actor?.pwrAlternatif?.[id]?.length ?? 0;
        links += actor?.pwrDynamique?.[id]?.length ?? 0;

        return links > 0 ? true : false;
    });

    Handlebars.registerHelper('hasSkillLink', function (root, what, id) {
        let getSkill = false;
        let result = true;

        if (id !== '' && what !== '' && id !== undefined && what !== undefined)
            getSkill = getDataSubSkill(root.actor, what, id);
        if (!getSkill) result = false;

        return result;
    });

    Handlebars.registerHelper('getAtt', function (root, what, id, data) {
        let result = getDataSubSkill(root.actor, what, id);
        if (!result) result = '';
        else result = result[data];

        return result;
    });

    Handlebars.registerHelper('getPwrAlt', function (root, folder, key) {
        return root.actor[folder][key];
    });

    Handlebars.registerHelper('getPwr', function (root, id, what) {
        const result = root.systemData?.pwr?.[id]?.cout?.[what] ?? 0;

        return result;
    });

    Handlebars.registerHelper('isOwner', function (data) {
        let result = false;

        if (game.user.isGM || (data.actor.isOwner && !data.actor.isLimited)) result = true;

        return result;
    });

    Handlebars.registerHelper('isTrusted', function () {
        let result = false;

        if (game.user.isGM || game.user.isTrusted) result = true;

        return result;
    });

    Handlebars.registerHelper('etatExist', function (Array, id) {
        let result = false;
        let array = Array ?? [];

        if (array.some((etat) => etat.id === id)) result = true;

        return result;
    });

    Handlebars.registerHelper('hasOptShift', function () {
        let result = false;

        if (getSetting('dcroll') === 'shift') result = true;

        return result;
    });

    Handlebars.registerHelper('labelize', function (str) {
        const all = Object.assign({}, CONFIG.MM4.listmods);

        return game.i18n.localize(all?.[str] ?? str);
    });

    Handlebars.registerHelper('getLast', function (str) {
        let result = '';

        if (str.includes('surchargeranks')) result = 'surchargeranks';
        else if (str.includes('surcharge')) result = 'surcharge';
        else if (str.includes('ranks')) result = 'ranks';

        return result;
    });

    Handlebars.registerHelper('getLabelTranslate', function (str) {
        let split = str.split('.');

        if (split.includes('ranks') || split.includes('surchargeranks')) {
            split.pop();
            split.pop();
        } else if (split.includes('bonuses') || split.includes('surcharge')) {
            split.pop();
        }

        return split.join('.');
    });

    Handlebars.registerHelper('getVarianteName', function (system, name) {
        return system?.listEffectsVariantes?.[name] ?? '';
    });

    Handlebars.registerHelper('ObjectIsEmpty', function (object) {
        return foundry.utils.isEmpty(object);
    });

    Handlebars.registerHelper('translateStatues', function (str) {
        let result = str;

        if (!result.includes('MM4')) {
            switch (result) {
                case 'Dead':
                case 'dead':
                    result = `EFFECT.StatusDead`;
                    break;

                case 'Impaired':
                    result = `MM4.STATUS.Decreased`;
                    break;

                case 'Fatigued':
                    result = `MM4.STATUS.Tired`;
                    break;

                case 'Immobile':
                    result = `MM4.STATUS.Stuck`;
                    break;

                case 'Unaware':
                    result = `MM4.STATUS.Insensitive`;
                    break;

                case 'Debilitated':
                    result = `MM4.STATUS.Invalid`;
                    break;

                case 'Vulnerable':
                    result = `MM4.STATUS.Vulnerability`;
                    break;

                case 'Staggered':
                    result = `MM4.STATUS.Chanceling`;
                    break;

                case 'Entranced':
                    result = `MM4.STATUS.Enthralled`;
                    break;

                case 'Compelled':
                    result = `MM4.STATUS.Influenced`;
                    break;

                case 'Bound':
                    result = `MM4.STATUS.Tied`;
                    break;

                case 'Incapacitated':
                    result = `MM4.STATUS.Neutralized`;
                    break;

                case 'Weakened':
                    result = `MM4.STATUS.Downgrade`;
                    break;

                case 'Paralyzed':
                    result = `MM4.STATUS.Paralysis`;
                    break;

                case 'Stun':
                    result = `MM4.STATUS.Stunned`;
                    break;

                default:
                    result = `MM4.STATUS.${str.charAt(0).toUpperCase() + str.slice(1)}`;
                    break;
            }
        }

        return game.i18n.localize(result);
    });

    Handlebars.registerHelper('numRepeat', function (num) {
        return parseInt(num) + 1;
    });

    Handlebars.registerHelper('listcarac', function () {
        return CONFIG.MM4.caracteristiquesshort;
    });

    Handlebars.registerHelper('listfont', function () {
        return foundry.utils.mergeObject(
            {
                Kalam: '-',
                'var(--font-primary)': 'MM4.SETTING.Defaut',
            },
            listFont,
        );
    });

    Handlebars.registerHelper('listfontother', function () {
        return foundry.utils.mergeObject(
            {
                '': '-',
                'var(--font-primary)': 'MM4.SETTING.Defaut',
            },
            listFont,
        );
    });

    Handlebars.registerHelper('listmodtype', function () {
        return CONFIG.MM4.ModType;
    });

    Handlebars.registerHelper('listpwr', function (pwr, id, choisir = false) {
        let empty = {};
        let data = {};

        if (choisir)
            empty[''] = `${game.i18n.localize('MM4.POUVOIR.Principal')} : ${game.i18n.localize('MM4.Choisir')}`;
        else empty[''] = `${game.i18n.localize('MM4.POUVOIR.Principal')}`;

        for (let p in pwr) {
            if (id !== p) data[p] = `${game.i18n.localize('MM4.POUVOIR.Principal')} : ${pwr[p]}`;
        }

        return foundry.utils.mergeObject(empty, data);
    });

    Handlebars.registerHelper('log', function (element) {
        console.log(element);
    });

    Handlebars.registerHelper('pwrCanBeActivated', (ownerEffectVariantList, power, actor) => {
        const hasVariants = Object.keys(ownerEffectVariantList).length > 0;
        const isPreparedEffect = power.system.special === 'prepare';
        const hasDuration = power.system.duree !== 'instantane' && power.system.duree !== 'permanent';
        const actorIsCharacter = actor.type;

        const isArray = power.system.special === 'alternatif';
        const hasAlternateEffects = actor.items.filter(
            (linked) =>
                (linked.system.link === power.system?.link &&
                    linked._id !== power._id &&
                    power.system?.link !== '' &&
                    (power.system.special === 'alternatif' || linked.system.special === 'alternatif')) ||
                (linked._id === power.system.link && power.system.special === 'alternatif') ||
                (linked.system.link === power._id && linked.system.special === 'alternatif'),
        );

        return ((hasVariants || isPreparedEffect || hasDuration) && actorIsCharacter) || isArray || hasAlternateEffects;
    });

    Handlebars.registerHelper('pwrHasVariants', (ownerEffectVariantList, actor) => {
        const hasVariants = Object.keys(ownerEffectVariantList).length > 0;
        const actorIsCharacter = actor.type;

        return hasVariants && actorIsCharacter;
    });

    Handlebars.registerHelper('actorIsCharacter', (actor) => {
        const actorIsCharacter = actor.type;

        return actorIsCharacter;
    });
};
