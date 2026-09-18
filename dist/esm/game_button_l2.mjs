export const name="game_button_l2";
export const id="dl_c64968f9c6974ba6a7ed";
export const url=new URL("../icons/G/game_button_l2.svg?v=793f697fb00bc0541fe702b84741f6e06e473768fc6b806146e45483a1110d5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
