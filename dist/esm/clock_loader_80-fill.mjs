export const name="clock_loader_80-fill";
export const id="dl_aa3d0dc505f2fb1b606e";
export const url=new URL("../icons/clock_loader_80-fill.svg?v=d35f0d5a7a34f2104ca9fdbaeac2e6d29eb0c1ed1def3cbc0e441b1c999e2ad1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
