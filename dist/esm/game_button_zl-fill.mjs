export const name="game_button_zl-fill";
export const id="dl_4d4f9168eeefe48eb225";
export const url=new URL("../icons/game_button_zl-fill.svg?v=ea3384f73ac0882cfc4156a9757f65eeba419df3a1002ef187bb1409f901dccb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
