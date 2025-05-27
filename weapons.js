Hooks.once("init", () => {
  CONFIG.DND5E.itemProperties.blaster = {
    label: "Blaster",
    isPhysical: false
  };
  CONFIG.DND5E.validProperties.weapon.add("blaster");
});
Hooks.once("init", () => {
  CONFIG.DND5E.itemProperties.recoil = {
    label: "Recoil",
    isPhysical: false
  };
  CONFIG.DND5E.validProperties.weapon.add("recoil");
});
Hooks.once("init", () => {
  CONFIG.DND5E.itemProperties.cooldown = {
    label: "Cooldown",
    isPhysical: false
  };
  CONFIG.DND5E.validProperties.weapon.add("cooldown");
    CONFIG.DND5E.itemProperties.destructible = {
    label: "Destructible",
    isPhysical: false
  };
  CONFIG.DND5E.validProperties.weapon.add("destructible");
});

Hooks.once("init", () => {
  CONFIG.DND5E.featureTypes.class.subtypes.adventurersTalent = "Adventurer's Talent";
  CONFIG.DND5E.featureTypes.class.subtypes.Lichdom = "Lichdom";
  CONFIG.DND5E.featureTypes.class.subtypes.Knack = "Knack";
  CONFIG.DND5E.featureTypes.class.subtypes.Discovery = "Discovery";
  CONFIG.DND5E.featureTypes.class.subtypes.bombFormula = "Bomb Formula";
});

// Adds new Weapon types
Hooks.once("init", () => {
  CONFIG.DND5E.weaponIds.revolver = "Compendium.the-convergence-shared-compendium.items.Item.MJO8FjtDBWZaMXZl";
  CONFIG.DND5E.weaponIds.blunderbuss = "Compendium.the-convergence-shared-compendium.items.Item.L8VlUVop5t4z6z6o";
  CONFIG.DND5E.weaponIds.musket = "Compendium.the-convergence-shared-compendium.items.Item.FZlEqOvkLN057uou";
  CONFIG.DND5E.weaponIds.pistol = "Compendium.the-convergence-shared-compendium.items.Item.krioNvw4jBh0IzBI";
  CONFIG.DND5E.weaponIds.cannon = "Compendium.the-convergence-shared-compendium.items.Item.sndoFSFc2tXmgmd5";
  CONFIG.DND5E.weaponIds.gatlingGun = "Compendium.the-convergence-shared-compendium.items.Item.VrFyA0gJIpZqhkl6";
  CONFIG.DND5E.weaponIds.doubleBarrelShotgun = "Compendium.the-convergence-shared-compendium.items.Item.NoHoUQ81O13ZWFCz";
  CONFIG.DND5E.weaponIds.huntingRifle = "Compendium.the-convergence-shared-compendium.items.Item.x3RCqxH5EH4UQJfn";
  CONFIG.DND5E.weaponIds.parlorGun = "Compendium.the-convergence-shared-compendium.items.Item.mLwmWKKrZJb4fBtM";
  CONFIG.DND5E.weaponIds.bomb = "Compendium.the-convergence-shared-compendium.items.Item.dC2mB73utTxPESC0"
  // etc etc
});

// Weapon Masteries
Hooks.once("init", () => {
CONFIG.DND5E.weaponMasteries.automatic = {
    label: "Automatic",
    reference: "Compendium.the-convergence-shared-compendium.journals.JournalEntry.52iFqpOFZ5JEXYkM.JournalEntryPage.A5THHryGktNbaTXW"};
CONFIG.DND5E.weaponMasteries.bludgeon = {
    label: "Bludgeon",
    reference: "Compendium.the-convergence-shared-compendium.journals.JournalEntry.52iFqpOFZ5JEXYkM.JournalEntryPage.DAAlrIXCYzfI3YKT"};
CONFIG.DND5E.weaponMasteries.explode = {
    label: "Explode",
    reference: "Compendium.the-convergence-shared-compendium.journals.JournalEntry.52iFqpOFZ5JEXYkM.JournalEntryPage.7T5wQTANskJ2KBOe"};
CONFIG.DND5E.weaponMasteries.jolt = {
    label: "Jolt",
    reference: "Compendium.the-convergence-shared-compendium.journals.JournalEntry.52iFqpOFZ5JEXYkM.JournalEntryPage.G69x0xTGrdtUOsWG"};
CONFIG.DND5E.weaponMasteries.mounted = {
    label: "Mounted",
    reference: "Compendium.the-convergence-shared-compendium.journals.JournalEntry.52iFqpOFZ5JEXYkM.JournalEntryPage.t6WFNOLNRJ880JI4"};
CONFIG.DND5E.weaponMasteries.overheat = {
    label: "Overheat",
    reference: "Compendium.the-convergence-shared-compendium.journals.JournalEntry.52iFqpOFZ5JEXYkM.JournalEntryPage.wJMS3zy3ERbCeop2"};
CONFIG.DND5E.weaponMasteries.scatter = {
    label: "Scatter",
    reference: "Compendium.the-convergence-shared-compendium.journals.JournalEntry.52iFqpOFZ5JEXYkM.JournalEntryPage.zbaWlUlXm0nsOPZN"};
CONFIG.DND5E.weaponMasteries.mounted = {
    label: "Sighted",
    reference: "Compendium.the-convergence-shared-compendium.journals.JournalEntry.52iFqpOFZ5JEXYkM.JournalEntryPage.LH4DglCFEQm41vBC"
}});

Hooks.once("init", () => {
CONFIG.DND5E.ammoIds.cannonball = {
    cannonball: "Compendium.the-convergence-shared-compendium.items.Item.cYLNQCifIsRYBaLo"
}});