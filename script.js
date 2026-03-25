const DEFAULT_POTION_ID = "fire-resistance";
const STORAGE_THEME_KEY = "potion-guide-theme";
const LAYOUT_TUNER_OFFSET_RANGE = {
    min: -180,
    max: 180,
    step: 1,
};
const LAYOUT_TUNER_SCALE_RANGE = {
    min: 0.4,
    max: 2.2,
    step: 0.01,
};
const LAYOUT_TUNER_CONTROLS = [
    { label: "UI Main", xVar: "--ui-main-offset-x", yVar: "--ui-main-offset-y", scaleVar: "--ui-main-scale" },
    { label: "UI Bubbles", xVar: "--ui-bubbles-offset-x", yVar: "--ui-bubbles-offset-y", scaleVar: "--ui-bubbles-scale" },
    { label: "UI Arrow", xVar: "--ui-arrow-offset-x", yVar: "--ui-arrow-offset-y", scaleVar: "--ui-arrow-scale" },
    { label: "Top Ingredient", xVar: "--ui-top-slot-offset-x", yVar: "--ui-top-slot-offset-y", scaleVar: "--ui-top-slot-scale" },
    { label: "Bottom Ingredient", xVar: "--ui-bottom-slot-offset-x", yVar: "--ui-bottom-slot-offset-y", scaleVar: "--ui-bottom-slot-scale" },
    { label: "Potion Bottle", xVar: "--ui-bottle-offset-x", yVar: "--ui-bottle-offset-y", scaleVar: "--ui-bottle-scale" },
    { label: "Modifiers", xVar: "--ui-modifiers-offset-x", yVar: "--ui-modifiers-offset-y", scaleVar: "--ui-modifiers-scale" },
];
const LAYOUT_TUNER_DEFAULT_VALUES = {
    "--ui-main-offset-x": 0,
    "--ui-main-offset-y": 0,
    "--ui-main-scale": 1,
    "--ui-bubbles-offset-x": 0,
    "--ui-bubbles-offset-y": 0,
    "--ui-bubbles-scale": 1,
    "--ui-arrow-offset-x": 0,
    "--ui-arrow-offset-y": 0,
    "--ui-arrow-scale": 1,
    "--ui-top-slot-offset-x": 0,
    "--ui-top-slot-offset-y": 0,
    "--ui-top-slot-scale": 1,
    "--ui-bottom-slot-offset-x": 0,
    "--ui-bottom-slot-offset-y": 0,
    "--ui-bottom-slot-scale": 1,
    "--ui-bottle-offset-x": 0,
    "--ui-bottle-offset-y": 0,
    "--ui-bottle-scale": 1.24,
    "--ui-modifiers-offset-x": 0,
    "--ui-modifiers-offset-y": 0,
    "--ui-modifiers-scale": 1.1,
};
const BUBBLE_FRAME_INTERVAL_MS = 520;
const BUBBLE_FINAL_FRAME_HOLD_MS = 3600;
const BACKGROUND_ASSET_WARMUP_IDLE_TIMEOUT_MS = 180;
const UI_MAIN_SOURCE_SIZE = {
    width: 523,
    height: 1226,
};
const UI_MAIN_SLOT_GEOMETRY = {
    top: {
        left: 20,
        top: 20,
        size: 482,
        centeredContentHeight: 415,
    },
    bottom: {
        left: 20,
        top: 760,
        size: 482,
        centeredContentHeight: 415,
    },
};
const RECIPE_SLOT_MIN_ICON_SIZE = 16;
const RECIPE_SLOT_TARGET_VISIBLE_WIDTH_RATIO = 0.58;
const RECIPE_SLOT_TARGET_VISIBLE_HEIGHT_RATIO = 0.78;
const UI_MAIN_ASSET_PATH = "./ui_elements/UI_main.png";
const UI_BUBBLE_FRAME_PATHS = Array.from({ length: 9 }, (_unused, index) => `./ui_elements/bubbles_${index}.png`);
const UI_ARROW_FRAME_PATHS = Array.from({ length: 9 }, (_unused, index) => `./ui_elements/arrow_${index}.png`);
const UI_LAYOUT_ASSET_PATHS = [
    UI_MAIN_ASSET_PATH,
    ...UI_BUBBLE_FRAME_PATHS,
    ...UI_ARROW_FRAME_PATHS,
];

const ASSETS = {
    effects: {
        fireResistance: "./effect_icons/effect_fire_resistance.png",
        regeneration: "./effect_icons/effect_regeneration.png",
        strength: "./effect_icons/effect_strength.png",
        swiftness: "./effect_icons/effect_speed.png",
        leaping: "./effect_icons/effect_leaping.png",
        slowness: "./effect_icons/effect_slowness.png",
        weakness: "./effect_icons/effect_weakness.png",
        poison: "./effect_icons/effect_poison.png",
        harming: "./effect_icons/effect_harming.png",
        healing: "./effect_icons/effect_healing.png",
        nightVision: "./effect_icons/effect_night_vision.png",
        waterBreathing: "./effect_icons/effect_water_breathing.png",
        invisibility: "./effect_icons/effect_invisibility.png",
        turtleMaster: "./effect_icons/effect_resistance.png",
        slowFalling: "./effect_icons/effect_feather_falling.png",
        oozing: "./effect_icons/effect_oozing.png",
        weaving: "./effect_icons/effect_weaving.png",
        windCharging: "./effect_icons/effect_wind_charged.png",
        infestation: "./effect_icons/effect_infestation.png",
    },
    effectsOutlined: {
        fireResistance: "./effect_icons/effect_fire_resistance_outlined.png",
        regeneration: "./effect_icons/effect_regeneration_outlined.png",
        strength: "./effect_icons/effect_strength_outlined.png",
        swiftness: "./effect_icons/effect_speed_outlined.png",
        leaping: "./effect_icons/effect_leaping_outlined.png",
        slowness: "./effect_icons/effect_slowness_outlined.png",
        weakness: "./effect_icons/effect_weakness_outlined.png",
        poison: "./effect_icons/effect_poison_outlined.png",
        harming: "./effect_icons/effect_harming_outlined.png",
        healing: "./effect_icons/effect_healing_outlined.png",
        nightVision: "./effect_icons/effect_night_vision_outlined.png",
        waterBreathing: "./effect_icons/effect_water_breathing_outlined.png",
        invisibility: "./effect_icons/effect_invisibility_outlined.png",
        turtleMaster: "./effect_icons/effect_resistance_outlined.png",
        slowFalling: "./effect_icons/effect_feather_falling_outlined.png",
        oozing: "./effect_icons/effect_oozing_outlined.png",
        weaving: "./effect_icons/effect_weaving_outlined.png",
        windCharging: "./effect_icons/effect_wind_charged_outlined.png",
        infestation: "./effect_icons/effect_infestation_outlined.png",
    },
    ingredients: {
        blazePowder: "./ingredients/blaze_powder.png",
        netherWart: "./ingredients/nether_wart.png",
        magmaCream: "./ingredients/magma_cream.png",
        redstoneDust: "./ingredients/redstone_dust.png",
        gunpowder: "./ingredients/gunpowder.png",
        ghastTear: "./ingredients/ghast_tear.png",
        sugar: "./ingredients/sugar.png",
        glisteringWatermelon: "./ingredients/glistering_watermelon.png",
        glowstoneDust: "./ingredients/glowstone_dust.png",
        goldenCarrot: "./ingredients/golden_carrot.png",
        pufferfish: "./ingredients/pufferfish.png",
        fermentedSpiderEye: "./ingredients/fermented_spider_eye.png",
        rabbitsFoot: "./ingredients/rabbits_foot.png",
        spiderEye: "./ingredients/spider_eye.png",
        phantomMembrane: "./ingredients/phantom_membrane.png",
        turtleShell: "./ingredients/turtle_shell.png",
        slimeBlock: "./ingredients/slime_block.png",
        cobweb: "./ingredients/cobweb.png",
        breezeRod: "./ingredients/breeze_rod.png",
        stone: "./ingredients/stone.png",
    },
    potions: {
        waterBottle: "./potion_bottles/water_bottle.png",
        fireResistance: "./potion_bottles/potion_of_fire_resistance.png",
        regeneration: "./potion_bottles/potion_of_regeneration.png",
        strength: "./potion_bottles/potion_of_strength.png",
        swiftness: "./potion_bottles/potion_of_swiftness.png",
        leaping: "./potion_bottles/potion_of_leaping.png",
        slowness: "./potion_bottles/potion_of_slowness.png",
        weakness: "./potion_bottles/potion_of_weakness.png",
        poison: "./potion_bottles/potion_of_poison.png",
        harming: "./potion_bottles/potion_of_harming.png",
        healing: "./potion_bottles/potion_of_healing.png",
        nightVision: "./potion_bottles/potion_of_night_vision.png",
        waterBreathing: "./potion_bottles/potion_of_water_breathing.png",
        invisibility: "./potion_bottles/potion_of_invisibility.png",
        turtleMaster: "./potion_bottles/potion_of_the_turtle_master.png",
        slowFalling: "./potion_bottles/potion_of_slow_falling.png",
        oozing: "./potion_bottles/potion_of_oozing.png",
        weaving: "./potion_bottles/potion_of_weaving.png",
        windCharging: "./potion_bottles/potion_of_wind_charging.png",
        infestation: "./potion_bottles/potion_of_infestation.png",
    },
    splashPotions: {
        fireResistance: "./potion_bottles/splash_potion_of_fire_resistance.png",
        regeneration: "./potion_bottles/splash_potion_of_regeneration.png",
        strength: "./potion_bottles/splash_potion_of_strength.png",
        swiftness: "./potion_bottles/splash_potion_of_switfness.png",
        leaping: "./potion_bottles/splash_potion_of_leaping.png",
        slowness: "./potion_bottles/splash_potion_of_slowness.png",
        weakness: "./potion_bottles/splash_potion_of_weakness.png",
        poison: "./potion_bottles/splash_potion_of_poison.png",
        harming: "./potion_bottles/splash_potion_of_harming.png",
        healing: "./potion_bottles/splash_potion_of_healing.png",
        nightVision: "./potion_bottles/splash_potion_of_night_vision.png",
        waterBreathing: "./potion_bottles/splash_potion_of_water_breathing.png",
        invisibility: "./potion_bottles/splash_potion_of_invisibility.png",
        turtleMaster: "./potion_bottles/splash_potion_of_the_turtle_master.png",
        slowFalling: "./potion_bottles/splash_potion_of_slow_falling.png",
        oozing: "./potion_bottles/splash_potion_of_oozing.png",
        weaving: "./potion_bottles/splash_potion_of_weaving.png",
        windCharging: "./potion_bottles/splash_potion_of_wind_charging.png",
        infestation: "./potion_bottles/splash_potion_of_infestation.png",
    },
    uiElements: {
        harm2: "./ui_elements/harm_2.png",
        heal: "./ui_elements/heal.png",
        heal2: "./ui_elements/heal_2.png",
        poison: "./ui_elements/poison.png",
    },
};

