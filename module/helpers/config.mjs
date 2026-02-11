export const MM4 = {};

/**
 * The set of Ability Scores used within the sytem.
 * @type {Object}
 */
MM4.LIST = {
    Base: ['affiliation', 'base', 'genre', 'age', 'taille', 'poids', 'yeux', 'cheveux', 'etats'],
    Caracteristiques: [
        'force',
        'agilite',
        'sensibilite',
        'endurance',
        'intelligence',
        'presence',
        'combativite',
        'defense',
    ],
    VehiculeCaracteristiques: ['force', 'vitesse', 'defense', 'robustesse'],
    Competences: [
        'combatcontact',
        'combatdistance',
        'expertise',
        'acrobaties',
        'athletisme',
        'duperie',
        'deguisement',
        'perspicacite',
        'intimidation',
        'investigation',
        'langages',
        'magie',
        'perception',
        'performance',
        'persuasion',
        'habilete',
        'discretion',
        'survie',
        'technologie',
        'soins',
        'vehicules',
        'new',
    ],
    DataCompetences: {
        acrobaties: {
            car: 'agi',
        },
        athletisme: {
            car: 'for',
        },
        combatcontact: {
            car: 'cbt',
            canAdd: true,
        },
        duperie: {
            car: 'prs',
        },
        deguisement: {
            car: 'sns',
        },
        expertise: {
            car: 'int',
            canAdd: true,
        },
        perspicacite: {
            car: 'sns',
        },
        intimidation: {
            car: 'prs',
        },
        investigation: {
            car: 'int',
        },
        langages: {
            car: 'int',
        },
        magie: {
            car: 'int',
        },
        perception: {
            car: 'sns',
        },
        performance: {
            car: 'prs',
        },
        persuasion: {
            car: 'prs',
        },
        combatdistance: {
            car: 'cbt',
            canAdd: true,
        },
        habilete: {
            car: 'agi',
        },
        discretion: {
            car: 'agi',
        },
        survie: {
            car: 'sns',
        },
        technologie: {
            car: 'int',
        },
        soins: {
            car: 'int',
        },
        vehicules: {
            car: 'agi',
        },
        new: {
            car: 'int',
            carCanChange: true,
        },
    },
    Defenses: [
        { name: 'esquive', display: true },
        { name: 'parade', display: false },
        { name: 'distance', display: false },
        { name: 'vigueur', display: true },
        { name: 'robustesse', display: true },
        { name: 'volonte', display: true },
    ],
    CarDefenses: {
        esquive: 'def',
        parade: 'def',
        distance: 'def',
        vigueur: 'end',
        robustesse: 'end',
        volonte: 'sns',
    },
    Strategie: ['attaqueprecision', 'attaqueoutrance', 'attaquedefensive', 'attaquepuissance'],
    LimiteStrategie: {
        attaqueprecision: {
            attaque: 5,
            defense: 0,
            effet: -5,
        },
        attaqueoutrance: {
            attaque: 5,
            defense: -5,
            effet: 0,
        },
        attaquedefensive: {
            attaque: -5,
            defense: 5,
            effet: 0,
        },
        attaquepuissance: {
            attaque: -5,
            defense: 0,
            effet: 5,
        },
    },
};

MM4.ModType = {
    extra: 'MM4.Extra',
    defaut: 'MM4.Defaut',
};

MM4.vehicule = {
    force: 'MM4.CARACTERISTIQUES.Force',
    robustesse: 'MM4.DEFENSE.Robustesse',
    defense: 'MM4.DEFENSE.Label',
    vitesse: 'MM4.Vitesse',
};

MM4.tailles = {
    titanesque: 'MM4.TAILLE.Titanesque',
    colossal: 'MM4.TAILLE.Colossal',
    gigantesque: 'MM4.TAILLE.Gigantesque',
    enorme: 'MM4.TAILLE.Enorme',
    grand: 'MM4.TAILLE.Grand',
    intermediaire: 'MM4.TAILLE.Intermediaire',
};

