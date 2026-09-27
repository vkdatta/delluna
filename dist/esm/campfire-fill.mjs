export const name="campfire-fill";
export const id="dl_eba9590d85f64a19bc93";
export const url=new URL("../icons/campfire-fill.svg?v=5727b503292ffab6089f8425b74b8c4c6b953d98a8bc4e863b7035171c7c45fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
