export const name="game_stick_left-fill";
export const id="dl_21dbf4d1a91ae27ca892";
export const url=new URL("../icons/game_stick_left-fill.svg?v=0d58914923061b425b63df0a7a8eec1f2d4a8a15d811dcae5f0ce11d47da679d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
