export const name="game_trigger_left-fill";
export const id="dl_14958c04c9df31509265";
export const url=new URL("../icons/game_trigger_left-fill.svg?v=4ffb762666f4c81071f3398234037727f3d22790cd23a7be764fa4f9074baab2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
