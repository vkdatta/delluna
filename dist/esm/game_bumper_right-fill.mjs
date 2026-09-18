export const name="game_bumper_right-fill";
export const id="dl_3cc4146bd1f143daba06";
export const url=new URL("../icons/game_bumper_right-fill.svg?v=4b201c9d90ee25066c4694a9d7b3bfd0b23e4dd4be708eb920fe1f3e7e9570ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
