module.exports = function TerableOpcodes(mod) {
	const command = mod.command || mod.require.command;
	mod.hook('S_LOAD_CLIENT_USER_SETTING', 1, (event) => {
        if((mod.settings.newUpdate83NA && mod.settings.NA) ||
        (mod.settings.newUpdate83EU && mod.settings.EU) ||
        (mod.settings.newUpdate83RU && mod.settings.RU) ||
        (mod.settings.newUpdate83TW && mod.settings.TW) ||
        (mod.settings.newUpdate83SEA && mod.settings.SEA) ||
        (mod.settings.newUpdate83JP && mod.settings.JP)){
			let timeout = setTimeout(() => {
				command.message(`New Opcode Update Available`);
			}, 3000);
		}
    });
	mod.command.add('terao', (arg) => {
        if(arg) arg = arg.toLowerCase();
		if("nau" == arg){
			mod.settings.newUpdate83NA = !mod.settings.newUpdate83NA;
			command.message(`newUpdate83NA message is ${mod.settings.newUpdate83NA ? "on" : "off"}.`);
        } else if("na" == arg){
			mod.settings.NA = !mod.settings.NA;
			command.message(`NA message is ${mod.settings.NA ? "on" : "off"}.`);
        } else if("euu" == arg){
			mod.settings.newUpdate83EU = !mod.settings.newUpdate83EU;
			command.message(`newUpdate83EU message is ${mod.settings.newUpdate83EU ? "on" : "off"}.`);
        } else if("eu" == arg){
			mod.settings.EU = !mod.settings.EU;
			command.message(`EU message is ${mod.settings.EU ? "on" : "off"}.`);
        } else if("ruu" == arg){
			mod.settings.newUpdate83RU = !mod.settings.newUpdate83RU;
			command.message(`newUpdate83RU message is ${mod.settings.newUpdate83RU ? "on" : "off"}.`);
        } else if("ru" == arg){
			mod.settings.RU = !mod.settings.RU;
			command.message(`RU message is ${mod.settings.RU ? "on" : "off"}.`);
        } else if("twu" == arg){
			mod.settings.newUpdate83TW = !mod.settings.newUpdate83TW;
			command.message(`newUpdate83TW message is ${mod.settings.newUpdate83TW ? "on" : "off"}.`);
        } else if("tw" == arg){
			mod.settings.TW = !mod.settings.TW;
			command.message(`TW message is ${mod.settings.TW ? "on" : "off"}.`);
        } else if("seau" == arg){
			mod.settings.newUpdate83SEA = !mod.settings.newUpdate83SEA;
			command.message(`newUpdate83SEA message is ${mod.settings.newUpdate83SEA ? "on" : "off"}.`);
        } else if("sea" == arg){
			mod.settings.SEA = !mod.settings.SEA;
			command.message(`SEA message is ${mod.settings.SEA ? "on" : "off"}.`);
        } else if("jpu" == arg){
			mod.settings.newUpdate83JP = !mod.settings.newUpdate83JP;
			command.message(`newUpdate83JP message is ${mod.settings.newUpdate83JP ? "on" : "off"}.`);
        } else if("jp" == arg){
			mod.settings.SEA = !mod.settings.SEA;
			command.message(`JP message is ${mod.settings.JP ? "on" : "off"}.`);
        }
    });
}