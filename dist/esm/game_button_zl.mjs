export const name="game_button_zl";
export const id="dl_6a241b7fff77bcbfa669";
export const url=new URL("../icons/game_button_zl.svg?v=5ec18330e96e1a2ab0a71888ed0b465d3632109f26a0b120c313a6a9e50ed1f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
