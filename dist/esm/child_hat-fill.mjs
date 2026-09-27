export const name="child_hat-fill";
export const id="dl_63ac6f3cb73fc0a06b9b";
export const url=new URL("../icons/child_hat-fill.svg?v=d5476d5e27308525d3cb0230210921fc9adf8976ddd4624f3cb4c1af5d33b2b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
