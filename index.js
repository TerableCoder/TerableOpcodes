module.exports = function TerableOpcodes(mod) {
	const command = mod.command || mod.require.command;
	mod.hook('S_LOAD_CLIENT_USER_SETTING', 1, (event) => {
        if((mod.settings.newUpdate87NA && mod.settings.NA) ||
        (mod.settings.newUpdate87EU && mod.settings.EU) ||
        (mod.settings.newUpdate87RU && mod.settings.RU) ||
        (mod.settings.newUpdate87TW && mod.settings.TW) ||
        (mod.settings.newUpdate87SEA && mod.settings.SEA) ||
        (mod.settings.newUpdate87JP && mod.settings.JP)){
			let timeout = setTimeout(() => {
				command.message(`New Opcode Update Available`);
			}, 3000);
		}
    });
	mod.command.add('terao', (arg) => {
        if(arg) arg = arg.toLowerCase();
		if("nau" == arg){
			mod.settings.newUpdate87NA = !mod.settings.newUpdate87NA;
			command.message(`newUpdate87NA message is ${mod.settings.newUpdate87NA ? "on" : "off"}.`);
        } else if("na" == arg){
			mod.settings.NA = !mod.settings.NA;
			command.message(`NA message is ${mod.settings.NA ? "on" : "off"}.`);
        } else if("euu" == arg){
			mod.settings.newUpdate87EU = !mod.settings.newUpdate87EU;
			command.message(`newUpdate87EU message is ${mod.settings.newUpdate87EU ? "on" : "off"}.`);
        } else if("eu" == arg){
			mod.settings.EU = !mod.settings.EU;
			command.message(`EU message is ${mod.settings.EU ? "on" : "off"}.`);
        } else if("ruu" == arg){
			mod.settings.newUpdate87RU = !mod.settings.newUpdate87RU;
			command.message(`newUpdate87RU message is ${mod.settings.newUpdate87RU ? "on" : "off"}.`);
        } else if("ru" == arg){
			mod.settings.RU = !mod.settings.RU;
			command.message(`RU message is ${mod.settings.RU ? "on" : "off"}.`);
        } else if("twu" == arg){
			mod.settings.newUpdate87TW = !mod.settings.newUpdate87TW;
			command.message(`newUpdate87TW message is ${mod.settings.newUpdate87TW ? "on" : "off"}.`);
        } else if("tw" == arg){
			mod.settings.TW = !mod.settings.TW;
			command.message(`TW message is ${mod.settings.TW ? "on" : "off"}.`);
        } else if("seau" == arg){
			mod.settings.newUpdate87SEA = !mod.settings.newUpdate87SEA;
			command.message(`newUpdate87SEA message is ${mod.settings.newUpdate87SEA ? "on" : "off"}.`);
        } else if("sea" == arg){
			mod.settings.SEA = !mod.settings.SEA;
			command.message(`SEA message is ${mod.settings.SEA ? "on" : "off"}.`);
        } else if("jpu" == arg){
			mod.settings.newUpdate87JP = !mod.settings.newUpdate87JP;
			command.message(`newUpdate87JP message is ${mod.settings.newUpdate87JP ? "on" : "off"}.`);
        } else if("jp" == arg){
			mod.settings.SEA = !mod.settings.SEA;
			command.message(`JP message is ${mod.settings.JP ? "on" : "off"}.`);
        }
    });
}