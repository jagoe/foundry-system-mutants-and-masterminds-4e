import { listFont, listBg } from './helpers/common.mjs';
import { registerSetting } from './helpers/foundry.mjs';
import { assetsPath } from './system.mjs';

export const RegisterSettings = function () {
    /* ------------------------------------ */
    /* User settings                        */
    /* ------------------------------------ */
    registerSetting('typeroll', {
        name: 'MM4.SETTING.Typejet',
        hint: '',
        scope: 'world',
        config: true,
        default: '1D20',
        type: String,
        choices: {
            '1D20': 'MM4.SETTING.Standard1d20',
            '3D20': 'MM4.SETTING.Guide3d20',
            '3D6': 'MM4.SETTING.3d6',
        },
    });

    registerSetting('stackeddmg', {
        name: 'MM4.SETTING.StackedDmg',
        hint: 'MM4.SETTING.StackedDmgHint',
        scope: 'world',
        config: true,
        type: Boolean,
        default: false,
        onChange: (_value) => {
            foundry.utils.debouncedReload();
        },
    });

    registerSetting('dcroll', {
        name: 'MM4.SETTING.DCRoll',
        hint: 'MM4.SETTING.DCRollHint',
        scope: 'client',
        config: true,
        default: 'shift',
        type: String,
        choices: {
            shift: 'MM4.SETTING.ShiftClicgauche',
            clic: 'MM4.SETTING.Clicgauche',
        },
    });

    registerSetting('speedcalculate', {
        name: 'MM4.SETTING.SpeedAutocalc',
        hint: 'MM4.SETTING.SpeedAutocalcHint',
        scope: 'world',
        config: true,
        default: true,
        type: Boolean,
        onChange: (_value) => {
            foundry.utils.debouncedReload();
        },
    });

    registerSetting('measuresystem', {
        name: 'MM4.SETTING.MeasureSystem',
        hint: 'MM4.SETTING.MeasureSystemHint',
        scope: 'world',
        config: true,
        default: 'metric',
        type: String,
        choices: {
            metric: 'MM4.SETTING.Metric',
            imperial: 'MM4.SETTING.Imperial',
        },
    });

    registerSetting('pauselogo', {
        name: 'MM4.SETTING.Pause',
        hint: 'MM4.SETTING.PauseHint',
        scope: 'client',
        config: true,
        default: 'Pause_Icon_1',
        type: String,
        choices: {
            default: 'MM4.SETTING.Defaut',
            Pause_Icon_1: 'MM4.SETTING.Pause1',
            Pause_Icon_2: 'MM4.SETTING.Pause2',
            Pause_Icon_3: 'MM4.SETTING.Pause3',
        },
        onChange: (value) => {
            if (value !== 'default') {
                $('#pause img').remove();
                $('#pause figcaption').remove();

                const pause = $('#pause video');
                if (pause.length === 0) {
                    $('#pause').append(
                        `<video width="300" height="200" loop autoplay="autoplay"><source src="${assetsPath}/pause/${value}.webm" type="video/webm" /></video>`,
                    );
                } else {
                    $('#pause video').attr('src', `${assetsPath}/pause/${value}.webm`);
                    $('#pause video')[0].load();
                    $('#pause video')[0].play();
                }
            } else {
                $('#pause video').remove();
                $('#pause').append(`<img src="icons/svg/clockwork.svg" class="fa-spin">`);
                $('#pause').append(`<figcaption>Game Paused</figcaption>`);
            }
        },
    });

    registerSetting('menu', {
        name: 'MM4.SETTING.Menu',
        hint: 'MM4.SETTING.MenuHint',
        scope: 'client',
        config: true,
        default: 'bleufonce',
        type: String,
        choices: {
            default: 'MM4.SETTING.Defaut',
            bleuclair: 'MM4.SETTING.BleuClair',
            violetclair: 'MM4.SETTING.VioletClair',
            violet: 'MM4.SETTING.Violet',
            bleufonce: 'MM4.SETTING.BleuFonce',
        },
        onChange: (value) => {
            $('div#interface').removeClass(listBg);
            $('div#interface').addClass(value);
        },
    });

    const mFont = foundry.utils.mergeObject(
        {
            default: 'MM4.Non',
            'var(--font-primary)': 'MM4.SETTING.Defaut',
        },
        listFont,
    );

    registerSetting('font', {
        name: 'MM4.SETTING.ForceFont',
        scope: 'world',
        config: true,
        default: 'default',
        type: String,
        choices: mFont,
        onChange: (_value) => {
            foundry.utils.debouncedReload();
        },
    });
};
