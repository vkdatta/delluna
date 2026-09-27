export const name="cloud-arrow-down-light";
export const id="dl_7d3eb078e5454a7ea355";
export const url=new URL("../icons/cloud-arrow-down-light.svg?v=6a78778a83230fa0a120e9ea9c8cafa19b3e5c413e361c6f77c76fa8f2e3daae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
