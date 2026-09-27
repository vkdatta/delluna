export const name="corners-in";
export const id="dl_f5bf83c771bc4dec9604";
export const url=new URL("../icons/corners-in.svg?v=4492066fc57082bd200f5c75cc55c0128b00db9c9334c9b6544773103018ff7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
