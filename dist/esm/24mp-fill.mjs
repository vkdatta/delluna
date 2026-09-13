export const name="24mp-fill";
export const id="dl_4d039d7d939248d883ad";
export const url=new URL("../icons/2/24mp-fill.svg?v=cb08d3c4cee1d71c82bf17adc8a330dff348a48b4426e24dc2ad242d610b916c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
