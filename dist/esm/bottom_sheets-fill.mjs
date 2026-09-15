export const name="bottom_sheets-fill";
export const id="dl_b084673554944a33a001";
export const url=new URL("../icons/B/bottom_sheets-fill.svg?v=0b6813a8193e3b11751202ead703e613890ed4e120c9bf4efa0eef6ee8d541f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
