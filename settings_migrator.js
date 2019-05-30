const DefaultSettings = {
        NA: true,
        EU: false,
        RU: false,
        TW: false,
        SEA: false,
        newUpdate81NA: false,
        newUpdate81EU2: true,
        newUpdate81RU: false,
        newUpdate81TW: false,
        newUpdate81SEA1: true
}

module.exports = function MigrateSettings(from_ver, to_ver, settings) {
    if (from_ver === undefined) return Object.assign(Object.assign({}, DefaultSettings), settings);
	else if (from_ver === null) return DefaultSettings;
	else {
		if (from_ver + 1 < to_ver) {
			settings = MigrateSettings(from_ver, from_ver + 1, settings);
			return MigrateSettings(from_ver + 1, to_ver, settings);
		}

		switch (to_ver) {
			case 3:
				settings.newUpdate81EU2 = DefaultSettings.newUpdate81EU2;
				settings.newUpdate81SEA1 = DefaultSettings.newUpdate81SEA1;
				break;
			case 2:
				settings.newUpdate81EU1 = DefaultSettings.newUpdate81EU1;
				break;
			default:
				console.log(`[TerableOpcodes] Your "config.json" was very outdated, so I've remade it.`);
				Object.keys(settings).forEach(key => delete settings[key]);
				settings = JSON.parse(JSON.stringify(DefaultSettings));
				break;
		}
		return settings;
	}
}