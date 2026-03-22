const DEFAULT_POTION_ID = "fire-resistance";
const STORAGE_THEME_KEY = "potion-guide-theme";

const ASSETS = {
    effects: {
        fireResistance: "./effect_icons/effect_fire_resistance.png",
        regeneration: "./effect_icons/effect_regeneration.png",
        strength: "./effect_icons/effect_strength.png",
        swiftness: "./effect_icons/effect_speed.png",
        healing: "./effect_icons/effect_healing.png",
        nightVision: "./effect_icons/effect_night_vision.png",
        waterBreathing: "./effect_icons/effect_water_breathing.png",
        invisibility: "./effect_icons/effect_invisibility.png",
    },
    effectsOutlined: {
        fireResistance: "./effect_icons/effect_fire_resistance_outlined.png",
        regeneration: "./effect_icons/effect_regeneration_outlined.png",
        strength: "./effect_icons/effect_strength_outlined.png",
        swiftness: "./effect_icons/effect_speed_outlined.png",
        healing: "./effect_icons/effect_healing_outlined.png",
        nightVision: "./effect_icons/effect_night_vision_outlined.png",
        waterBreathing: "./effect_icons/effect_water_breathing_outlined.png",
        invisibility: "./effect_icons/effect_invisibility_outlined.png",
    },
    ingredients: {
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
    },
    potions: {
        waterBottle: "./potion_bottles/water_bottle_outlined.png",
        fireResistance: "./potion_bottles/potion_of_fire_resistance_outlined.png",
        regeneration: "./potion_bottles/potion_of_regeneration_outlined.png",
        strength: "./potion_bottles/potion_of_strength_outlined.png",
        swiftness: "./potion_bottles/potion_of_swiftness_outlined.png",
        healing: "./potion_bottles/potion_of_healing_outlined.png",
        nightVision: "./potion_bottles/potion_of_night_vision_outlined.png",
        waterBreathing: "./potion_bottles/potion_of_water_breathing_outlined.png",
        invisibility: "./potion_bottles/potion_of_invisibility_outlined.png",
    },
    splashPotions: {
        fireResistance: "./potion_bottles/splash_potion_of_fire_resistance.png",
        regeneration: "./potion_bottles/splash_potion_of_regeneration_outlined.png",
        strength: "./potion_bottles/splash_potion_of_strength_outlined.png",
        swiftness: "./potion_bottles/splash_potion_of_switfness_outlined.png",
        healing: "./potion_bottles/splash_potion_of_healing_outlined.png",
        nightVision: "./potion_bottles/splash_potion_of_night_vision_outlined.png",
        waterBreathing: "./potion_bottles/splash_potion_of_water_breathing_outlined.png",
        invisibility: "./potion_bottles/splash_potion_of_invisibility_outlined.png",
    },
};

