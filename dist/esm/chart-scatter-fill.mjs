export const name="chart-scatter-fill";
export const id="dl_130e0e9a41d94185953f";
export const url=new URL("../icons/chart-scatter-fill.svg?v=089efb9dfc6b970261de2aee912f3f374bc8e2eb11547ff5a61d67a86d07d7fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
