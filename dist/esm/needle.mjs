export const name="needle";
export const id="dl_d1dae4b78dac4a62afda";
export const url=new URL("../icons/needle.svg?v=ebe226bb9da42c31d3cd63e6942025ba31653a61567bce9c984da743be1787b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
