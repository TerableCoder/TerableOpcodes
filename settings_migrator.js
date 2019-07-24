const DefaultSettings = {
        NA: true,
        EU: false,
        RU: false,
        TW: false,
		SEA: false,
		JP: false,
        newUpdate83NA: false,
		newUpdate83EU: false,
		newUpdate83RU: false,
		newUpdate83TW: false,
		newUpdate83SEA: false,
		newUpdate83JP: false
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
			case 10:
				settings.newUpdate83NA = true;
				settings.newUpdate83EU = true;
				settings.newUpdate83RU = true;
				settings.newUpdate83TW = true;
				settings.newUpdate83SEA = true;
				settings.newUpdate83JP = true;
				break;
			case 9:
				settings.newUpdate82NA1 = true;
				break;
			case 8:
				settings.newUpdate82EU1 = true;
				break;
			case 7:
				settings.newUpdate82RU1 = true;
				break;
			case 6:
				settings.newUpdate82EU = true;
				break;
			case 5:
				settings.newUpdate82NA = true;
				settings.newUpdate82RU = true;
				settings.newUpdate82TW = true;
				break;
			case 4:
				settings.newUpdate81EU3 = true;
				break;
			case 3:
				settings.newUpdate81EU2 = true;
				settings.newUpdate81SEA1 = true;
				break;
			case 2:
				settings.newUpdate81EU1 = true;
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