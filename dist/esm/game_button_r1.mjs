export const name="game_button_r1";
export const id="dl_17563868879b4ce18a0b";
export const url=new URL("../icons/game_button_r1.svg?v=24939d804711bc20e5ef2edc5a66262d26d761ea0203496f75831b5129c0274b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
