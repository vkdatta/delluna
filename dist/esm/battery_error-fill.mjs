export const name="battery_error-fill";
export const id="dl_28e8801d0c0849bd9fe6";
export const url=new URL("../icons/battery_error-fill.svg?v=e2f812eb7aa3eafcf67e13e203f12df0bc58b4d120398183536646c8690a29f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
