export const name="lucid_2-heart-off";
export const id="dl_60d2d45fdfb14030af41";
export const url=new URL("../icons/lucid_2-heart-off.svg?v=2a992da61061915e333d29265df4585cd646e46a222e37bcf1bbb0a850638045",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