MM4.qgtailles = {
    titanesque: 'MM4.TAILLE.Titanesque',
    colossal: 'MM4.TAILLE.Colossal',
    gigantesque: 'MM4.TAILLE.Gigantesque',
    enorme: 'MM4.TAILLE.Enorme',
    grand: 'MM4.TAILLE.Grand',
    intermediaire: 'MM4.TAILLE.Intermediaire',
    petite: 'MM4.TAILLE.Petite',
    minime: 'MM4.TAILLE.Minime',
    minuscule: 'MM4.TAILLE.Minuscule',
    infime: 'MM4.TAILLE.Infime',
    Insignifiante: 'MM4.TAILLE.Insignifiante',
};

MM4.caracteristiques = {
    force: 'MM4.CARACTERISTIQUES.Force',
    agilite: 'MM4.CARACTERISTIQUES.Agilite',
    sensibilite: 'MM4.CARACTERISTIQUES.Sensibilite',
    endurance: 'MM4.CARACTERISTIQUES.Endurance',
    intelligence: 'MM4.CARACTERISTIQUES.Intelligence',
    presence: 'MM4.CARACTERISTIQUES.Presence',
    combativite: 'MM4.CARACTERISTIQUES.Combativite',
    defense: 'MM4.CARACTERISTIQUES.Defense',
};

MM4.caracteristiquesshort = {
    for: 'MM4.CARACTERISTIQUES.Force-short',
    agi: 'MM4.CARACTERISTIQUES.Agilite-short',
    sns: 'MM4.CARACTERISTIQUES.Sensibilite-short',
    end: 'MM4.CARACTERISTIQUES.Endurance-short',
    int: 'MM4.CARACTERISTIQUES.Intelligence-short',
    prs: 'MM4.CARACTERISTIQUES.Presence-short',
    cbt: 'MM4.CARACTERISTIQUES.Combativite-short',
    def: 'MM4.CARACTERISTIQUES.Defense-short',
};

MM4.competences = {
    acrobaties: 'MM4.COMPETENCES.Acrobaties',
    athletisme: 'MM4.COMPETENCES.Athletisme',
    duperie: 'MM4.COMPETENCES.Duperie',
    deguisement: 'MM4.COMPETENCES.Deguisement',
    expertise: 'MM4.COMPETENCES.Expertise',
    perspicacite: 'MM4.COMPETENCES.Perspicacite',
    combatcontact: 'MM4.COMPETENCES.Combatcontact',
    combatdistance: 'MM4.COMPETENCES.Combatdistance',
    intimidation: 'MM4.COMPETENCES.Intimidation',
    investigation: 'MM4.COMPETENCES.Investigation',
    langages: 'MM4.COMPETENCES.Langages',
    magie: 'MM4.COMPETENCES.Magie',
    perception: 'MM4.COMPETENCES.Perception',
    performance: 'MM4.COMPETENCES.Performance',
    persuasion: 'MM4.COMPETENCES.Persuasion',
    habilete: 'MM4.COMPETENCES.Habilete',
    discretion: 'MM4.COMPETENCES.Discretion',
    survie: 'MM4.COMPETENCES.Survie',
    technologie: 'MM4.COMPETENCES.Technologie',
    soins: 'MM4.COMPETENCES.Soins',
    vehicules: 'MM4.COMPETENCES.Vehicules',
    new: 'MM4.COMPETENCE.New',
};

MM4.defenses = {
    esquive: 'MM4.DEFENSE.Esquive',
    parade: 'MM4.DEFENSE.Parade',
    distance: 'MM4.DEFENSE.Distance',
    vigueur: 'MM4.DEFENSE.Vigueur',
    robustesse: 'MM4.DEFENSE.Robustesse',
    volonte: 'MM4.DEFENSE.Volonte',
};

MM4.jetdefenses = {
    esquive: 'MM4.ROLL.DEFENSE.Esquive',
    parade: 'MM4.ROLL.DEFENSE.Parade',
    distance: 'MM4.ROLL.DEFENSE.Distance',
    vigueur: 'MM4.ROLL.DEFENSE.Vigueur',
    robustesse: 'MM4.ROLL.DEFENSE.Robustesse',
    volonte: 'MM4.ROLL.DEFENSE.Volonte',
};

MM4.vitesse = {
    base: 'MM4.Base',
    course: 'MM4.VITESSE.Course',
    natation: 'MM4.VITESSE.Natation',
};

MM4.pouvoirs = {};

