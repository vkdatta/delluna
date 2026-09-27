export const name="shield-star-fill";
export const id="dl_652039b3f81633f04750";
export const url=new URL("../icons/shield-star-fill.svg?v=d10ea235785bd97b8718db2576a65324e7b2c62ec06445fa385a66bfec5d33ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