function createRecipeDurationTextDisplay(text) {
    return {
        ariaLabel: text,
        segments: [{ type: "text", value: text }],
    };
}

function createRecipeDurationIconDisplay(ariaLabel, segments) {
    return { ariaLabel, segments };
}

function createRecipeDurationTextSegment(value) {
    return { type: "text", value };
}

function createRecipeDurationIconSegment(path) {
    return { type: "icon", path };
}

const POTION_DURATION_DISPLAYS = {
    "fire-resistance": createRecipeDurationTextDisplay("3:00"),
    harming: createRecipeDurationIconDisplay("-6 Health times 3", [
        createRecipeDurationTextSegment("-6 Health "),
        createRecipeDurationIconSegment(ASSETS.uiElements.harm2),
        createRecipeDurationTextSegment(" x3"),
    ]),
    healing: createRecipeDurationIconDisplay("+4 Health times 2", [
        createRecipeDurationTextSegment("+4 Health "),
        createRecipeDurationIconSegment(ASSETS.uiElements.heal2),
        createRecipeDurationTextSegment(" x2"),
    ]),
    infestation: createRecipeDurationTextDisplay("3:00"),
    invisibility: createRecipeDurationTextDisplay("3:00"),
    leaping: createRecipeDurationTextDisplay("+ 1/2 Jump, 3:00"),
    "night-vision": createRecipeDurationTextDisplay("3:00"),
    oozing: createRecipeDurationTextDisplay("3:00"),
    poison: createRecipeDurationIconDisplay("Poison every 2.5 seconds, 0:45", [
        createRecipeDurationTextSegment("- "),
        createRecipeDurationIconSegment(ASSETS.uiElements.poison),
        createRecipeDurationTextSegment("/ 2.5s, 0:45"),
    ]),
    regeneration: createRecipeDurationIconDisplay("Healing every 2.5 seconds, 0:45", [
        createRecipeDurationTextSegment("+ "),
        createRecipeDurationIconSegment(ASSETS.uiElements.heal),
        createRecipeDurationTextSegment("/ 2.5s, 0:45"),
    ]),
    "slow-falling": createRecipeDurationTextDisplay("1:30"),
    slowness: createRecipeDurationTextDisplay("-15% Speed, 1:30"),
    strength: createRecipeDurationTextDisplay("+3 Attack, 3:00"),
    swiftness: createRecipeDurationTextDisplay("+20% Speed, 3:00"),
    "turtle-master": createRecipeDurationTextDisplay("Slowness IV and Resistance III, 0:20"),
    "water-breathing": createRecipeDurationTextDisplay("3:00"),
    weakness: createRecipeDurationTextDisplay("-4 Attack, 1:30"),
    weaving: createRecipeDurationTextDisplay("3:00"),
    "wind-charging": createRecipeDurationTextDisplay("3:00"),
};

