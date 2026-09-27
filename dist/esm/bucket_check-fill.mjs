export const name="bucket_check-fill";
export const id="dl_cb9f699b66d19a61d98a";
export const url=new URL("../icons/bucket_check-fill.svg?v=640e47c2626cf30680463e03115e70766d84acd98ed990cdcb56f609df3e0abd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
