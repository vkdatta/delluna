export const name="arrow-bend-double-up-right-thin";
export const id="dl_feafcc24bf2b4277a775";
export const url=new URL("../icons/arrow-bend-double-up-right-thin.svg?v=171069a1d0e08952a85b0b6769f97dd8159c57415349971728a8f7ffbb45aa8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
