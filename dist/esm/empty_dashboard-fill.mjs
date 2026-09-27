export const name="empty_dashboard-fill";
export const id="dl_357a07fdbf8d9c17354e";
export const url=new URL("../icons/empty_dashboard-fill.svg?v=7f542922064e42226a9867bce3cf9bf5213eaf67268812d984a5be9f9f0288bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
