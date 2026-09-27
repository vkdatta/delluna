export const name="add_chart-fill";
export const id="dl_5a19ea1e6182f2a18374";
export const url=new URL("../icons/add_chart-fill.svg?v=59fd186834719947043df06f0014ba43c2e4324734316a9c6ccb703bafa403bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