const POTION_RECIPES = [
    {
        id: "fire-resistance",
        name: "Fire Resistance",
        duration: "3:00",
        navIcon: ASSETS.effects.fireResistance,
        titleIcon: ASSETS.effects.fireResistance,
        flow: {
            ingredient: { name: "Magma Cream", icon: ASSETS.ingredients.magmaCream },
            basePotion: { name: "Awkward Potion", icon: ASSETS.potions.waterBottle },
            modifiers: [
                { label: "Redstone Dust", icon: ASSETS.ingredients.redstoneDust, detail: "+5:00 [8:00 total]" },
                { label: "Gunpowder", icon: ASSETS.ingredients.gunpowder, detail: "" },
            ],
            finalPotion: { label: "Splash Potion of Fire Resistance", icon: ASSETS.splashPotions.fireResistance },
        },
    },
    {
        id: "harming",
        name: "Harming",
        duration: "Instant",
        navIcon: ASSETS.effects.harming,
        titleIcon: ASSETS.effects.harming,
        flow: {
            ingredient: { name: "Fermented Spider Eye", icon: ASSETS.ingredients.fermentedSpiderEye },
            basePotion: { name: "Instant Health Potion", icon: ASSETS.potions.healing },
            modifiers: [
                { label: "Glowstone Dust", icon: ASSETS.ingredients.glowstoneDust, detail: "Instant Damage II" },
                { label: "Gunpowder", icon: ASSETS.ingredients.gunpowder, detail: "" },
            ],
            finalPotion: { label: "Splash Potion of Harming", icon: ASSETS.splashPotions.harming },
        },
    },
    {
        id: "regeneration",
        name: "Regeneration",
        duration: "0:45",
        navIcon: ASSETS.effects.regeneration,
        titleIcon: ASSETS.effects.regeneration,
        flow: {
            ingredient: { name: "Ghast Tear", icon: ASSETS.ingredients.ghastTear },
            basePotion: { name: "Awkward Potion", icon: ASSETS.potions.waterBottle },
            modifiers: [
                { label: "Redstone Dust", icon: ASSETS.ingredients.redstoneDust, detail: "+1:15 [2:00 total]" },
                { label: "Gunpowder", icon: ASSETS.ingredients.gunpowder, detail: "" },
            ],
            finalPotion: { label: "Splash Potion of Regeneration", icon: ASSETS.splashPotions.regeneration },
        },
    },
    {
        id: "strength",
        name: "Strength",
        duration: "3:00",
        navIcon: ASSETS.effects.strength,
        titleIcon: ASSETS.effects.strength,
        flow: {
            ingredient: { name: "Blaze Powder", icon: ASSETS.ingredients.blazePowder },
            basePotion: { name: "Awkward Potion", icon: ASSETS.potions.waterBottle },
            modifiers: [
                { label: "Redstone Dust", icon: ASSETS.ingredients.redstoneDust, detail: "+5:00 [8:00 total]" },
                { label: "Gunpowder", icon: ASSETS.ingredients.gunpowder, detail: "" },
            ],
            finalPotion: { label: "Splash Potion of Strength", icon: ASSETS.splashPotions.strength },
        },
    },
    {
        id: "swiftness",
        name: "Swiftness",
        duration: "3:00",
        navIcon: ASSETS.effects.swiftness,
        titleIcon: ASSETS.effects.swiftness,
        flow: {
            ingredient: { name: "Sugar", icon: ASSETS.ingredients.sugar },
            basePotion: { name: "Awkward Potion", icon: ASSETS.potions.waterBottle },
            modifiers: [
                { label: "Redstone Dust", icon: ASSETS.ingredients.redstoneDust, detail: "+5:00 [8:00 total]" },
                { label: "Gunpowder", icon: ASSETS.ingredients.gunpowder, detail: "" },
            ],
            finalPotion: { label: "Splash Potion of Swiftness", icon: ASSETS.splashPotions.swiftness },
        },
    },
    {
        id: "leaping",
        name: "Leaping",
        duration: "3:00",
        navIcon: ASSETS.effects.leaping,
        titleIcon: ASSETS.effects.leaping,
        flow: {
            ingredient: { name: "Rabbit's Foot", icon: ASSETS.ingredients.rabbitsFoot },
            basePotion: { name: "Awkward Potion", icon: ASSETS.potions.waterBottle },
            modifiers: [
                { label: "Redstone Dust", icon: ASSETS.ingredients.redstoneDust, detail: "+5:00 [8:00 total]" },
                { label: "Gunpowder", icon: ASSETS.ingredients.gunpowder, detail: "" },
            ],
            finalPotion: { label: "Splash Potion of Leaping", icon: ASSETS.splashPotions.leaping },
        },
    },
    {
        id: "slowness",
        name: "Slowness",
        duration: "1:30",
        navIcon: ASSETS.effects.slowness,
        titleIcon: ASSETS.effects.slowness,
        flow: {
            ingredient: { name: "Fermented Spider Eye", icon: ASSETS.ingredients.fermentedSpiderEye },
            basePotion: { name: "Potion of Swiftness", icon: ASSETS.potions.swiftness },
            modifiers: [
                { label: "Redstone Dust", icon: ASSETS.ingredients.redstoneDust, detail: "+2:30 [4:00 total]" },
                { label: "Gunpowder", icon: ASSETS.ingredients.gunpowder, detail: "" },
            ],
            finalPotion: { label: "Splash Potion of Slowness", icon: ASSETS.splashPotions.slowness },
        },
    },
    {
        id: "weakness",
        name: "Weakness",
        duration: "1:30",
        navIcon: ASSETS.effects.weakness,
        titleIcon: ASSETS.effects.weakness,
        flow: {
            ingredient: { name: "Fermented Spider Eye", icon: ASSETS.ingredients.fermentedSpiderEye },
            basePotion: { name: "Water Bottle", icon: ASSETS.potions.waterBottle },
            modifiers: [
                { label: "Redstone Dust", icon: ASSETS.ingredients.redstoneDust, detail: "+2:30 [4:00 total]" },
                { label: "Gunpowder", icon: ASSETS.ingredients.gunpowder, detail: "" },
            ],
            finalPotion: { label: "Splash Potion of Weakness", icon: ASSETS.splashPotions.weakness },
        },
    },
    {
        id: "poison",
        name: "Poison",
        duration: "0:45",
        navIcon: ASSETS.effects.poison,
        titleIcon: ASSETS.effects.poison,
        flow: {
            ingredient: { name: "Spider Eye", icon: ASSETS.ingredients.spiderEye },
            basePotion: { name: "Awkward Potion", icon: ASSETS.potions.waterBottle },
            modifiers: [
                { label: "Redstone Dust", icon: ASSETS.ingredients.redstoneDust, detail: "+1:30 [2:15 total]" },
                { label: "Gunpowder", icon: ASSETS.ingredients.gunpowder, detail: "" },
            ],
            finalPotion: { label: "Splash Potion of Poison", icon: ASSETS.splashPotions.poison },
        },
    },
    {
        id: "healing",
        name: "Healing",
        duration: "Instant",
        navIcon: ASSETS.effects.healing,
        titleIcon: ASSETS.effects.healing,
        flow: {
            ingredient: { name: "Glistering Watermelon", icon: ASSETS.ingredients.glisteringWatermelon },
            basePotion: { name: "Awkward Potion", icon: ASSETS.potions.waterBottle },
            modifiers: [
                { label: "Glowstone Dust", icon: ASSETS.ingredients.glowstoneDust, detail: "Instant Health II" },
                { label: "Gunpowder", icon: ASSETS.ingredients.gunpowder, detail: "" },
            ],
            finalPotion: { label: "Splash Potion of Healing", icon: ASSETS.splashPotions.healing },
        },
    },
    {
        id: "night-vision",
        name: "Night Vision",
        duration: "3:00",
        navIcon: ASSETS.effects.nightVision,
        titleIcon: ASSETS.effects.nightVision,
        flow: {
            ingredient: { name: "Golden Carrot", icon: ASSETS.ingredients.goldenCarrot },
            basePotion: { name: "Awkward Potion", icon: ASSETS.potions.waterBottle },
            modifiers: [
                { label: "Redstone Dust", icon: ASSETS.ingredients.redstoneDust, detail: "+5:00 [8:00 total]" },
                { label: "Gunpowder", icon: ASSETS.ingredients.gunpowder, detail: "" },
            ],
            finalPotion: { label: "Splash Potion of Night Vision", icon: ASSETS.splashPotions.nightVision },
        },
    },
    {
        id: "water-breathing",
        name: "Water Breathing",
        duration: "3:00",
        navIcon: ASSETS.effects.waterBreathing,
        titleIcon: ASSETS.effects.waterBreathing,
        flow: {
            ingredient: { name: "Pufferfish", icon: ASSETS.ingredients.pufferfish },
            basePotion: { name: "Awkward Potion", icon: ASSETS.potions.waterBottle },
            modifiers: [
                { label: "Redstone Dust", icon: ASSETS.ingredients.redstoneDust, detail: "+5:00 [8:00 total]" },
                { label: "Gunpowder", icon: ASSETS.ingredients.gunpowder, detail: "" },
            ],
            finalPotion: { label: "Splash Potion of Water Breathing", icon: ASSETS.splashPotions.waterBreathing },
        },
    },
    {
        id: "invisibility",
        name: "Invisibility",
        duration: "3:00",
        navIcon: ASSETS.effects.invisibility,
        titleIcon: ASSETS.effects.invisibility,
        flow: {
            ingredient: { name: "Fermented Spider Eye", icon: ASSETS.ingredients.fermentedSpiderEye },
            basePotion: { name: "Night Vision Potion", icon: ASSETS.potions.nightVision },
            modifiers: [
                { label: "Redstone Dust", icon: ASSETS.ingredients.redstoneDust, detail: "+5:00 [8:00 total]" },
                { label: "Gunpowder", icon: ASSETS.ingredients.gunpowder, detail: "" },
            ],
            finalPotion: { label: "Splash Potion of Invisibility", icon: ASSETS.splashPotions.invisibility },
        },
    },
    {
        id: "turtle-master",
        name: "Turtle Master",
        duration: "0:20",
        navIcon: ASSETS.effects.turtleMaster,
        titleIcon: ASSETS.effects.turtleMaster,
        flow: {
            ingredient: { name: "Turtle Shell", icon: ASSETS.ingredients.turtleShell },
            basePotion: { name: "Awkward Potion", icon: ASSETS.potions.waterBottle },
            modifiers: [
                { label: "Redstone Dust", icon: ASSETS.ingredients.redstoneDust, detail: "+0:20 [0:40 total]" },
                { label: "Gunpowder", icon: ASSETS.ingredients.gunpowder, detail: "" },
            ],
            finalPotion: { label: "Splash Potion of the Turtle Master", icon: ASSETS.splashPotions.turtleMaster },
        },
    },
    {
        id: "slow-falling",
        name: "Slow Falling",
        duration: "1:30",
        navIcon: ASSETS.effects.slowFalling,
        titleIcon: ASSETS.effects.slowFalling,
        flow: {
            ingredient: { name: "Phantom Membrane", icon: ASSETS.ingredients.phantomMembrane },
            basePotion: { name: "Awkward Potion", icon: ASSETS.potions.waterBottle },
            modifiers: [
                { label: "Redstone Dust", icon: ASSETS.ingredients.redstoneDust, detail: "+2:30 [4:00 total]" },
                { label: "Gunpowder", icon: ASSETS.ingredients.gunpowder, detail: "" },
            ],
            finalPotion: { label: "Splash Potion of Slow Falling", icon: ASSETS.splashPotions.slowFalling },
        },
    },
    {
        id: "oozing",
        name: "Oozing",
        duration: "3:00",
        navIcon: ASSETS.effects.oozing,
        titleIcon: ASSETS.effects.oozing,
        flow: {
            ingredient: { name: "Slime Block", icon: ASSETS.ingredients.slimeBlock },
            basePotion: { name: "Awkward Potion", icon: ASSETS.potions.waterBottle },
            modifiers: [
                { label: "Redstone Dust", icon: ASSETS.ingredients.redstoneDust, detail: "+5:00 [8:00 total]" },
                { label: "Gunpowder", icon: ASSETS.ingredients.gunpowder, detail: "" },
            ],
            finalPotion: { label: "Splash Potion of Oozing", icon: ASSETS.splashPotions.oozing },
        },
    },
    {
        id: "weaving",
        name: "Weaving",
        duration: "3:00",
        navIcon: ASSETS.effects.weaving,
        titleIcon: ASSETS.effects.weaving,
        flow: {
            ingredient: { name: "Cobweb", icon: ASSETS.ingredients.cobweb },
            basePotion: { name: "Awkward Potion", icon: ASSETS.potions.waterBottle },
            modifiers: [
                { label: "Redstone Dust", icon: ASSETS.ingredients.redstoneDust, detail: "+5:00 [8:00 total]" },
                { label: "Gunpowder", icon: ASSETS.ingredients.gunpowder, detail: "" },
            ],
            finalPotion: { label: "Splash Potion of Weaving", icon: ASSETS.splashPotions.weaving },
        },
    },
    {
        id: "wind-charging",
        name: "Wind Charging",
        duration: "3:00",
        navIcon: ASSETS.effects.windCharging,
        titleIcon: ASSETS.effects.windCharging,
        flow: {
            ingredient: { name: "Breeze Rod", icon: ASSETS.ingredients.breezeRod },
            basePotion: { name: "Awkward Potion", icon: ASSETS.potions.waterBottle },
            modifiers: [
                { label: "Redstone Dust", icon: ASSETS.ingredients.redstoneDust, detail: "+5:00 [8:00 total]" },
                { label: "Gunpowder", icon: ASSETS.ingredients.gunpowder, detail: "" },
            ],
            finalPotion: { label: "Splash Potion of Wind Charging", icon: ASSETS.splashPotions.windCharging },
        },
    },
    {
        id: "awkward-potion",
        name: "Awkward Potion",
        duration: "Base",
        navIcon: ASSETS.potions.waterBottle,
        titleIcon: ASSETS.ingredients.netherWart,
        flow: {
            ingredient: { name: "Nether Wart", icon: ASSETS.ingredients.netherWart },
            basePotion: { name: "Water Bottle", icon: ASSETS.potions.waterBottle },
            modifiers: [],
            finalPotion: { label: "Awkward Potion", icon: ASSETS.potions.waterBottle },
        },
    },
    {
        id: "infestation",
        name: "Infestation",
        duration: "3:00",
        navIcon: ASSETS.effects.infestation,
        titleIcon: ASSETS.effects.infestation,
        flow: {
            ingredient: { name: "Stone", icon: ASSETS.ingredients.stone },
            basePotion: { name: "Awkward Potion", icon: ASSETS.potions.waterBottle },
            modifiers: [
                { label: "Redstone Dust", icon: ASSETS.ingredients.redstoneDust, detail: "+5:00 [8:00 total]" },
                { label: "Gunpowder", icon: ASSETS.ingredients.gunpowder, detail: "" },
            ],
            finalPotion: { label: "Splash Potion of Infestation", icon: ASSETS.splashPotions.infestation },
        },
    },
].sort((a, b) => {
    if (a.id === "awkward-potion") {
        return 1;
    }
    if (b.id === "awkward-potion") {
        return -1;
    }
    return a.name.localeCompare(b.name);
});

const DEFAULT_POTION_ACCENT_RGB = "142 192 255";

const state = {
    selectedPotionId: DEFAULT_POTION_ID,
    layoutTunerValues: null,
};

