export const name="dirty_lens";
export const id="dl_c6ae16802a5f4c7f92b8";
export const url=new URL("../icons/dirty_lens.svg?v=48fc3d8e85442a3253110f26301c5121b33217ea40c5515d0285ed3d149a24ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
