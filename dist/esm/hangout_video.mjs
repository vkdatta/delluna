export const name="hangout_video";
export const id="dl_d473b4d7c712c1f04ebd";
export const url=new URL("../icons/hangout_video.svg?v=ad1f7c83da3c4604377b5c215213566c34cc16c01f95ff2947d791b2e9eac63a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
