export const name="game_button_r1-fill";
export const id="dl_5e6e70220d134b3ca27d";
export const url=new URL("../icons/game_button_r1-fill.svg?v=d76972aa9e4ed792f126c7f5fb75cdc05343efe14c869711cb73988ae9b87f30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
