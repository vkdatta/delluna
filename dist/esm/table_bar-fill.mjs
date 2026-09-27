export const name="table_bar-fill";
export const id="dl_1df51d178db4ef2eeca0";
export const url=new URL("../icons/table_bar-fill.svg?v=648d335fa3de3e4c6c5fc1cd51f1a8a765222a62a51534bc3704d2d62e09770d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
