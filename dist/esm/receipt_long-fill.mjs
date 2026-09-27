export const name="receipt_long-fill";
export const id="dl_6f387fe1fb3129343dba";
export const url=new URL("../icons/receipt_long-fill.svg?v=08ca51bc223d36e78a8c1cc35c92e5029e30636e013b25cc7fd0b9da8686dce2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
