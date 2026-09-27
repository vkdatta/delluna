export const name="lucid_3-square-chevron-left";
export const id="dl_dd23973757a046309be3";
export const url=new URL("../icons/lucid_3-square-chevron-left.svg?v=626e4f98069492abc52f8ceb5a37632e06aaf669258bb7e0d3b8222ff7472206",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
