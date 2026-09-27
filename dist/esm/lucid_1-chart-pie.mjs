export const name="lucid_1-chart-pie";
export const id="dl_cc5eb0c894814a97b144";
export const url=new URL("../icons/lucid_1-chart-pie.svg?v=77806d5e74379ed3949f831993a36bbfef61d7235ba49df673fe6235549cae4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
