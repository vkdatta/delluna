export const name="ruler-duotone";
export const id="dl_db1aa647f97b494ea5ba";
export const url=new URL("../icons/ruler-duotone.svg?v=d021b75ee2515cc379045ce46fad6f7c5669be42e7f5a507d77902febea385b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
