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
    "--ui-top-slot-offset-x": -1,
    "--ui-top-slot-offset-y": -64,
    "--ui-top-slot-scale": 1.24,
    "--ui-bottom-slot-offset-x": 0,
    "--ui-bottom-slot-offset-y": 30,
    "--ui-bottom-slot-scale": 1.38,
    "--ui-bottle-offset-x": 0,
    "--ui-bottle-offset-y": 0,
    "--ui-bottle-scale": 1.24,
    "--ui-modifiers-offset-x": 168,
    "--ui-modifiers-offset-y": 0,
    "--ui-modifiers-scale": 1.1,
};

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
        blazePowder: "./ingredients/blaze_powder_outlined.png",
        netherWart: "./ingredients/nether_wart_outlined.png",
        magmaCream: "./ingredients/magma_cream_outlined.png",
        redstoneDust: "./ingredients/redstone_dust_outlined.png",
        gunpowder: "./ingredients/gunpowder_outlined.png",
        ghastTear: "./ingredients/ghast_tear_outlined.png",
        sugar: "./ingredients/sugar_outlined.png",
        glisteringWatermelon: "./ingredients/glistering_watermelon_outlined.png",
        glowstoneDust: "./ingredients/glowstone_dust_outlined.png",
        goldenCarrot: "./ingredients/golden_carrot_outlined.png",
        pufferfish: "./ingredients/pufferfish_outlined.png",
        fermentedSpiderEye: "./ingredients/fermented_spider_eye_outlined.png",
        rabbitsFoot: "./ingredients/rabbits_foot_outlined.png",
        spiderEye: "./ingredients/spider_eye_outlined.png",
        phantomMembrane: "./ingredients/phantom_membrane_outlined.png",
        turtleShell: "./ingredients/turtle_shell_outlined.png",
        slimeBlock: "./ingredients/slime_block_outlined.png",
        cobweb: "./ingredients/cobweb_outlined.png",
        breezeRod: "./ingredients/breeze_rod_outlined.png",
        stone: "./ingredients/stone_outlined.png",
    },
    potions: {
        waterBottle: "./potion_bottles/water_bottle_outlined.png",
        fireResistance: "./potion_bottles/potion_of_fire_resistance_outlined.png",
        regeneration: "./potion_bottles/potion_of_regeneration_outlined.png",
        strength: "./potion_bottles/potion_of_strength_outlined.png",
        swiftness: "./potion_bottles/potion_of_swiftness_outlined.png",
        leaping: "./potion_bottles/potion_of_leaping_outlined.png",
        slowness: "./potion_bottles/potion_of_slowness_outlined.png",
        weakness: "./potion_bottles/potion_of_weakness_outlined.png",
        poison: "./potion_bottles/potion_of_poison_outlined.png",
        harming: "./potion_bottles/potion_of_harming_outlined.png",
        healing: "./potion_bottles/potion_of_healing_outlined.png",
        nightVision: "./potion_bottles/potion_of_night_vision_outlined.png",
        waterBreathing: "./potion_bottles/potion_of_water_breathing_outlined.png",
        invisibility: "./potion_bottles/potion_of_invisibility_outlined.png",
        turtleMaster: "./potion_bottles/potion_of_the_turtle_master_outlined.png",
        slowFalling: "./potion_bottles/potion_of_slow_falling_outlined.png",
        oozing: "./potion_bottles/potion_of_oozing_outlined.png",
        weaving: "./potion_bottles/potion_of_weaving_outlined.png",
        windCharging: "./potion_bottles/potion_of_wind_charging_outlined.png",
        infestation: "./potion_bottles/potion_of_infestation_outlined.png",
    },
    splashPotions: {
        fireResistance: "./potion_bottles/splash_potion_of_fire_resistance.png",
        regeneration: "./potion_bottles/splash_potion_of_regeneration_outlined.png",
        strength: "./potion_bottles/splash_potion_of_strength_outlined.png",
        swiftness: "./potion_bottles/splash_potion_of_switfness_outlined.png",
        leaping: "./potion_bottles/splash_potion_of_leaping_outlined.png",
        slowness: "./potion_bottles/splash_potion_of_slowness_outlined.png",
        weakness: "./potion_bottles/splash_potion_of_weakness_outlined.png",
        poison: "./potion_bottles/splash_potion_of_poison_outlined.png",
        harming: "./potion_bottles/splash_potion_of_harming_outlined.png",
        healing: "./potion_bottles/splash_potion_of_healing_outlined.png",
        nightVision: "./potion_bottles/splash_potion_of_night_vision_outlined.png",
        waterBreathing: "./potion_bottles/splash_potion_of_water_breathing_outlined.png",
        invisibility: "./potion_bottles/splash_potion_of_invisibility_outlined.png",
        turtleMaster: "./potion_bottles/splash_potion_of_the_turtle_master_outlined.png",
        slowFalling: "./potion_bottles/splash_potion_of_slow_falling_outlined.png",
        oozing: "./potion_bottles/splash_potion_of_oozing_outlined.png",
        weaving: "./potion_bottles/splash_potion_of_weaving_outlined.png",
        windCharging: "./potion_bottles/splash_potion_of_wind_charging_outlined.png",
        infestation: "./potion_bottles/splash_potion_of_infestation_outlined.png",
    },
};

