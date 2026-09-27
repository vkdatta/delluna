export const name="lucid_3-playing-card";
export const id="dl_8542480e2d584782bbd5";
export const url=new URL("../icons/lucid_3-playing-card.svg?v=756db65c61b0d949c15ace650fa200f2ebb3a55f525c73ae965b02f61087f5bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
