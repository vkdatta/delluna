export const name="game_button_l2-fill";
export const id="dl_d6288377729027da914f";
export const url=new URL("../icons/game_button_l2-fill.svg?v=3324aa315cd283340ff24be811f3b5e39969a138a7b0d90c2dc53a0b2533d788",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
