export const name="specific_gravity-fill";
export const id="dl_914265a34eae4fd880e8";
export const url=new URL("../icons/specific_gravity-fill.svg?v=51d582f3f504c9d3ae1a1c58676a37a399548802ac11ab3293a97247928eeeb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
