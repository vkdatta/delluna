export const name="lucid_1-cctv";
export const id="dl_f9c03ed5ae5141989a33";
export const url=new URL("../icons/lucid_1-cctv.svg?v=6443e11af8dce97cb4a91e5d376e7cce37becc8d376c08fc1564a6560881e504",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
