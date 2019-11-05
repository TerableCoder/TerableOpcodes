module.exports = function TerableOpcodes(mod) {
	const command = mod.command || mod.require.command;
	mod.hook('S_LOAD_CLIENT_USER_SETTING', 1, (event) => {
        if((mod.settings.newUpdate86NA && mod.settings.NA) ||
        (mod.settings.newUpdate86EU && mod.settings.EU) ||
        (mod.settings.newUpdate86RU && mod.settings.RU) ||
        (mod.settings.newUpdate86TW && mod.settings.TW) ||
        (mod.settings.newUpdate86SEA && mod.settings.SEA) ||
        (mod.settings.newUpdate86JP && mod.settings.JP)){
			let timeout = setTimeout(() => {
				command.message(`New Opcode Update Available`);
			}, 3000);
		}
    });
	mod.command.add('terao', (arg) => {
        if(arg) arg = arg.toLowerCase();
		if("nau" == arg){
			mod.settings.newUpdate86NA = !mod.settings.newUpdate86NA;
			command.message(`newUpdate86NA message is ${mod.settings.newUpdate86NA ? "on" : "off"}.`);
        } else if("na" == arg){
			mod.settings.NA = !mod.settings.NA;
			command.message(`NA message is ${mod.settings.NA ? "on" : "off"}.`);
        } else if("euu" == arg){
			mod.settings.newUpdate86EU = !mod.settings.newUpdate86EU;
			command.message(`newUpdate86EU message is ${mod.settings.newUpdate86EU ? "on" : "off"}.`);
        } else if("eu" == arg){
			mod.settings.EU = !mod.settings.EU;
			command.message(`EU message is ${mod.settings.EU ? "on" : "off"}.`);
        } else if("ruu" == arg){
			mod.settings.newUpdate86RU = !mod.settings.newUpdate86RU;
			command.message(`newUpdate86RU message is ${mod.settings.newUpdate86RU ? "on" : "off"}.`);
        } else if("ru" == arg){
			mod.settings.RU = !mod.settings.RU;
			command.message(`RU message is ${mod.settings.RU ? "on" : "off"}.`);
        } else if("twu" == arg){
			mod.settings.newUpdate86TW = !mod.settings.newUpdate86TW;
			command.message(`newUpdate86TW message is ${mod.settings.newUpdate86TW ? "on" : "off"}.`);
        } else if("tw" == arg){
			mod.settings.TW = !mod.settings.TW;
			command.message(`TW message is ${mod.settings.TW ? "on" : "off"}.`);
        } else if("seau" == arg){
			mod.settings.newUpdate86SEA = !mod.settings.newUpdate86SEA;
			command.message(`newUpdate86SEA message is ${mod.settings.newUpdate86SEA ? "on" : "off"}.`);
        } else if("sea" == arg){
			mod.settings.SEA = !mod.settings.SEA;
			command.message(`SEA message is ${mod.settings.SEA ? "on" : "off"}.`);
        } else if("jpu" == arg){
			mod.settings.newUpdate86JP = !mod.settings.newUpdate86JP;
			command.message(`newUpdate86JP message is ${mod.settings.newUpdate86JP ? "on" : "off"}.`);
        } else if("jp" == arg){
			mod.settings.SEA = !mod.settings.SEA;
			command.message(`JP message is ${mod.settings.JP ? "on" : "off"}.`);
        }
    });
}