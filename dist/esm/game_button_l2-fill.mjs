export const name="game_button_l2-fill";
export const id="dl_d3be9c6f84a7cf60bb34";
export const url=new URL("../icons/game_button_l2-fill.svg?v=4102cb8a1d30c44042476117d3332326707f14569e017ac9f9c3468b8de1276e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
