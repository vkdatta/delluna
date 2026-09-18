export const name="game_button_r-fill";
export const id="dl_81a1f38c98ad4bc294bb";
export const url=new URL("../icons/G/game_button_r-fill.svg?v=5ee31fbfad0c72c784db2de720eeb8b2801e4ce4f0c6f50213142b6638efa21e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
