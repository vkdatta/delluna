export const name="battery_6_bar-fill";
export const id="dl_408f0d1ff978714885e5";
export const url=new URL("../icons/battery_6_bar-fill.svg?v=24d19516b339244639b6917db9f5c9d5fec8be12d87d35e44e2db369ecbed17e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
