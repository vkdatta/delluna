export const name="game_button_l2-fill";
export const id="dl_4c6f535c252244639ca7";
export const url=new URL("../icons/G/game_button_l2-fill.svg?v=e08dfe0923457c928dc1604190b8805c18ca022361e521900ba9da2b218bc908",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
