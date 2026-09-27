export const name="game_button_l-fill";
export const id="dl_65079bf01ad8b31b88b3";
export const url=new URL("../icons/game_button_l-fill.svg?v=5cc049d9b5fa5359fd9126b9efa228929935e4e75de629352164a8144e1be83e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
