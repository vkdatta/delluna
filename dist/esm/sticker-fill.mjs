export const name="sticker-fill";
export const id="dl_dd470dca0136b42c5ccb";
export const url=new URL("../icons/sticker-fill.svg?v=13c204fbb48d10509b3f4206ae46e9e4f3019b30f84c46dbe96cd9f77fbbab60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
