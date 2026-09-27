export const name="hdr_off-fill";
export const id="dl_874cd5eb993593671e61";
export const url=new URL("../icons/hdr_off-fill.svg?v=b673e3fae47228c1e3d5242a2190b0bfa742d6a21aa858d113083b10de9aa51a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
