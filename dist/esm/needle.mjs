export const name="needle";
export const id="dl_d1dae4b78dac4a62afda";
export const url=new URL("../icons/needle.svg?v=30fccab5cd50a20d09f7151a2a2579aeb9c9a52f01a138d0afbd2ff1dd93046a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
