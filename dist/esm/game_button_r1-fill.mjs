export const name="game_button_r1-fill";
export const id="dl_383fadbfebf132da5c95";
export const url=new URL("../icons/game_button_r1-fill.svg?v=467cb2d6d2ae3c766722af723022a6ce9ab01a884d70b894ce317333d4d375d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