const assetImagePromiseCache = new Map();
const assetNaturalSizeCache = new Map();
const assetVisibleBoundsRatioCache = new Map();
const ingredientLabelHeightCache = new Map();
const queuedBackgroundAssetPaths = new Set();
const backgroundAssetQueue = [];
const potionAccentRgbCache = new Map();
let backgroundAssetQueueIsRunning = false;
let bubbleAnimationTimerId = null;
let bubbleAnimationFrameIndex = 0;
let recipePanelRenderRequestId = 0;
let recipeSlotFitFrameId = null;
let ingredientSlotScaleReadyPromise = null;
let ingredientSlotLargestVisibleBoundsRatio = 1;

document.addEventListener("DOMContentLoaded", () => {
    initializeThemeToggle();
    initializeRecipeSlotFitUpdates();
    void initializePotionGuide();
});

async function initializePotionGuide() {
    const selectedPotion = getSelectedPotion();
    await Promise.all([
        ensurePotionRenderAssets(selectedPotion),
        ensureIngredientSlotScaleReady(),
        primeInitialPotionAccent(),
    ]);
    PotionGuidePage();
    warmPotionAssetsInBackground(selectedPotion);
    void primePotionAccents();
    if (shouldEnableLayoutTuner()) {
        initializeLayoutTuner();
    }
}

function getPotionAccentRgb(potionId) {
    return potionAccentRgbCache.get(potionId) || DEFAULT_POTION_ACCENT_RGB;
}

function applyPotionAccent(potion) {
    if (!potion) {
        return;
    }

    applyPotionAccentRgb(getPotionAccentRgb(potion.id));

    void resolvePotionAccentRgb(potion).then((rgb) => {
        if (state.selectedPotionId === potion.id) {
            applyPotionAccentRgb(rgb);
        }
    });
}

function applyPotionAccentRgb(rgb) {
    const page = document.getElementById("potion-guide-page");
    if (!page) {
        return;
    }

    page.style.setProperty("--potion-accent-rgb", rgb);
}

async function primePotionAccents() {
    const uncachedPotions = POTION_RECIPES.filter((potion) => !potionAccentRgbCache.has(potion.id));
    for (const potion of uncachedPotions) {
        await waitForBrowserIdle();
        await resolvePotionAccentRgb(potion);
        syncPotionListAccent(potion.id);
        await waitForNextPaint();
    }

    syncPotionListAccents();
    applyPotionAccent(getSelectedPotion());
}

async function primeInitialPotionAccent() {
    const selectedPotion = getSelectedPotion();
    const rgb = await resolvePotionAccentRgb(selectedPotion);
    applyPotionAccentRgb(rgb);
}

async function resolvePotionAccentRgb(potion) {
    if (!potion) {
        return DEFAULT_POTION_ACCENT_RGB;
    }

    const cachedAccent = potionAccentRgbCache.get(potion.id);
    if (cachedAccent) {
        return cachedAccent;
    }

    const bottlePath = getPotionBottleAsset(potion);

    try {
        const image = await loadAccentImage(bottlePath);
        const rgb = samplePotionBottleCenterRgb(image);
        potionAccentRgbCache.set(potion.id, rgb);
        return rgb;
    } catch (_error) {
        potionAccentRgbCache.set(potion.id, DEFAULT_POTION_ACCENT_RGB);
        return DEFAULT_POTION_ACCENT_RGB;
    }
}

function loadAccentImage(path) {
    return loadAssetImage(path, { fetchPriority: "high" });
}

function samplePotionBottleCenterRgb(image) {
    const width = image.naturalWidth || image.width;
    const height = image.naturalHeight || image.height;
    if (!width || !height) {
        return DEFAULT_POTION_ACCENT_RGB;
    }

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext("2d", { willReadFrequently: true });
    if (!context) {
        return DEFAULT_POTION_ACCENT_RGB;
    }

    context.drawImage(image, 0, 0, width, height);

    const centerX = Math.floor(width / 2);
    const centerY = Math.floor(height / 2);
    const sampleRadius = Math.max(3, Math.round(Math.min(width, height) * 0.06));
    const left = clampSampleCoordinate(centerX - sampleRadius, width);
    const top = clampSampleCoordinate(centerY - sampleRadius, height);
    const sampleWidth = Math.max(1, Math.min(width - left, (sampleRadius * 2) + 1));
    const sampleHeight = Math.max(1, Math.min(height - top, (sampleRadius * 2) + 1));
    const imageData = context.getImageData(left, top, sampleWidth, sampleHeight).data;

    let redTotal = 0;
    let greenTotal = 0;
    let blueTotal = 0;
    let weightTotal = 0;

    for (let index = 0; index < imageData.length; index += 4) {
        const alpha = imageData[index + 3] / 255;
        if (alpha < 0.2) {
            continue;
        }

        redTotal += imageData[index] * alpha;
        greenTotal += imageData[index + 1] * alpha;
        blueTotal += imageData[index + 2] * alpha;
        weightTotal += alpha;
    }

    if (weightTotal === 0) {
        return DEFAULT_POTION_ACCENT_RGB;
    }

    const red = Math.round(redTotal / weightTotal);
    const green = Math.round(greenTotal / weightTotal);
    const blue = Math.round(blueTotal / weightTotal);
    return `${red} ${green} ${blue}`;
}

function clampSampleCoordinate(value, max) {
    return Math.max(0, Math.min(value, max - 1));
}

function focusPotionListButton(index) {
    const buttons = [...document.querySelectorAll(".potion-list-item")];
    if (buttons.length === 0) {
        return;
    }

    const clampedIndex = Math.max(0, Math.min(index, buttons.length - 1));
    buttons[clampedIndex].focus();
}

function handlePotionListItemKeydown(event, button) {
    const buttons = [...document.querySelectorAll(".potion-list-item")];
    const currentIndex = buttons.indexOf(button);
    if (currentIndex === -1) {
        return;
    }

    if (event.key === "ArrowDown") {
        event.preventDefault();
        focusPotionListButton(currentIndex + 1);
        return;
    }

    if (event.key === "ArrowUp") {
        event.preventDefault();
        focusPotionListButton(currentIndex - 1);
        return;
    }

    if (event.key === "Home") {
        event.preventDefault();
        focusPotionListButton(0);
        return;
    }

    if (event.key === "End") {
        event.preventDefault();
        focusPotionListButton(buttons.length - 1);
    }
}

function shouldEnableLayoutTuner() {
    try {
        const value = new URLSearchParams(window.location.search).get("layoutTuner");
        if (!value) {
            return false;
        }
        return ["1", "true", "yes", "on"].includes(value.toLowerCase());
    } catch (_error) {
        return false;
    }
}

function PotionGuidePage() {
    PotionSidebar();
    PotionRecipePanel(getSelectedPotion());
}

function initializeLayoutTuner() {
    if (!document.body) {
        return;
    }

    const values = createDefaultLayoutTunerValues();
    state.layoutTunerValues = values;
    applyLayoutTunerValues(values);

    const tunerRoot = document.createElement("div");
    tunerRoot.className = "layout-tuner-root";

    const panel = document.createElement("section");
    panel.id = "layout-tuner-panel";
    panel.className = "layout-tuner-panel";
    panel.hidden = true;

    const title = document.createElement("h3");
    title.className = "layout-tuner-title";
    title.textContent = "Layout Tuner (Temporary)";

    const list = document.createElement("div");
    list.className = "layout-tuner-list";

    const bindings = [];

    LAYOUT_TUNER_CONTROLS.forEach((control) => {
        const row = document.createElement("section");
        row.className = "layout-tuner-row";

        const rowTitle = document.createElement("div");
        rowTitle.className = "layout-tuner-row-title";
        rowTitle.textContent = control.label;

        const axisGrid = document.createElement("div");
        axisGrid.className = "layout-tuner-axis-grid";

        axisGrid.append(
            createLayoutTunerAxis({
                axisLabel: "X",
                varName: control.xVar,
                values,
                bindings,
                range: LAYOUT_TUNER_OFFSET_RANGE,
                mode: "offset",
            }),
            createLayoutTunerAxis({
                axisLabel: "Y",
                varName: control.yVar,
                values,
                bindings,
                range: LAYOUT_TUNER_OFFSET_RANGE,
                mode: "offset",
            }),
            createLayoutTunerAxis({
                axisLabel: "Scale",
                varName: control.scaleVar,
                values,
                bindings,
                range: LAYOUT_TUNER_SCALE_RANGE,
                mode: "scale",
            })
        );

        row.append(rowTitle, axisGrid);
        list.append(row);
    });

    const actions = document.createElement("div");
    actions.className = "layout-tuner-actions";

    const dumpButton = document.createElement("button");
    dumpButton.type = "button";
    dumpButton.className = "layout-tuner-btn";
    dumpButton.textContent = "Dump Locations";

    const resetButton = document.createElement("button");
    resetButton.type = "button";
    resetButton.className = "layout-tuner-btn";
    resetButton.textContent = "Reset";

    const output = document.createElement("pre");
    output.className = "layout-tuner-output";
    output.textContent = "Adjust sliders, then click Dump Locations.";

    dumpButton.addEventListener("click", () => {
        const dump = formatLayoutTunerDump(values);
        output.textContent = dump;
        console.log("[Layout Tuner] Copy this block into style.css:\n" + dump);
        copyTextToClipboard(dump)
            .then((copied) => {
                if (copied) {
                    output.textContent = `${dump}\n\n(Copied to clipboard)`;
                }
            })
            .catch(() => {
                // Ignore copy failures in non-secure contexts.
            });
    });

    resetButton.addEventListener("click", () => {
        bindings.forEach((binding) => {
            values[binding.varName] = binding.resetValue;
            binding.input.value = String(binding.resetValue);
            binding.valueLabel.textContent = binding.formatValue(binding.resetValue);
        });
        applyLayoutTunerValues(values);
        output.textContent = "All offsets/scales reset to defaults.";
    });

    actions.append(dumpButton, resetButton);
    panel.append(title, list, actions, output);

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "layout-tuner-toggle";
    toggle.textContent = "Layout Tuner";
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-controls", panel.id);

    toggle.addEventListener("click", () => {
        const isOpen = !panel.hidden;
        panel.hidden = isOpen;
        toggle.setAttribute("aria-expanded", isOpen ? "false" : "true");
    });

    tunerRoot.append(panel, toggle);
    document.body.append(tunerRoot);
}

