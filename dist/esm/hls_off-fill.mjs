export const name="hls_off-fill";
export const id="dl_e83a30679c33c052f3eb";
export const url=new URL("../icons/hls_off-fill.svg?v=a0b28937addde880a7f9ee4ce60146249c8d4972f1bc42a0457ad13e3d488988",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
