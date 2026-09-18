export const name="game_button_l";
export const id="dl_bdc1118d579c4fe2bb51";
export const url=new URL("../icons/game_button_l.svg?v=f9a631d7f8237a00f91ff6d1471a7a13e417f01aa958560cce064de12479fa1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
