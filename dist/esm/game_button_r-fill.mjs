export const name="game_button_r-fill";
export const id="dl_8722a60abfad3c72ef34";
export const url=new URL("../icons/game_button_r-fill.svg?v=42848edd16931085a71ac4531f62493ff29294667be3d56d66b2f446271e7760",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
