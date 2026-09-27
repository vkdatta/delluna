export const name="monitor";
export const id="dl_3c30b7a3b2fc49c2b868";
export const url=new URL("../icons/monitor.svg?v=c3abe3789dae526b4aa2d4b73e32570a53bb56a4adad910c6d9f6ee8297efd3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
