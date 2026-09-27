export const name="identity_aware_proxy-fill";
export const id="dl_736e71269ad328591d3e";
export const url=new URL("../icons/identity_aware_proxy-fill.svg?v=07a7f0034742583b1e92f7b7a29b73d69adda1889169b92c0dafa1daa461ed51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
