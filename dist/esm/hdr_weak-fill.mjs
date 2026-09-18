export const name="hdr_weak-fill";
export const id="dl_48f6deff61974a3ab054";
export const url=new URL("../icons/H/hdr_weak-fill.svg?v=e785feccc89aeaff958d599cb442c6bf42495019a7c06083a0096f0b2a60a41b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
