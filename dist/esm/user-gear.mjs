export const name="user-gear";
export const id="dl_03b74a9b5e284c2d3c20";
export const url=new URL("../icons/user-gear.svg?v=d56457deafce1ac489b00cd008c92d1ba49e0a574a7b3d30186a5dd981c30552",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
