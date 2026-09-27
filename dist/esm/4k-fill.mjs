export const name="4k-fill";
export const id="dl_0ee5ae2774f35b19a060";
export const url=new URL("../icons/4k-fill.svg?v=7cef6e102e7d67b60b820039f55ed5294efc5c458e86f657854dde1e224d93a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
