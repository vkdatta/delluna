export const name="game_stick_r3";
export const id="dl_6868545ba0114a00a810";
export const url=new URL("../icons/game_stick_r3.svg?v=e4adec7bfcb26aac3105dd2044f7ba4fb32217a55e9239e990ee7eadde3b75f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
