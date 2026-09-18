export const name="precision_manufacturing-fill";
export const id="dl_d3efaebf3f9e4bc9916e";
export const url=new URL("../icons/precision_manufacturing-fill.svg?v=00b9144eac0d8e68edd1abba086cba10542f712c8991407ddf209102a2cdb09b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
