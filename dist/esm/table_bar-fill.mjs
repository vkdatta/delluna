export const name="table_bar-fill";
export const id="dl_79d71a0fbdeb06ee10d1";
export const url=new URL("../icons/table_bar-fill.svg?v=ecd28d170c01f5b893613aef7b9ddcf36548a624236a9a0b6eb05c8c0d4b83b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