MM4.pouvoirs.types = {
    attaque: 'MM4.POUVOIR.TYPE.Attaque',
    alteration: 'MM4.POUVOIR.TYPE.Alteration',
    defense: 'MM4.POUVOIR.TYPE.Defense',
    mouvement: 'MM4.POUVOIR.TYPE.Mouvement',
    generaux: 'MM4.POUVOIR.TYPE.Generaux',
    sensoriels: 'MM4.POUVOIR.TYPE.Sensoriels',
    controle: 'MM4.POUVOIR.TYPE.Controle',
};

MM4.pouvoirs.actions = {
    simple: 'MM4.POUVOIR.ACTION.Simple',
    mouvement: 'MM4.POUVOIR.ACTION.Mouvement',
    libre: 'MM4.POUVOIR.ACTION.Libre',
    reaction: 'MM4.POUVOIR.ACTION.Reaction',
    aucune: 'MM4.POUVOIR.ACTION.Aucune',
};

MM4.pouvoirs.factions = {
    simple: 'MM4.POUVOIR.ACTION.FSimple',
    mouvement: 'MM4.POUVOIR.ACTION.FMouvement',
    libre: 'MM4.POUVOIR.ACTION.FLibre',
    reaction: 'MM4.POUVOIR.ACTION.FReaction',
    aucune: 'MM4.POUVOIR.ACTION.FAucune',
};

MM4.pouvoirs.portees = {
    personnelle: 'MM4.POUVOIR.PORTEE.Personnelle',
    contact: 'MM4.POUVOIR.PORTEE.Contact',
    distance: 'MM4.POUVOIR.PORTEE.Distance',
    perception: 'MM4.POUVOIR.PORTEE.Perception',
    rang: 'MM4.POUVOIR.PORTEE.Rang',
};

MM4.pouvoirs.durees = {
    instantane: 'MM4.POUVOIR.DUREE.Instantane',
    concentration: 'MM4.POUVOIR.DUREE.Concentration',
    prolonge: 'MM4.POUVOIR.DUREE.Prolonge',
    continu: 'MM4.POUVOIR.DUREE.Continu',
    permanent: 'MM4.POUVOIR.DUREE.Permanent',
};

MM4.modsranks = {
    force: 'system.caracteristique.force',
    agilite: 'system.caracteristique.agilite',
    combativite: 'system.caracteristique.combativite',
    defense: 'system.caracteristique.defense',
    sensibilite: 'system.caracteristique.sensibilite',
    endurance: 'system.caracteristique.endurance',
    intelligence: 'system.caracteristique.intelligence',
    presence: 'system.caracteristique.presence',
    esquive: 'system.defense.esquive',
    parade: 'system.defense.parade',
    distance: 'system.defense.distance',
    vigueur: 'system.defense.vigueur',
    robustesse: 'system.defense.robustesse',
};

