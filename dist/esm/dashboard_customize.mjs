export const name="dashboard_customize";
export const id="dl_c5c0a699e465b49797a6";
export const url=new URL("../icons/dashboard_customize.svg?v=a29782599f7d07c9a13e1b0e47055b9efa6dfeb202fa487272a27fa8ba58d6e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
