export const name="frame_bug-fill";
export const id="dl_ec41a5ee9ba02c2446b4";
export const url=new URL("../icons/frame_bug-fill.svg?v=d05125742e6a8e0c33416e55e64a7590fb5b66e3119dc3e43cdaadfa11513371",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
