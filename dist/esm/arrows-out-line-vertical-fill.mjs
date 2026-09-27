export const name="arrows-out-line-vertical-fill";
export const id="dl_a70542fabd694d8cbac8";
export const url=new URL("../icons/arrows-out-line-vertical-fill.svg?v=9e5751aabb6f6752e7e0c93c5c8759e23855f484bc27d48f3ae9fc4a2bef29cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
