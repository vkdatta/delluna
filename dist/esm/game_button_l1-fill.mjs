export const name="game_button_l1-fill";
export const id="dl_debc44ebbeaa666d63e0";
export const url=new URL("../icons/game_button_l1-fill.svg?v=236e8302451d0e38849acc6be7283fffd190fcfd2df897e42fbc16f35ac6d702",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
