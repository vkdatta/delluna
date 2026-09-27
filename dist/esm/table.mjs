export const name="table";
export const id="dl_1ebdaf4771bae788a2bc";
export const url=new URL("../icons/table.svg?v=1f68e4d62e4ac9fd8912a5cf4d68f05736fa190daa48cab2c389c5770a7de4c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
