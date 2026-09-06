export const name="line-segments-fill";
export const id="dl_9153fddabdc6421ab1f6";
export const url=new URL("../icons/line-segments-fill.svg?v=75889f25afe31c8308d6ca34fb6a90e9b0f9a946645bd9fda7460bf40f4bd073",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