MM4.listmods = {
    'system.caracteristique.force': 'MM4.CARACTERISTIQUES.Force',
    'system.caracteristique.agilite': 'MM4.CARACTERISTIQUES.Agilite',
    'system.caracteristique.sensibilite': 'MM4.CARACTERISTIQUES.Sensibilite',
    'system.caracteristique.endurance': 'MM4.CARACTERISTIQUES.Endurance',
    'system.caracteristique.intelligence': 'MM4.CARACTERISTIQUES.Intelligence',
    'system.caracteristique.presence': 'MM4.CARACTERISTIQUES.Presence',
    'system.caracteristique.combativite': 'MM4.CARACTERISTIQUES.Combativite',
    'system.caracteristique.defense': 'MM4.CARACTERISTIQUES.Defense',
    'system.defense.esquive': 'MM4.DEFENSE.Esquive',
    'system.defense.parade': 'MM4.DEFENSE.Parade',
    'system.defense.distance': 'MM4.DEFENSE.Distance',
    'system.defense.vigueur': 'MM4.DEFENSE.Vigueur',
    'system.defense.robustesse': 'MM4.DEFENSE.Robustesse',
    'system.defense.volonte': 'MM4.DEFENSE.Volonte',
    'system.competence.acrobaties': 'MM4.COMPETENCES.Acrobaties',
    'system.competence.athletisme': 'MM4.COMPETENCES.Athletisme',
    'system.competence.discretion': 'MM4.COMPETENCES.Discretion',
    'system.competence.deguisement': 'MM4.COMPETENCES.Deguisement',
    'system.competence.duperie': 'MM4.COMPETENCES.Duperie',
    'system.competence.langages': 'MM4.COMPETENCES.Langages',
    'system.competence.habilete': 'MM4.COMPETENCES.Habilete',
    'system.competence.intimidation': 'MM4.COMPETENCES.Intimidation',
    'system.competence.investigation': 'MM4.COMPETENCES.Investigation',
    'system.competence.magie': 'MM4.COMPETENCES.Magie',
    'system.competence.performance': 'MM4.COMPETENCES.Performance',
    'system.competence.perception': 'MM4.COMPETENCES.Perception',
    'system.competence.survie': 'MM4.COMPETENCES.Survie',
    'system.competence.perspicacite': 'MM4.COMPETENCES.Perspicacite',
    'system.competence.persuasion': 'MM4.COMPETENCES.Persuasion',
    'system.competence.soins': 'MM4.COMPETENCES.Soins',
    'system.competence.technologie': 'MM4.COMPETENCES.Technologie',
    'system.competence.vehicules': 'MM4.COMPETENCES.Vehicules',
    'system.competence.combatcontact': 'MM4.COMPETENCES.Combatcontact',
    'system.competence.combatdistance': 'MM4.COMPETENCES.Combatdistance',
    'system.competence.expertise': 'MM4.COMPETENCES.Expertise',
    'system.strategie.limite.attaqueprecision.atk': 'MM4.EFFECTS.STRATEGIE.AttaqueprecisionAttaque',
    'system.strategie.limite.attaqueprecision.eff': 'MM4.EFFECTS.STRATEGIE.AttaqueprecisionEffet',
    'system.strategie.limite.attaqueoutrance.atk': 'MM4.EFFECTS.STRATEGIE.AttaqueoutranceAttaque',
    'system.strategie.limite.attaqueoutrance.def': 'MM4.EFFECTS.STRATEGIE.AttaqueoutranceDefense',
    'system.strategie.limite.attaquedefensive.atk': 'MM4.EFFECTS.STRATEGIE.AttaquedefensiveAttaque',
    'system.strategie.limite.attaquedefensive.def': 'MM4.EFFECTS.STRATEGIE.AttaquedefensiveDefense',
    'system.strategie.limite.attaquepuissance.atk': 'MM4.EFFECTS.STRATEGIE.AttaquepuissanceAttaque',
    'system.strategie.limite.attaquepuissance.eff': 'MM4.EFFECTS.STRATEGIE.AttaquepuissanceEffet',
    'system.initiative': 'MM4.ATTAQUE.Initiative',
};

MM4.StdAtk = {
    links: {
        skill: '',
        pwr: '',
        aby: '',
    },
    save: {
        dmg: {
            type: 'robustesse',
            defense: 10,
            effet: 0,
        },
        affliction: {
            type: 'volonte',
            defense: 10,
            effet: 0,
        },
        other: {
            type: 'robustesse',
            defense: 10,
        },
        passive: {
            type: 'parade',
        },
    },
    settings: {
        noatk: false,
        nocrit: false,
    },
    area: {
        has: false,
        esquive: 0,
    },
    repeat: {
        affliction: [
            {
                value: 0,
                status: [],
            },
            {
                value: 0,
                status: [],
            },
            {
                value: 0,
                status: [],
            },
            {
                value: 0,
                status: [],
            },
        ],
        dmg: [
            {
                value: 1,
                status: ['dazed'],
                upgrades: {
                    dazed: 'stunned',
                    dying: 'dead',
                },
            },
            {
                value: 1,
                status: ['stunned', 'chanceling'],
                upgrades: {
                    dying: 'dead',
                },
            },
            {
                value: 1,
                status: ['chanceling', 'neutralized'],
                upgrades: {
                    neutralized: 'dying',
                    dying: 'dead',
                },
            },
        ],
    },
    mod: {
        atk: 0,
        eff: 0,
    },
    label: '',
    type: 'other',
    attaque: 0,
    effet: 0,
    critique: 20,
    text: '',
    isAffliction: false,
    isDmg: false,
};
