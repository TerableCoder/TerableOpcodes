module.exports = function TerableOpcodes(mod) {
	const command = mod.command || mod.require.command;
	mod.hook('S_LOAD_CLIENT_USER_SETTING', 1, (event) => {
        if((mod.settings.newUpdate85NA && mod.settings.NA) ||
        (mod.settings.newUpdate85EU && mod.settings.EU) ||
        (mod.settings.newUpdate85RU && mod.settings.RU) ||
        (mod.settings.newUpdate85TW && mod.settings.TW) ||
        (mod.settings.newUpdate85SEA && mod.settings.SEA) ||
        (mod.settings.newUpdate85JP && mod.settings.JP)){
			let timeout = setTimeout(() => {
				command.message(`New Opcode Update Available`);
			}, 3000);
		}
    });
	mod.command.add('terao', (arg) => {
        if(arg) arg = arg.toLowerCase();
		if("nau" == arg){
			mod.settings.newUpdate85NA = !mod.settings.newUpdate85NA;
			command.message(`newUpdate85NA message is ${mod.settings.newUpdate85NA ? "on" : "off"}.`);
        } else if("na" == arg){
			mod.settings.NA = !mod.settings.NA;
			command.message(`NA message is ${mod.settings.NA ? "on" : "off"}.`);
        } else if("euu" == arg){
			mod.settings.newUpdate85EU = !mod.settings.newUpdate85EU;
			command.message(`newUpdate85EU message is ${mod.settings.newUpdate85EU ? "on" : "off"}.`);
        } else if("eu" == arg){
			mod.settings.EU = !mod.settings.EU;
			command.message(`EU message is ${mod.settings.EU ? "on" : "off"}.`);
        } else if("ruu" == arg){
			mod.settings.newUpdate85RU = !mod.settings.newUpdate85RU;
			command.message(`newUpdate85RU message is ${mod.settings.newUpdate85RU ? "on" : "off"}.`);
        } else if("ru" == arg){
			mod.settings.RU = !mod.settings.RU;
			command.message(`RU message is ${mod.settings.RU ? "on" : "off"}.`);
        } else if("twu" == arg){
			mod.settings.newUpdate85TW = !mod.settings.newUpdate85TW;
			command.message(`newUpdate85TW message is ${mod.settings.newUpdate85TW ? "on" : "off"}.`);
        } else if("tw" == arg){
			mod.settings.TW = !mod.settings.TW;
			command.message(`TW message is ${mod.settings.TW ? "on" : "off"}.`);
        } else if("seau" == arg){
			mod.settings.newUpdate85SEA = !mod.settings.newUpdate85SEA;
			command.message(`newUpdate85SEA message is ${mod.settings.newUpdate85SEA ? "on" : "off"}.`);
        } else if("sea" == arg){
			mod.settings.SEA = !mod.settings.SEA;
			command.message(`SEA message is ${mod.settings.SEA ? "on" : "off"}.`);
        } else if("jpu" == arg){
			mod.settings.newUpdate85JP = !mod.settings.newUpdate85JP;
			command.message(`newUpdate85JP message is ${mod.settings.newUpdate85JP ? "on" : "off"}.`);
        } else if("jp" == arg){
			mod.settings.SEA = !mod.settings.SEA;
			command.message(`JP message is ${mod.settings.JP ? "on" : "off"}.`);
        }
    });
}