function createLayoutTunerAxis({ axisLabel, varName, values, bindings, range, mode }) {
    const axis = document.createElement("label");
    axis.className = "layout-tuner-axis";

    const head = document.createElement("span");
    head.className = "layout-tuner-axis-head";

    const axisName = document.createElement("span");
    axisName.textContent = axisLabel;

    const valueLabel = document.createElement("span");
    valueLabel.className = "layout-tuner-value";
    const defaultValue = mode === "scale" ? 1 : 0;
    const formatValue = mode === "scale" ? formatLayoutTunerScaleValue : formatLayoutTunerOffsetValue;
    valueLabel.textContent = formatValue(values[varName] ?? defaultValue);

    head.append(axisName, valueLabel);

    const input = document.createElement("input");
    input.type = "range";
    input.min = String(range.min);
    input.max = String(range.max);
    input.step = String(range.step);
    input.value = String(values[varName] ?? defaultValue);

    input.addEventListener("input", () => {
        const nextValue = mode === "scale"
            ? Number.parseFloat(input.value) || 1
            : Number.parseInt(input.value, 10) || 0;
        values[varName] = nextValue;
        valueLabel.textContent = formatValue(nextValue);
        applyLayoutTunerValues(values);
    });

    bindings.push({ varName, input, valueLabel, resetValue: defaultValue, formatValue });
    axis.append(head, input);
    return axis;
}

function createDefaultLayoutTunerValues() {
    return LAYOUT_TUNER_CONTROLS.reduce((nextValues, control) => {
        nextValues[control.xVar] = LAYOUT_TUNER_DEFAULT_VALUES[control.xVar] ?? 0;
        nextValues[control.yVar] = LAYOUT_TUNER_DEFAULT_VALUES[control.yVar] ?? 0;
        nextValues[control.scaleVar] = LAYOUT_TUNER_DEFAULT_VALUES[control.scaleVar] ?? 1;
        return nextValues;
    }, {});
}

function applyLayoutTunerValues(values) {
    const diagram = document.querySelector(".recipe-flow-diagram");
    if (!diagram || !values) {
        return;
    }

    Object.entries(values).forEach(([varName, value]) => {
        const isScaleVar = varName.endsWith("-scale");
        diagram.style.setProperty(varName, isScaleVar ? String(value) : `${value}px`);
    });

    queueRecipeSlotFit();
}

function formatLayoutTunerOffsetValue(value) {
    return `${value}px`;
}

function formatLayoutTunerScaleValue(value) {
    return `${Number(value).toFixed(2)}x`;
}

function formatLayoutTunerDump(values) {
    const lines = [
        "/* Temporary layout tuner dump */",
        "/* Paste these into .recipe-flow-diagram to make them defaults */",
        ".recipe-flow-diagram {",
    ];

    LAYOUT_TUNER_CONTROLS.forEach((control) => {
        lines.push(`    ${control.xVar}: ${values[control.xVar]}px;`);
        lines.push(`    ${control.yVar}: ${values[control.yVar]}px;`);
        lines.push(`    ${control.scaleVar}: ${formatLayoutTunerScaleDumpValue(values[control.scaleVar])};`);
    });

    lines.push("}");
    return lines.join("\n");
}

function formatLayoutTunerScaleDumpValue(value) {
    return String(Number.parseFloat(Number(value).toFixed(2)));
}

async function copyTextToClipboard(text) {
    if (!navigator.clipboard || typeof navigator.clipboard.writeText !== "function") {
        return false;
    }

    await navigator.clipboard.writeText(text);
    return true;
}

async function ensurePotionRenderAssets(potion) {
    const assetPaths = collectPotionRenderAssetPaths(potion);
    await Promise.allSettled(assetPaths.map((path) => loadAssetImage(path, { fetchPriority: "high" })));
}

function collectPotionAssetPaths(recipes) {
    const paths = new Set();
    UI_LAYOUT_ASSET_PATHS.forEach((path) => addAssetPath(paths, path));
    recipes.forEach((potion) => {
        addAssetPath(paths, potion.navIcon);
        addAssetPath(paths, potion.titleIcon);
        addAssetPath(paths, getPotionBottleAsset(potion));
        getPotionDurationAssetPaths(potion).forEach((path) => addAssetPath(paths, path));
        addAssetPath(paths, potion.flow?.ingredient?.icon);
        addAssetPath(paths, potion.flow?.basePotion?.icon);
        addAssetPath(paths, potion.flow?.finalPotion?.icon);
        potion.flow?.modifiers?.forEach((modifier) => {
            addAssetPath(paths, modifier.icon);
            getModifierOutcomeIcons(potion, modifier, potion.flow).forEach(({ path }) => addAssetPath(paths, path));
        });
    });
    return [...paths];
}

function collectPotionRenderAssetPaths(potion) {
    const paths = new Set();
    UI_LAYOUT_ASSET_PATHS.forEach((path) => addAssetPath(paths, path));
    addAssetPath(paths, potion?.titleIcon);
    addAssetPath(paths, getPotionBottleAsset(potion));
    getPotionDurationAssetPaths(potion).forEach((path) => addAssetPath(paths, path));
    addAssetPath(paths, potion?.flow?.ingredient?.icon);
    addAssetPath(paths, potion?.flow?.basePotion?.icon);
    addAssetPath(paths, potion?.flow?.finalPotion?.icon);
    potion?.flow?.modifiers?.forEach((modifier) => {
        addAssetPath(paths, modifier.icon);
        getModifierOutcomeIcons(potion, modifier, potion?.flow).forEach(({ path }) => addAssetPath(paths, path));
    });
    return [...paths];
}

function collectPotionListAssetPaths(recipes) {
    const paths = new Set();
    recipes.forEach((potion) => addAssetPath(paths, potion.navIcon));
    return [...paths];
}

function getPotionBottleAsset(potion) {
    const potionKey = normalizePotionIdToAssetKey(potion?.id);
    if (potionKey && ASSETS.potions[potionKey]) {
        return ASSETS.potions[potionKey];
    }
    return ASSETS.potions.waterBottle;
}

function normalizePotionIdToAssetKey(id) {
    return (id || "").replace(/-([a-z])/g, (_match, letter) => letter.toUpperCase());
}

function addAssetPath(paths, path) {
    if (!path) {
        return;
    }
    paths.add(path);
}

function warmPotionAssetsInBackground(selectedPotion) {
    enqueueBackgroundAssetWarmup(collectPotionListAssetPaths(POTION_RECIPES));

    const selectedPotionAssetPaths = new Set(collectPotionRenderAssetPaths(selectedPotion));
    const remainingAssetPaths = collectPotionAssetPaths(POTION_RECIPES).filter((path) => !selectedPotionAssetPaths.has(path));
    enqueueBackgroundAssetWarmup(remainingAssetPaths);
}

function warmPotionRenderAssets(potion) {
    enqueueBackgroundAssetWarmup(collectPotionRenderAssetPaths(potion));
}

function enqueueBackgroundAssetWarmup(paths) {
    paths.forEach((path) => {
        if (!path || assetImagePromiseCache.has(path) || queuedBackgroundAssetPaths.has(path)) {
            return;
        }

        queuedBackgroundAssetPaths.add(path);
        backgroundAssetQueue.push(path);
    });

    if (!backgroundAssetQueueIsRunning && backgroundAssetQueue.length > 0) {
        void drainBackgroundAssetQueue();
    }
}

async function drainBackgroundAssetQueue() {
    backgroundAssetQueueIsRunning = true;

    while (backgroundAssetQueue.length > 0) {
        const path = backgroundAssetQueue.shift();
        queuedBackgroundAssetPaths.delete(path);

        if (!path || assetImagePromiseCache.has(path)) {
            continue;
        }

        await waitForBrowserIdle();
        await loadAssetImage(path).catch(() => null);
        await waitForNextPaint();
    }

    backgroundAssetQueueIsRunning = false;
}

function waitForBrowserIdle(timeout = BACKGROUND_ASSET_WARMUP_IDLE_TIMEOUT_MS) {
    if (typeof window.requestIdleCallback === "function") {
        return new Promise((resolve) => {
            window.requestIdleCallback(() => resolve(), { timeout });
        });
    }

    return new Promise((resolve) => {
        window.setTimeout(resolve, 48);
    });
}

function waitForNextPaint() {
    return new Promise((resolve) => {
        window.requestAnimationFrame(() => resolve());
    });
}

function ensureIngredientSlotScaleReady() {
    if (ingredientSlotScaleReadyPromise) {
        return ingredientSlotScaleReadyPromise;
    }

    const ingredientPaths = getRecipeIngredientPaths();
    ingredientSlotScaleReadyPromise = Promise.all(
        ingredientPaths.map(async (path) => {
            try {
                const image = await loadAssetImage(path, { fetchPriority: "high" });
                return getAssetVisibleBoundsRatio(path, image);
            } catch (_error) {
                return 1;
            }
        })
    ).then((ratios) => {
        ingredientSlotLargestVisibleBoundsRatio = Math.max(0.01, ...ratios);
        queueRecipeSlotFit();
    }).catch(() => {
        ingredientSlotLargestVisibleBoundsRatio = 1;
    });

    return ingredientSlotScaleReadyPromise;
}

function getRecipeIngredientPaths() {
    return [...new Set(POTION_RECIPES
        .map((potion) => potion.flow?.ingredient?.icon)
        .filter(Boolean))];
}

function getRecipeIngredientLabels() {
    return [...new Set(POTION_RECIPES
        .map((potion) => potion.flow?.ingredient?.name)
        .filter(Boolean))];
}

