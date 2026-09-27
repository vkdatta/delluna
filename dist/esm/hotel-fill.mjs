export const name="hotel-fill";
export const id="dl_7041a97f617e46ea69f9";
export const url=new URL("../icons/hotel-fill.svg?v=9c0d6ca245a8014c8553ae2e0aa93f24bfcadf798a6fe0355fa4a5dd6be1f1ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
