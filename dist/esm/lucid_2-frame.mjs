export const name="lucid_2-frame";
export const id="dl_6d73f418d6d94e56b751";
export const url=new URL("../icons/lucid_2-frame.svg?v=d629280f89cb2a8eb27a39a8292937836617fa1d7b4e2d9856faf0ab0d689471",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
