export const name="game_button_zl-fill";
export const id="dl_eff00c277ee930eab6f3";
export const url=new URL("../icons/game_button_zl-fill.svg?v=adb7e1600bcc0b34374aa9fe9e4b26eb684307ef9e833150323acea3c1829c94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