const POTION_RECIPES = [
    {
        id: "fire-resistance",
        name: "Fire Resistance",
        duration: "3:00",
        navIcon: ASSETS.effects.fireResistance,
        titleIcon: ASSETS.effectsOutlined.fireResistance,
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
        titleIcon: ASSETS.effectsOutlined.harming,
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
        titleIcon: ASSETS.effectsOutlined.regeneration,
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
        titleIcon: ASSETS.effectsOutlined.strength,
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
        titleIcon: ASSETS.effectsOutlined.swiftness,
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
        titleIcon: ASSETS.effectsOutlined.leaping,
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
        titleIcon: ASSETS.effectsOutlined.slowness,
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
        titleIcon: ASSETS.effectsOutlined.weakness,
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
        titleIcon: ASSETS.effectsOutlined.poison,
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
        titleIcon: ASSETS.effectsOutlined.healing,
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
        titleIcon: ASSETS.effectsOutlined.nightVision,
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
        titleIcon: ASSETS.effectsOutlined.waterBreathing,
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
        titleIcon: ASSETS.effectsOutlined.invisibility,
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
        titleIcon: ASSETS.effectsOutlined.turtleMaster,
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
        titleIcon: ASSETS.effectsOutlined.slowFalling,
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
        titleIcon: ASSETS.effectsOutlined.oozing,
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
        titleIcon: ASSETS.effectsOutlined.weaving,
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
        titleIcon: ASSETS.effectsOutlined.windCharging,
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
        titleIcon: ASSETS.effectsOutlined.infestation,
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

const state = {
    selectedPotionId: DEFAULT_POTION_ID,
    layoutTunerValues: null,
};

const preloadedAssetPaths = new Set();
const pendingPreloadImages = new Map();

document.addEventListener("DOMContentLoaded", () => {
    preloadPotionAssets(POTION_RECIPES);
    initializeThemeToggle();
    PotionGuidePage();
    initializeLayoutTuner();
});

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

function preloadPotionAssets(recipes) {
    const assetPaths = collectPotionAssetPaths(recipes);
    assetPaths.forEach(preloadAssetImage);
}

function collectPotionAssetPaths(recipes) {
    const paths = new Set();
    recipes.forEach((potion) => {
        addAssetPath(paths, potion.navIcon);
        addAssetPath(paths, potion.titleIcon);
        addAssetPath(paths, getPotionBottleAsset(potion));
        addAssetPath(paths, potion.flow?.ingredient?.icon);
        addAssetPath(paths, potion.flow?.basePotion?.icon);
        addAssetPath(paths, potion.flow?.finalPotion?.icon);
        potion.flow?.modifiers?.forEach((modifier) => addAssetPath(paths, modifier.icon));
    });
    return paths;
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

function preloadAssetImage(path) {
    if (preloadedAssetPaths.has(path)) {
        return;
    }

    preloadedAssetPaths.add(path);
    const image = new Image();
    image.decoding = "async";
    image.onload = image.onerror = () => {
        pendingPreloadImages.delete(path);
    };
    image.src = path;
    pendingPreloadImages.set(path, image);
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

function PotionListItem(potion, isSelected, index) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `potion-list-item${isSelected ? " is-selected" : ""}`;
    button.dataset.potionId = potion.id;
    button.setAttribute("aria-pressed", isSelected ? "true" : "false");
    button.style.setProperty("--entry-delay", `${index * 28}ms`);

    const navIcon = document.createElement("img");
    navIcon.className = "potion-nav-icon";
    navIcon.src = potion.navIcon;
    navIcon.alt = "";
    navIcon.setAttribute("aria-hidden", "true");

    const name = document.createElement("span");
    name.className = "potion-name";
    name.textContent = potion.name;
    button.append(navIcon, name);

    button.addEventListener("click", () => {
        selectPotion(potion.id);
    });

    return button;
}

function PotionRecipePanel(potion) {
    const panel = document.getElementById("recipe-panel");
    if (!panel || !potion) {
        return;
    }

    panel.replaceChildren(RecipeFlowDiagram(potion));
    applyLayoutTunerValues(state.layoutTunerValues);
}

function RecipeHeader(potion) {
    const header = document.createElement("header");
    header.className = "recipe-header";

    const iconShell = document.createElement("div");
    iconShell.className = "recipe-title-icon-shell";

    const icon = document.createElement("img");
    icon.className = "recipe-title-icon";
    icon.src = potion.titleIcon;
    icon.alt = `${potion.name} effect icon`;
    iconShell.append(icon);

    const textWrap = document.createElement("div");
    textWrap.className = "recipe-title-block";
    const title = document.createElement("h2");
    title.className = "recipe-title";
    title.textContent = potion.name;
    const duration = document.createElement("p");
    duration.className = "recipe-duration";
    duration.textContent = potion.duration;
    textWrap.append(title, duration);

    header.append(iconShell, textWrap);
    return header;
}

function RecipeFlowDiagram(potion) {
    const flow = potion.flow;
    const section = document.createElement("section");
    section.className = "recipe-flow-diagram";

    const titleHeader = RecipeHeader(potion);
    titleHeader.classList.add("recipe-flow-header");

    const layoutArt = document.createElement("div");
    layoutArt.className = "flow-layout-art";

    const layoutMain = document.createElement("img");
    layoutMain.className = "flow-layout-main";
    layoutMain.src = "./ui_elements/UI_main.png";
    layoutMain.alt = "";
    layoutMain.setAttribute("aria-hidden", "true");

    const layoutBubbles = document.createElement("img");
    layoutBubbles.className = "flow-layout-bubbles";
    layoutBubbles.src = "./ui_elements/UI_bubbles.png";
    layoutBubbles.alt = "";
    layoutBubbles.setAttribute("aria-hidden", "true");

    const layoutBottle = document.createElement("img");
    layoutBottle.className = "flow-layout-bottle";
    layoutBottle.src = getPotionBottleAsset(potion);
    layoutBottle.alt = "";
    layoutBottle.setAttribute("aria-hidden", "true");

    const layoutArrow = document.createElement("img");
    layoutArrow.className = "flow-layout-arrow";
    layoutArrow.src = "./ui_elements/UI_arrow.png";
    layoutArrow.alt = "";
    layoutArrow.setAttribute("aria-hidden", "true");

    const stack = document.createElement("div");
    stack.className = "flow-stack";
    stack.append(
        createRecipeNode(flow.ingredient),
        createRecipeNode(flow.basePotion)
    );
    layoutArt.append(layoutBubbles, layoutBottle, layoutMain, layoutArrow, stack);

    const modifierLane = document.createElement("div");
    modifierLane.className = "modifier-lane";

    (flow.modifiers || []).forEach((modifier) => {
        modifierLane.append(RecipeModifierRow(modifier));
    });

    modifierLane.append(createFinalPotionNode(flow.finalPotion));

    section.append(titleHeader, layoutArt, modifierLane);
    return section;
}

function createRecipeNode(nodeData) {
    const node = document.createElement("article");
    node.className = "recipe-node";

    const iconShell = document.createElement("div");
    iconShell.className = "recipe-node-icon-shell";

    if (nodeData?.icon) {
        const icon = document.createElement("img");
        icon.className = "recipe-node-icon";
        icon.src = nodeData.icon;
        icon.alt = `${nodeData.name} icon`;
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

function RecipeModifierRow(modifier) {
    const row = document.createElement("article");
    row.className = "recipe-modifier-row";

    const prefix = document.createElement("span");
    prefix.className = "modifier-prefix";
    prefix.textContent = "+";

    const iconShell = document.createElement("span");
    iconShell.className = "modifier-icon-shell";
    if (modifier?.icon) {
        const icon = document.createElement("img");
        icon.src = modifier.icon;
        icon.alt = modifier.label ? `${modifier.label} icon` : "";
        iconShell.append(icon);
    } else {
        iconShell.append(createIconFallback(modifier?.label || "?"));
    }

    const text = document.createElement("span");
    text.className = "modifier-text";

    const label = document.createElement("span");
    label.className = "modifier-label";
    label.textContent = modifier?.label || "";
    text.append(label);

    if (modifier?.detail) {
        const detail = document.createElement("span");
        detail.className = "modifier-detail";
        detail.textContent = modifier.detail;
        text.append(detail);
    }

    row.append(prefix, iconShell, text);
    return row;
}

function createFinalPotionNode(finalPotion) {
    const node = document.createElement("article");
    node.className = "final-potion-node";

    const iconShell = document.createElement("span");
    iconShell.className = "final-potion-icon-shell";

    if (finalPotion?.icon) {
        const icon = document.createElement("img");
        icon.className = "final-potion-icon";
        icon.src = finalPotion.icon;
        icon.alt = `${finalPotion.label} icon`;
        iconShell.append(icon);
    } else {
        iconShell.append(createIconFallback(finalPotion?.label || "?"));
    }

    const label = document.createElement("span");
    label.className = "final-potion-label";
    label.textContent = finalPotion?.label || "";

    node.append(iconShell, label);
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

function getSelectedPotion() {
    return POTION_RECIPES.find(potion => potion.id === state.selectedPotionId) || POTION_RECIPES[0];
}

function selectPotion(nextPotionId) {
    if (state.selectedPotionId === nextPotionId) {
        return;
    }

    const previousPotionId = state.selectedPotionId;
    state.selectedPotionId = nextPotionId;
    syncPotionListSelection(previousPotionId, nextPotionId);
    PotionRecipePanel(getSelectedPotion());
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
