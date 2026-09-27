export const name="kitchen";
export const id="dl_5461ce4f6b14c1e50528";
export const url=new URL("../icons/kitchen.svg?v=2b19ca18842fc3845f6da0df4bf04604df09752dd4cc49c039e472a7a4846744",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
