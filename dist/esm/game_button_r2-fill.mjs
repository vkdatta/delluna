export const name="game_button_r2-fill";
export const id="dl_bc5a4c654ffdbb9f0a77";
export const url=new URL("../icons/game_button_r2-fill.svg?v=2723a7b95c5c23db41d0849b9c26f039dedce8f7f293e5bf462e58c6ec6ae97c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