function loadAssetImage(path, { fetchPriority = "auto" } = {}) {
    if (!path) {
        return Promise.reject(new Error("Missing asset image path."));
    }

    const cachedPromise = assetImagePromiseCache.get(path);
    if (cachedPromise) {
        return cachedPromise;
    }

    const imagePromise = new Promise((resolve, reject) => {
        const image = new Image();
        let isSettled = false;

        const finalizeImage = async () => {
            if (isSettled) {
                return;
            }

            try {
                if (typeof image.decode === "function") {
                    await image.decode();
                }
            } catch (_error) {
                if (!image.complete || image.naturalWidth === 0) {
                    isSettled = true;
                    reject(new Error(`Failed to decode asset image: ${path}`));
                    return;
                }
            }

            if (isSettled) {
                return;
            }

            isSettled = true;
            cacheAssetNaturalSize(path, image);
            resolve(image);
        };

        image.decoding = "async";
        if ("fetchPriority" in image && fetchPriority !== "auto") {
            image.fetchPriority = fetchPriority;
        }

        image.onload = () => {
            void finalizeImage();
        };
        image.onerror = () => {
            if (isSettled) {
                return;
            }

            isSettled = true;
            reject(new Error(`Failed to load asset image: ${path}`));
        };
        image.src = path;

        if (image.complete && image.naturalWidth > 0) {
            void finalizeImage();
        }
    }).catch((error) => {
        assetImagePromiseCache.delete(path);
        throw error;
    });

    assetImagePromiseCache.set(path, imagePromise);
    return imagePromise;
}

function cacheAssetNaturalSize(path, image) {
    const width = image.naturalWidth || image.width;
    const height = image.naturalHeight || image.height;
    if (!width || !height) {
        return;
    }

    assetNaturalSizeCache.set(path, { width, height });
}

function createAssetImage(path, className, {
    alt = "",
    decorative = false,
    loading = "eager",
    fetchPriority = "auto",
} = {}) {
    const image = document.createElement("img");
    if (className) {
        image.className = className;
    }

    image.decoding = "async";
    image.loading = loading;
    image.draggable = false;
    if ("fetchPriority" in image && fetchPriority !== "auto") {
        image.fetchPriority = fetchPriority;
    }

    const naturalSize = assetNaturalSizeCache.get(path);
    if (naturalSize) {
        image.width = naturalSize.width;
        image.height = naturalSize.height;
    }

    image.src = path;

    if (decorative) {
        image.alt = "";
        image.setAttribute("aria-hidden", "true");
    } else {
        image.alt = alt;
    }

    return image;
}

function PotionSidebar() {
    const listElement = document.getElementById("potion-list");
    if (!listElement) {
        return;
    }

    listElement.replaceChildren(
        ...POTION_RECIPES.map((potion, index) => {
            const isSelected = potion.id === state.selectedPotionId;
            return PotionListItem(potion, isSelected, index);
        })
    );
}

function syncPotionListAccents() {
    document.querySelectorAll(".potion-list-item").forEach((button) => {
        const potionId = button.dataset.potionId;
        if (!potionId) {
            return;
        }

        button.style.setProperty("--potion-row-accent-rgb", getPotionAccentRgb(potionId));
    });
}

function syncPotionListAccent(potionId) {
    const button = document.querySelector(`[data-potion-id="${potionId}"]`);
    if (!button) {
        return;
    }

    button.style.setProperty("--potion-row-accent-rgb", getPotionAccentRgb(potionId));
}

function PotionListItem(potion, isSelected, index) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `potion-list-item${isSelected ? " is-selected" : ""}`;
    button.dataset.potionId = potion.id;
    button.setAttribute("aria-pressed", isSelected ? "true" : "false");
    button.style.setProperty("--entry-delay", `${index * 24}ms`);
    button.style.setProperty("--potion-row-accent-rgb", getPotionAccentRgb(potion.id));

    const navIcon = createAssetImage(potion.navIcon, "potion-nav-icon", {
        decorative: true,
        loading: "lazy",
        fetchPriority: "low",
    });

    const copy = document.createElement("span");
    copy.className = "potion-list-copy";

    const name = document.createElement("span");
    name.className = "potion-name";
    name.textContent = potion.name;

    copy.append(name);
    button.append(navIcon, copy);

    button.addEventListener("click", () => {
        void selectPotion(potion.id);
    });

    button.addEventListener("keydown", (event) => {
        handlePotionListItemKeydown(event, button);
    });

    button.addEventListener("mouseenter", () => {
        warmPotionRenderAssets(potion);
    });

    button.addEventListener("focus", () => {
        warmPotionRenderAssets(potion);
    });

    return button;
}

function PotionRecipePanel(potion) {
    const panel = document.getElementById("recipe-panel");
    if (!panel || !potion) {
        return;
    }

    panel.setAttribute("aria-label", `${potion.name} recipe`);
    stopBubbleAnimation();
    panel.replaceChildren(RecipeFlowDiagram(potion));
    startBubbleAnimation(getBubbleAnimationTargets(panel));
    applyLayoutTunerValues(state.layoutTunerValues);
    applyPotionAccent(potion);
    queueRecipeSlotFit();
}

function RecipeHeader(potion) {
    const header = document.createElement("header");
    header.className = "recipe-header";

    const titleRow = document.createElement("div");
    titleRow.className = "recipe-title-row";

    const iconShell = document.createElement("div");
    iconShell.className = "recipe-title-icon-shell";

    const icon = createAssetImage(potion.titleIcon, "recipe-title-icon", {
        alt: `${potion.name} effect icon`,
        fetchPriority: "high",
    });
    iconShell.append(icon);

    const textWrap = document.createElement("div");
    textWrap.className = "recipe-title-block";

    const prefix = document.createElement("p");
    prefix.className = "recipe-title-prefix";
    prefix.textContent = "Potion of";

    const title = document.createElement("h2");
    title.className = "recipe-title";
    title.textContent = potion.name;

    const spacer = document.createElement("div");
    spacer.className = "recipe-title-spacer";
    spacer.setAttribute("aria-hidden", "true");

    const duration = createRecipeDuration(potion);

    textWrap.append(prefix, title);
    titleRow.append(iconShell, textWrap, spacer);

    header.append(titleRow, duration);
    return header;
}

function RecipeFlowDiagram(potion) {
    const flow = potion.flow;
    const modifiers = flow.modifiers || [];
    const section = document.createElement("section");
    section.className = "recipe-flow-diagram";

    const titleHeader = RecipeHeader(potion);
    titleHeader.classList.add("recipe-flow-header");

    const showcase = document.createElement("div");
    showcase.className = "recipe-showcase";

    const stageColumn = document.createElement("div");
    stageColumn.className = "recipe-stage-column";

    const layoutArt = document.createElement("div");
    layoutArt.className = "flow-layout-art";

    const layoutMain = createAssetImage(UI_MAIN_ASSET_PATH, "flow-layout-main", {
        decorative: true,
        fetchPriority: "high",
    });
    const mainShell = document.createElement("div");
    mainShell.className = "flow-layout-main-shell";

    const slotLayer = document.createElement("div");
    slotLayer.className = "flow-slot-layer";

    const layoutBubbles = createBubbleAnimationStack();

    const layoutBottle = createAssetImage(getPotionBottleAsset(potion), "flow-layout-bottle", {
        decorative: true,
        fetchPriority: "high",
    });

    const layoutArrow = createAssetImage(
        UI_ARROW_FRAME_PATHS[bubbleAnimationFrameIndex % UI_ARROW_FRAME_PATHS.length],
        "flow-layout-arrow",
        {
            decorative: true,
            fetchPriority: "high",
        }
    );

    const ingredientSlot = createFlowSlot(flow.ingredient, "top");
    const baseSlot = createFlowSlot(flow.basePotion, "bottom");
    const ingredientNode = ingredientSlot.querySelector(".recipe-node");
    const baseNode = baseSlot.querySelector(".recipe-node");
    setFlowDelay(ingredientNode, 120);
    setFlowDelay(baseNode, 200);

    slotLayer.append(ingredientSlot, baseSlot);
    mainShell.append(layoutMain, slotLayer);
    layoutArt.append(layoutBubbles, layoutBottle, mainShell, layoutArrow);
    stageColumn.append(titleHeader, layoutArt);

    const modifierLane = document.createElement("div");
    modifierLane.className = "modifier-lane";

    const modifierLaneShell = document.createElement("div");
    modifierLaneShell.className = "modifier-lane-shell";

    modifiers.forEach((modifier, index) => {
        const modifierRow = RecipeModifierRow(modifier, getModifierOutcomeData(potion, modifier, flow));
        setFlowDelay(modifierRow, 300 + (index * 90));
        modifierLane.append(modifierRow);
    });

    if (modifiers.length === 0) {
        const finalPotionNode = createFinalPotionNode(flow.finalPotion);
        setFlowDelay(finalPotionNode, 420);
        modifierLane.append(finalPotionNode);
    }
    modifierLaneShell.append(modifierLane);

    stageColumn.append(modifierLaneShell);
    showcase.append(stageColumn);
    section.append(showcase);
    return section;
}

function createBubbleAnimationStack() {
    const bubbleStack = document.createElement("div");
    bubbleStack.className = "flow-layout-bubbles";
    bubbleStack.setAttribute("aria-hidden", "true");

    const frame = createAssetImage(UI_BUBBLE_FRAME_PATHS[bubbleAnimationFrameIndex], "flow-layout-bubble-frame", {
        decorative: true,
        fetchPriority: "high",
    });

    bubbleStack.append(frame);

    return bubbleStack;
}

function getBubbleAnimationTargets(root) {
    return [
        createBubbleAnimationTarget(root?.querySelector(".flow-layout-bubble-frame"), UI_BUBBLE_FRAME_PATHS),
        createBubbleAnimationTarget(root?.querySelector(".flow-layout-arrow"), UI_ARROW_FRAME_PATHS),
    ].filter(Boolean);
}

function createBubbleAnimationTarget(frame, framePaths) {
    if (!frame || !Array.isArray(framePaths) || framePaths.length === 0) {
        return null;
    }

    return { frame, framePaths };
}

