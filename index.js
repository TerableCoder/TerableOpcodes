module.exports = function TerableOpcodes(mod) {
	const command = mod.command || mod.require.command;
	mod.hook('S_LOAD_CLIENT_USER_SETTING', 1, (event) => {
        if((mod.settings.newUpdate82NA1 && mod.settings.NA) ||
        (mod.settings.newUpdate82EU1 && mod.settings.EU) ||
        (mod.settings.newUpdate82RU1 && mod.settings.RU) ||
        (mod.settings.newUpdate82TW && mod.settings.TW) ||
        (mod.settings.newUpdate81SEA1 && mod.settings.SEA)){
			let timeout = setTimeout(() => {
				command.message(`New Opcode Update Available`);
			}, 3000);
		}
    });
	mod.command.add('terao', (arg) => {
        if(arg) arg = arg.toLowerCase();
		if("nau" == arg){
			mod.settings.newUpdate82NA1 = !mod.settings.newUpdate82NA1;
			command.message(`newUpdate82NA1 message is ${mod.settings.newUpdate82NA1 ? "on" : "off"}.`);
        } else if("na" == arg){
			mod.settings.NA = !mod.settings.NA;
			command.message(`NA message is ${mod.settings.NA ? "on" : "off"}.`);
        } else if("euu" == arg){
			mod.settings.newUpdate82EU1 = !mod.settings.newUpdate82EU1;
			command.message(`newUpdate82EU1 message is ${mod.settings.newUpdate82EU1 ? "on" : "off"}.`);
        } else if("eu" == arg){
			mod.settings.EU = !mod.settings.EU;
			command.message(`EU message is ${mod.settings.EU ? "on" : "off"}.`);
        } else if("ruu" == arg){
			mod.settings.newUpdate82RU1 = !mod.settings.newUpdate82RU1;
			command.message(`newUpdate82RU1 message is ${mod.settings.newUpdate82RU1 ? "on" : "off"}.`);
        } else if("ru" == arg){
			mod.settings.RU = !mod.settings.RU;
			command.message(`RU message is ${mod.settings.RU ? "on" : "off"}.`);
        } else if("twu" == arg){
			mod.settings.newUpdate82TW = !mod.settings.newUpdate82TW;
			command.message(`newUpdate82TW message is ${mod.settings.newUpdate82TW ? "on" : "off"}.`);
        } else if("tw" == arg){
			mod.settings.TW = !mod.settings.TW;
			command.message(`TW message is ${mod.settings.TW ? "on" : "off"}.`);
        } else if("seau" == arg){
			mod.settings.newUpdate81SEA1 = !mod.settings.newUpdate81SEA1;
			command.message(`newUpdate81SEA1 message is ${mod.settings.newUpdate81SEA1 ? "on" : "off"}.`);
        } else if("sea" == arg){
			mod.settings.SEA = !mod.settings.SEA;
			command.message(`SEA message is ${mod.settings.SEA ? "on" : "off"}.`);
        }
    });
}