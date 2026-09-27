export const name="looks_3-fill";
export const id="dl_39ac3134cc0aef94e388";
export const url=new URL("../icons/looks_3-fill.svg?v=d3136f736b25153942fbd1b6460ce666f26447058b2cd6710e674f2f837f77f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
