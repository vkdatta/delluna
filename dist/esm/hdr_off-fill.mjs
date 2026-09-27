export const name="hdr_off-fill";
export const id="dl_14880fbd67eb789cff9b";
export const url=new URL("../icons/hdr_off-fill.svg?v=5af773ca624ea23d338494aba124f582d5de93991c55bc51f1ef7faca7db3955",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
