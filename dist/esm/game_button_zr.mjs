export const name="game_button_zr";
export const id="dl_7af7c2c69b86e3a85424";
export const url=new URL("../icons/game_button_zr.svg?v=caf9fdb94ace7a0c324ce1ede7f34bee2cc16a6caca37f056569a75f88d2959d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
