export const name="needle";
export const id="dl_d1dae4b78dac4a62afda";
export const url=new URL("../icons/needle.svg?v=e611b265bd774ceda047bf81bc76fa994b2572556d8db47b75a9bce431330266",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
