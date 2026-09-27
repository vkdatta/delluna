export const name="3k-fill";
export const id="dl_1cf13df0d2748f9babf0";
export const url=new URL("../icons/3k-fill.svg?v=e789c31e4048056a49f731124b451598c1fbc83cb78616f52f73a6347a51c1f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
