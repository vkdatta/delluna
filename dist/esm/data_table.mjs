export const name="data_table";
export const id="dl_4915246f861332e9c624";
export const url=new URL("../icons/data_table.svg?v=5d1c0f2dc1445b60673b78bd479ef2d891745d205da93c0e1c8cbc028b00a0c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
