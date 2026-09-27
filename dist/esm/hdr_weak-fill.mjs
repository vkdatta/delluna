export const name="hdr_weak-fill";
export const id="dl_b0e13805bc420b340a30";
export const url=new URL("../icons/hdr_weak-fill.svg?v=dc37578f17e4ea02590f110a43fbce4fc72a7212285678c560340ff4c0a0f54d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
