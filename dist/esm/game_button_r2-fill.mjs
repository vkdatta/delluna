export const name="game_button_r2-fill";
export const id="dl_b5315f7482ad3b2dce5e";
export const url=new URL("../icons/game_button_r2-fill.svg?v=25038db4b99f7fce3ca2f14040335a225fb1a1e351fdfd218dda8fa0e2d16511",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
