export const name="game_button_r";
export const id="dl_0af414fad1d5cc11e728";
export const url=new URL("../icons/game_button_r.svg?v=3517acf968248824260bcf5c788d45f86340c5208d2aba540fb604158bfb5083",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