const POTION_RECIPES = [
    {
        id: "fire-resistance",
        name: "Fire Resistance",
        duration: "3:00",
        sidebarPotionIcon: ASSETS.potions.fireResistance,
        effectIcons: [ASSETS.effects.fireResistance],
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
        id: "regeneration",
        name: "Regeneration",
        duration: "0:45",
        sidebarPotionIcon: ASSETS.potions.regeneration,
        effectIcons: [ASSETS.effects.regeneration],
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
        sidebarPotionIcon: ASSETS.potions.strength,
        effectIcons: [ASSETS.effects.strength],
        titleIcon: ASSETS.effectsOutlined.strength,
        flow: {
            ingredient: { name: "Blaze Powder", icon: "" },
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
        sidebarPotionIcon: ASSETS.potions.swiftness,
        effectIcons: [ASSETS.effects.swiftness],
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
        id: "healing",
        name: "Healing",
        duration: "Instant",
        sidebarPotionIcon: ASSETS.potions.healing,
        effectIcons: [ASSETS.effects.healing],
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
        sidebarPotionIcon: ASSETS.potions.nightVision,
        effectIcons: [ASSETS.effects.nightVision],
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
        sidebarPotionIcon: ASSETS.potions.waterBreathing,
        effectIcons: [ASSETS.effects.waterBreathing],
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
        sidebarPotionIcon: ASSETS.potions.invisibility,
        effectIcons: [ASSETS.effects.invisibility],
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
];

const state = {
    selectedPotionId: DEFAULT_POTION_ID,
};

document.addEventListener("DOMContentLoaded", () => {
    initializeThemeToggle();
    PotionGuidePage();
});

function PotionGuidePage() {
    PotionSidebar();
    PotionRecipePanel(getSelectedPotion());
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

    const potionThumbWrap = document.createElement("span");
    potionThumbWrap.className = "potion-thumb-wrap";

    const potionThumb = document.createElement("img");
    potionThumb.className = "potion-thumb";
    potionThumb.src = potion.sidebarPotionIcon;
    potionThumb.alt = `${potion.name} bottle icon`;
    potionThumbWrap.append(potionThumb);

    const textShell = document.createElement("span");
    textShell.className = "potion-list-text";

    const name = document.createElement("span");
    name.className = "potion-name";
    name.textContent = potion.name;
    textShell.append(name);

    const effectIconRow = document.createElement("span");
    effectIconRow.className = "effect-icon-row";
    potion.effectIcons.forEach(effectIcon => {
        effectIconRow.append(createEffectIcon(effectIcon));
    });
    textShell.append(effectIconRow);

    button.append(potionThumbWrap, textShell);

    button.addEventListener("click", () => {
        if (state.selectedPotionId === potion.id) {
            return;
        }
        state.selectedPotionId = potion.id;
        PotionGuidePage();
    });

    return button;
}

function createEffectIcon(iconPath) {
    const chip = document.createElement("span");
    chip.className = "effect-chip";

    const img = document.createElement("img");
    img.src = iconPath;
    img.alt = "";
    img.setAttribute("aria-hidden", "true");

    chip.append(img);
    return chip;
}

function PotionRecipePanel(potion) {
    const panel = document.getElementById("recipe-panel");
    if (!panel || !potion) {
        return;
    }

    panel.replaceChildren(
        RecipeHeader(potion),
        RecipeFlowDiagram(potion.flow)
    );
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

function RecipeFlowDiagram(flow) {
    const section = document.createElement("section");
    section.className = "recipe-flow-diagram";

    const stack = document.createElement("div");
    stack.className = "flow-stack";
    stack.append(
        createRecipeNode(flow.ingredient, "Ingredient"),
        createFlowConnector(),
        createRecipeNode(flow.basePotion, "Base Potion")
    );

    const arrowDown = document.createElement("div");
    arrowDown.className = "flow-arrow-down";
    arrowDown.setAttribute("aria-hidden", "true");

    const modifierLane = document.createElement("div");
    modifierLane.className = "modifier-lane";

    const firstModifier = flow.modifiers[0];
    const secondModifier = flow.modifiers[1];

    modifierLane.append(RecipeModifierRow(firstModifier));

    const durationChip = document.createElement("div");
    durationChip.className = "recipe-duration-chip";
    durationChip.textContent = firstModifier?.detail || "";
    if (!firstModifier?.detail) {
        durationChip.classList.add("is-empty");
    }
    modifierLane.append(durationChip);

    modifierLane.append(RecipeModifierRow(secondModifier));

    const arrowRight = document.createElement("div");
    arrowRight.className = "modifier-arrow-right";
    arrowRight.setAttribute("aria-hidden", "true");
    modifierLane.append(arrowRight);

    modifierLane.append(createFinalPotionNode(flow.finalPotion));

    section.append(stack, arrowDown, modifierLane);
    return section;
}

function createRecipeNode(nodeData, subtitleText) {
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
    const subtitle = document.createElement("div");
    subtitle.className = "recipe-node-subtitle";
    subtitle.textContent = subtitleText;
    textWrap.append(label, subtitle);

    node.append(iconShell, textWrap);
    return node;
}

function createFlowConnector() {
    const connector = document.createElement("div");
    connector.className = "flow-connector";
    connector.setAttribute("aria-hidden", "true");
    return connector;
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

    const label = document.createElement("span");
    label.className = "modifier-label";
    label.textContent = modifier?.label || "";

    row.append(prefix, iconShell, label);
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

function createIconFallback(name) {
    const fallback = document.createElement("span");
    fallback.className = "icon-fallback";
    fallback.textContent = (name || "?").trim().charAt(0).toUpperCase();
    return fallback;
}

function getSelectedPotion() {
    return POTION_RECIPES.find(potion => potion.id === state.selectedPotionId) || POTION_RECIPES[0];
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
