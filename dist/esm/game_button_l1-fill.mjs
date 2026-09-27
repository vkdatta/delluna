export const name="game_button_l1-fill";
export const id="dl_4c41eb1513186c1bd715";
export const url=new URL("../icons/game_button_l1-fill.svg?v=1cfde6faecec1d05cd937b3f601e6a51dcb3b68a5aebd7e20d290e353be0d5ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