function startBubbleAnimation(targets) {
    if (!Array.isArray(targets) || targets.length === 0) {
        return;
    }

    stopBubbleAnimation();

    if (shouldReduceBubbleMotion()) {
        bubbleAnimationFrameIndex = 0;
        syncBubbleAnimationFrame(targets);
        return;
    }

    syncBubbleAnimationFrame(targets);
    queueBubbleAnimationFrame(targets);
}

function stopBubbleAnimation() {
    if (bubbleAnimationTimerId === null) {
        return;
    }

    window.clearTimeout(bubbleAnimationTimerId);
    bubbleAnimationTimerId = null;
}

function queueBubbleAnimationFrame(targets) {
    bubbleAnimationTimerId = window.setTimeout(() => {
        if (targets.some(({ frame }) => !frame.isConnected)) {
            stopBubbleAnimation();
            return;
        }

        bubbleAnimationFrameIndex = (bubbleAnimationFrameIndex + 1) % getBubbleAnimationFrameCount(targets);
        syncBubbleAnimationFrame(targets);
        queueBubbleAnimationFrame(targets);
    }, getBubbleFrameDelay(bubbleAnimationFrameIndex, targets));
}

function getBubbleAnimationFrameCount(targets) {
    return Math.max(1, targets.reduce((count, { framePaths }) => Math.max(count, framePaths.length), 0));
}

function getBubbleFrameDelay(frameIndex, targets) {
    if (frameIndex === getBubbleAnimationFrameCount(targets) - 1) {
        return BUBBLE_FINAL_FRAME_HOLD_MS;
    }

    return BUBBLE_FRAME_INTERVAL_MS;
}

function syncBubbleAnimationFrame(targets) {
    targets.forEach(({ frame, framePaths }) => {
        const nextFramePath = framePaths[bubbleAnimationFrameIndex % framePaths.length];
        if (frame.getAttribute("src") !== nextFramePath) {
            frame.src = nextFramePath;
        }
    });
}

