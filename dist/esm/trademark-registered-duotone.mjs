export const name="trademark-registered-duotone";
export const id="dl_3d82b11d3c373681863b";
export const url=new URL("../icons/trademark-registered-duotone.svg?v=2ea3292b83ae4508a98c77c3b18c1430414ce51642ae0a01be80a879d4c18eb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
