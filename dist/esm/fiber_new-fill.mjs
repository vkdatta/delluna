export const name="fiber_new-fill";
export const id="dl_1d7849eac376a2a90d2c";
export const url=new URL("../icons/fiber_new-fill.svg?v=0177c31f7afdc17dde5d309e21224c5d959334b70f0a95483d828bcfef2a096e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
