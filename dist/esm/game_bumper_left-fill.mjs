export const name="game_bumper_left-fill";
export const id="dl_ffa25ef466c5d04a590e";
export const url=new URL("../icons/game_bumper_left-fill.svg?v=e3b67fbeac0825791f687f2b9986131264b08d7d9ad930d4f3dbe9a974499643",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