function shouldReduceBubbleMotion() {
    return typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function createRecipeDuration(potion) {
    const duration = document.createElement("p");
    duration.className = "recipe-duration";

    const display = getPotionDurationDisplay(potion);
    duration.setAttribute("aria-label", display.ariaLabel);

    display.segments.forEach((segment) => {
        if (segment?.type === "icon" && segment.path) {
            duration.append(createAssetImage(segment.path, "recipe-duration-icon", {
                decorative: true,
                fetchPriority: "high",
            }));
            return;
        }

        duration.append(document.createTextNode(segment?.value || ""));
    });

    return duration;
}

function getPotionDurationDisplay(potion) {
    return POTION_DURATION_DISPLAYS[potion?.id] || createRecipeDurationTextDisplay(formatPotionDurationLabel(potion?.duration));
}

function getPotionDurationAssetPaths(potion) {
    const display = getPotionDurationDisplay(potion);
    if (!Array.isArray(display?.segments)) {
        return [];
    }

    return display.segments
        .filter((segment) => segment?.type === "icon" && segment.path)
        .map((segment) => segment.path);
}

function formatPotionDurationLabel(duration) {
    if (duration === "Instant") {
        return "Duration: Instant";
    }

    if (duration === "Base") {
        return "Base potion";
    }

    return `Duration: ${duration}`;
}

function isIngredientIconPath(path) {
    return typeof path === "string" && path.includes("/ingredients/");
}

function getRecipeNodeSlotOffsetY(nodeData) {
    if (nodeData?.name === "Awkward Potion") {
        return -10;
    }

    return 0;
}

function createFlowSlot(nodeData, slotKey) {
    const geometry = UI_MAIN_SLOT_GEOMETRY[slotKey];
    const shell = document.createElement("div");
    shell.className = `flow-slot flow-slot-${slotKey}`;

    if (geometry) {
        applyFlowSlotGeometry(shell, geometry);
    }

    const content = document.createElement("div");
    content.className = "flow-slot-content";
    content.setAttribute("data-slot-key", slotKey);

    const node = createRecipeNode(nodeData);
    content.append(node);
    shell.append(content);
    return shell;
}

function applyFlowSlotGeometry(element, geometry) {
    if (!element || !geometry) {
        return;
    }

    element.style.setProperty("--flow-slot-left", toPercentage(geometry.left, UI_MAIN_SOURCE_SIZE.width));
    element.style.setProperty("--flow-slot-top", toPercentage(geometry.top, UI_MAIN_SOURCE_SIZE.height));
    element.style.setProperty("--flow-slot-width", toPercentage(geometry.size, UI_MAIN_SOURCE_SIZE.width));
    element.style.setProperty("--flow-slot-height", toPercentage(geometry.size, UI_MAIN_SOURCE_SIZE.height));
    element.style.setProperty("--flow-slot-content-height", toPercentage(geometry.centeredContentHeight, geometry.size));
}

function toPercentage(value, total) {
    return `${((value / total) * 100).toFixed(4)}%`;
}

function createRecipeNode(nodeData) {
    const node = document.createElement("article");
    node.className = "recipe-node";
    node.dataset.iconPath = nodeData?.icon || "";
    const slotOffsetY = getRecipeNodeSlotOffsetY(nodeData);
    if (slotOffsetY !== 0) {
        node.style.setProperty("--recipe-node-offset-y", `${slotOffsetY}px`);
    }

    const iconShell = document.createElement("div");
    iconShell.className = "recipe-node-icon-shell";
    if (isIngredientIconPath(nodeData?.icon)) {
        iconShell.classList.add("has-ingredient-glow");
    }

    if (nodeData?.icon) {
        const icon = createAssetImage(nodeData.icon, "recipe-node-icon", {
            alt: `${nodeData.name} icon`,
        });
        iconShell.append(icon);
    } else {
        iconShell.append(createIconFallback(nodeData?.name || "?"));
    }

    const textWrap = document.createElement("div");
    const label = document.createElement("div");
    label.className = "recipe-node-label";
    label.textContent = nodeData?.name || "";
    textWrap.append(label);

    node.append(iconShell, textWrap);
    return node;
}

function RecipeModifierRow(modifier, outcome = null) {
    const row = document.createElement("article");
    row.className = "recipe-modifier-row";

    const main = document.createElement("div");
    main.className = "modifier-main";

    const prefix = document.createElement("span");
    prefix.className = "modifier-prefix";
    prefix.textContent = "+";

    main.append(prefix, createModifierIngredientNode(modifier));
    row.append(main);

    if (outcome) {
        row.append(createModifierOutcome(outcome));
    }

    return row;
}

function createModifierIngredientNode(modifier) {
    const node = createRecipeNode({
        name: modifier?.label || "",
        icon: modifier?.icon || "",
    });
    node.classList.add("modifier-ingredient-node");
    return node;
}

function getModifierOutcomeData(potion, modifier, flow) {
    const text = getModifierOutcomeText(modifier, flow);
    const icons = getModifierOutcomeIcons(potion, modifier, flow);
    if (!text && icons.length === 0) {
        return null;
    }

    return { text, icons };
}

function getModifierOutcomeText(modifier, flow) {
    if (isGunpowderModifier(modifier)) {
        return flow?.finalPotion?.label || "";
    }

    return modifier?.detail || "";
}

function getModifierOutcomeIcons(potion, modifier, flow) {
    if (isGunpowderModifier(modifier)) {
        if (!flow?.finalPotion?.icon || !flow?.finalPotion?.label) {
            return [];
        }

        return [
            {
                path: flow.finalPotion.icon,
                alt: `${flow.finalPotion.label} icon`,
                kind: "potion",
            },
        ];
    }

    if (potion?.id === "turtle-master") {
        return [
            { path: ASSETS.effects.slowness, alt: "Slowness effect icon", kind: "effect" },
            { path: ASSETS.effects.turtleMaster, alt: "Resistance effect icon", kind: "effect" },
        ];
    }

    if (isGlowstoneModifier(modifier) && potion?.id === "healing") {
        return [{ path: ASSETS.effects.healing, alt: "Healing effect icon", kind: "effect" }];
    }

    if (isGlowstoneModifier(modifier) && potion?.id === "harming") {
        return [{ path: ASSETS.effects.harming, alt: "Harming effect icon", kind: "effect" }];
    }

    return [];
}

function isGunpowderModifier(modifier) {
    return normalizeModifierLabel(modifier?.label) === "gunpowder";
}

function isGlowstoneModifier(modifier) {
    return normalizeModifierLabel(modifier?.label) === "glowstone dust";
}

function normalizeModifierLabel(label) {
    return (label || "").trim().toLowerCase();
}

function createModifierOutcome(outcome) {
    const container = document.createElement("div");
    container.className = "modifier-outcome";
    if (outcome?.icons?.some((iconData) => iconData?.kind === "potion")) {
        container.classList.add("has-potion-result-icon");
    }

    const label = document.createElement("p");
    label.className = "modifier-outcome-label";
    label.textContent = outcome?.text || "";
    container.append(label);

    if (outcome?.icons?.length) {
        const iconGroup = document.createElement("div");
        iconGroup.className = "modifier-result-icons";

        outcome.icons.forEach((iconData) => {
            const shell = document.createElement("span");
            shell.className = `modifier-result-icon-shell modifier-result-icon-shell-${iconData.kind || "effect"}`;

            if (iconData?.path) {
                const icon = createAssetImage(iconData.path, "modifier-result-icon", {
                    alt: iconData.alt || "",
                });
                shell.append(icon);
            } else {
                shell.append(createIconFallback(iconData?.alt || "?"));
            }

            iconGroup.append(shell);
        });

        container.append(iconGroup);
    }

    return container;
}

function createFinalPotionNode(finalPotion) {
    const node = document.createElement("article");
    node.className = "final-potion-node";

    const iconShell = document.createElement("span");
    iconShell.className = "final-potion-icon-shell";

    if (finalPotion?.icon) {
        const icon = createAssetImage(finalPotion.icon, "final-potion-icon", {
            alt: `${finalPotion.label} icon`,
        });
        iconShell.append(icon);
    } else {
        iconShell.append(createIconFallback(finalPotion?.label || "?"));
    }

    const text = document.createElement("span");
    text.className = "final-potion-text";

    const prefix = document.createElement("span");
    prefix.className = "final-potion-prefix";
    prefix.textContent = "Result";

    const label = document.createElement("span");
    label.className = "final-potion-label";
    label.textContent = finalPotion?.label || "";

    text.append(prefix, label);
    node.append(iconShell, text);
    return node;
}

function setFlowDelay(element, delayMs) {
    if (!element) {
        return;
    }

    element.style.setProperty("--flow-delay", `${delayMs}ms`);
}

function createIconFallback(name) {
    const fallback = document.createElement("span");
    fallback.className = "icon-fallback";
    fallback.textContent = (name || "?").trim().charAt(0).toUpperCase();
    return fallback;
}

function initializeRecipeSlotFitUpdates() {
    window.addEventListener("resize", () => {
        queueRecipeSlotFit();
    });

    if (document.fonts?.ready && typeof document.fonts.ready.then === "function") {
        void document.fonts.ready.then(() => {
            queueRecipeSlotFit();
        }).catch(() => {
            // Ignore font readiness failures and keep the current slot fit.
        });
    }
}

function queueRecipeSlotFit() {
    if (recipeSlotFitFrameId !== null) {
        window.cancelAnimationFrame(recipeSlotFitFrameId);
    }

    recipeSlotFitFrameId = window.requestAnimationFrame(() => {
        recipeSlotFitFrameId = null;
        fitRecipeSlotNodes();
    });
}

function fitRecipeSlotNodes() {
    const nodes = document.querySelectorAll(".flow-slot-content .recipe-node");
    nodes.forEach((node) => {
        fitRecipeSlotNode(node);
    });
}

function fitRecipeSlotNode(node) {
    const slot = node?.closest(".flow-slot-content");
    const label = node?.querySelector(".recipe-node-label");
    if (!slot || !label) {
        return;
    }

    node.style.removeProperty("--recipe-node-icon-size");
    node.removeAttribute("data-label-lines");

    const slotRect = slot.getBoundingClientRect();
    if (!slotRect.width || !slotRect.height) {
        return;
    }

    const labelRect = label.getBoundingClientRect();
    const nodeStyles = window.getComputedStyle(node);
    const labelStyles = window.getComputedStyle(label);
    const gap = parseFloat(nodeStyles.rowGap || nodeStyles.gap) || 0;
    const lineHeight = parseFloat(labelStyles.lineHeight) || labelRect.height || 0;
    const lineCount = Math.max(1, Math.round(labelRect.height / Math.max(lineHeight, 1)));
    const isIngredientNode = isIngredientIconPath(node.dataset.iconPath);
    const effectiveLabelHeight = isIngredientNode
        ? measureMaxIngredientLabelHeight(label, slotRect.width)
        : labelRect.height;
    const availableIconBoxSize = Math.max(
        RECIPE_SLOT_MIN_ICON_SIZE,
        Math.min(slotRect.width, slotRect.height - effectiveLabelHeight - gap)
    );
    const targetVisibleSize = Math.min(
        slotRect.width * RECIPE_SLOT_TARGET_VISIBLE_WIDTH_RATIO,
        slotRect.height * RECIPE_SLOT_TARGET_VISIBLE_HEIGHT_RATIO
    );
    const visibleBoundsRatio = isIngredientNode ? ingredientSlotLargestVisibleBoundsRatio : 1;
    const iconSize = Math.max(
        RECIPE_SLOT_MIN_ICON_SIZE,
        Math.min(availableIconBoxSize, targetVisibleSize / Math.max(visibleBoundsRatio, 0.01))
    );

    node.dataset.labelLines = String(lineCount);
    node.style.setProperty("--recipe-node-icon-size", `${Math.floor(iconSize)}px`);
}

function measureMaxIngredientLabelHeight(referenceLabel, maxWidth) {
    const cacheKey = getIngredientLabelHeightCacheKey(referenceLabel, maxWidth);
    const cachedHeight = ingredientLabelHeightCache.get(cacheKey);
    if (typeof cachedHeight === "number") {
        return cachedHeight;
    }

    const measurement = document.createElement("div");
    measurement.className = referenceLabel.className;
    measurement.setAttribute("aria-hidden", "true");
    measurement.style.position = "fixed";
    measurement.style.left = "0";
    measurement.style.top = "0";
    measurement.style.width = `${maxWidth}px`;
    measurement.style.maxWidth = `${maxWidth}px`;
    measurement.style.visibility = "hidden";
    measurement.style.pointerEvents = "none";
    measurement.style.zIndex = "-1";

    document.body.append(measurement);

    let largestHeight = 0;
    getRecipeIngredientLabels().forEach((ingredientLabel) => {
        measurement.textContent = ingredientLabel;
        largestHeight = Math.max(largestHeight, measurement.getBoundingClientRect().height);
    });

    measurement.remove();
    const fallbackHeight = referenceLabel.getBoundingClientRect().height;
    const resolvedHeight = largestHeight || fallbackHeight;
    ingredientLabelHeightCache.set(cacheKey, resolvedHeight);
    return resolvedHeight;
}

function getIngredientLabelHeightCacheKey(referenceLabel, maxWidth) {
    const styles = window.getComputedStyle(referenceLabel);
    return [
        Math.round(maxWidth),
        styles.fontFamily,
        styles.fontSize,
        styles.fontWeight,
        styles.letterSpacing,
        styles.lineHeight,
        styles.textTransform,
    ].join("|");
}

function getAssetVisibleBoundsRatio(path, image) {
    if (!path || !image) {
        return 1;
    }

    const cachedRatio = assetVisibleBoundsRatioCache.get(path);
    if (typeof cachedRatio === "number") {
        return cachedRatio;
    }

    const width = image.naturalWidth || image.width;
    const height = image.naturalHeight || image.height;
    if (!width || !height) {
        return 1;
    }

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext("2d", { willReadFrequently: true });
    if (!context) {
        return 1;
    }

    context.drawImage(image, 0, 0, width, height);
    const data = context.getImageData(0, 0, width, height).data;

    let minX = width;
    let minY = height;
    let maxX = -1;
    let maxY = -1;

    for (let index = 0; index < data.length; index += 4) {
        if (data[index + 3] < 12) {
            continue;
        }

        const pixelIndex = index / 4;
        const x = pixelIndex % width;
        const y = Math.floor(pixelIndex / width);
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
    }

    if (maxX === -1 || maxY === -1) {
        assetVisibleBoundsRatioCache.set(path, 1);
        return 1;
    }

    const visibleWidthRatio = (maxX - minX + 1) / width;
    const visibleHeightRatio = (maxY - minY + 1) / height;
    const ratio = Math.max(visibleWidthRatio, visibleHeightRatio);
    assetVisibleBoundsRatioCache.set(path, ratio);
    return ratio;
}

function getSelectedPotion() {
    return POTION_RECIPES.find(potion => potion.id === state.selectedPotionId) || POTION_RECIPES[0];
}

async function selectPotion(nextPotionId) {
    if (state.selectedPotionId === nextPotionId) {
        return;
    }

    const previousPotionId = state.selectedPotionId;
    state.selectedPotionId = nextPotionId;
    syncPotionListSelection(previousPotionId, nextPotionId);

    const panel = document.getElementById("recipe-panel");
    const nextPotion = POTION_RECIPES.find((potion) => potion.id === nextPotionId) || getSelectedPotion();
    const renderRequestId = ++recipePanelRenderRequestId;

    if (panel) {
        panel.setAttribute("aria-busy", "true");
    }

    await ensurePotionRenderAssets(nextPotion);

    if (renderRequestId !== recipePanelRenderRequestId || state.selectedPotionId !== nextPotionId) {
        return;
    }

    PotionRecipePanel(nextPotion);
    panel?.removeAttribute("aria-busy");
}

function syncPotionListSelection(previousPotionId, nextPotionId) {
    const previousButton = document.querySelector(`[data-potion-id="${previousPotionId}"]`);
    if (previousButton) {
        previousButton.classList.remove("is-selected");
        previousButton.setAttribute("aria-pressed", "false");
    }

    const nextButton = document.querySelector(`[data-potion-id="${nextPotionId}"]`);
    if (nextButton) {
        nextButton.classList.add("is-selected");
        nextButton.setAttribute("aria-pressed", "true");
        nextButton.scrollIntoView({ block: "nearest", inline: "nearest" });
    }
}

function initializeThemeToggle() {
    const toggle = document.getElementById("theme-toggle");
    if (!toggle) {
        return;
    }

    const root = document.documentElement;
    const savedTheme = safeGetStoredTheme();
    if (savedTheme === "light") {
        root.setAttribute("data-theme", "light");
    }
    syncThemeButtonLabel(toggle, root.getAttribute("data-theme") === "light");

    toggle.addEventListener("click", () => {
        const isLight = root.getAttribute("data-theme") === "light";
        if (isLight) {
            root.removeAttribute("data-theme");
            safeStoreTheme("dark");
            syncThemeButtonLabel(toggle, false);
        } else {
            root.setAttribute("data-theme", "light");
            safeStoreTheme("light");
            syncThemeButtonLabel(toggle, true);
        }
    });
}

function syncThemeButtonLabel(button, isLight) {
    const nextMode = isLight ? "dark" : "light";
    const label = `Switch to ${nextMode} mode`;
    button.setAttribute("aria-label", label);
    button.setAttribute("title", label);
}

function safeGetStoredTheme() {
    try {
        return window.localStorage.getItem(STORAGE_THEME_KEY);
    } catch (_error) {
        return null;
    }
}

function safeStoreTheme(theme) {
    try {
        window.localStorage.setItem(STORAGE_THEME_KEY, theme);
    } catch (_error) {
        // Ignore storage failures in private browsing contexts.
    }
}
