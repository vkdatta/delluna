export const name="gender-male-duotone";
export const id="dl_ee92106c804d46539df8";
export const url=new URL("../icons/gender-male-duotone.svg?v=ab378acea55dc1c776f56790c867afbe6ab96a370b580d2cf4b0c53f9aa506f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
