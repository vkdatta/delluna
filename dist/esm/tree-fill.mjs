export const name="tree-fill";
export const id="dl_c6b230834c7f46d39ac7";
export const url=new URL("../icons/T/tree-fill.svg?v=4f0fb03bdee79eb981d6340ffba3a3079b4609e0473b3ae2b370c1aa09d8fc69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
