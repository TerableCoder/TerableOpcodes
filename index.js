module.exports = function TerableOpcodes(mod) {
	const command = mod.command || mod.require.command;
	mod.hook('S_LOAD_CLIENT_USER_SETTING', 1, (event) => {
        if((mod.settings.newUpdate81NA && mod.settings.NA) ||
        (mod.settings.newUpdate81EU && mod.settings.EU) ||
        (mod.settings.newUpdate81RU && mod.settings.RU) ||
        (mod.settings.newUpdate81TW && mod.settings.TW) ||
        (mod.settings.newUpdate81SEA && mod.settings.SEA)){
			let timeout = setTimeout(() => {
				command.message(`New Opcode Update Available`);
			}, 3000);
		}
    });
	mod.command.add('terao', (arg) => {
        if(arg) arg = arg.toLowerCase();
		if("nau" == arg){
			mod.settings.newUpdate81NA = !mod.settings.newUpdate81NA;
			command.message(`newUpdate81NA message is ${mod.settings.newUpdate81NA ? "on" : "off"}.`);
        } else if("na" == arg){
			mod.settings.NA = !mod.settings.NA;
			command.message(`NA message is ${mod.settings.NA ? "on" : "off"}.`);
        } else if("euu" == arg){
			mod.settings.newUpdate81EU = !mod.settings.newUpdate81EU;
			command.message(`newUpdate81EU message is ${mod.settings.newUpdate81EU ? "on" : "off"}.`);
        } else if("eu" == arg){
			mod.settings.EU = !mod.settings.EU;
			command.message(`EU message is ${mod.settings.EU ? "on" : "off"}.`);
        } else if("ruu" == arg){
			mod.settings.newUpdate81RU = !mod.settings.newUpdate81RU;
			command.message(`newUpdate81RU message is ${mod.settings.newUpdate81RU ? "on" : "off"}.`);
        } else if("ru" == arg){
			mod.settings.RU = !mod.settings.RU;
			command.message(`RU message is ${mod.settings.RU ? "on" : "off"}.`);
        } else if("twu" == arg){
			mod.settings.newUpdate81TW = !mod.settings.newUpdate81TW;
			command.message(`newUpdate81TW message is ${mod.settings.newUpdate81TW ? "on" : "off"}.`);
        } else if("tw" == arg){
			mod.settings.TW = !mod.settings.TW;
			command.message(`TW message is ${mod.settings.TW ? "on" : "off"}.`);
        } else if("seau" == arg){
			mod.settings.newUpdate81SEA = !mod.settings.newUpdate81SEA;
			command.message(`newUpdate81SEA message is ${mod.settings.newUpdate81SEA ? "on" : "off"}.`);
        } else if("sea" == arg){
			mod.settings.SEA = !mod.settings.SEA;
			command.message(`SEA message is ${mod.settings.SEA ? "on" : "off"}.`);
        }
    });
}