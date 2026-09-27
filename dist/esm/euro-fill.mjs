export const name="euro-fill";
export const id="dl_771ce90d84d95b0ba257";
export const url=new URL("../icons/euro-fill.svg?v=e26e5687250ef79a39bf20f6d5977b3454713cae588437f64a01774aa6a196a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
