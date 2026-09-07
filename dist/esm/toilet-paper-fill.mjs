export const name="toilet-paper-fill";
export const id="dl_c0d6b23332b440218470";
export const url=new URL("../icons/T/toilet-paper-fill.svg?v=507d27eb97e200f6190e0f4b5dc98487c03a13a8013ed16ccb8a4164d5b3b3c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
