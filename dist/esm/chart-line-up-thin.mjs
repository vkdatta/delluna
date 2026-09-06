export const name="chart-line-up-thin";
export const id="dl_9f55444f7be348aa961c";
export const url=new URL("../icons/chart-line-up-thin.svg?v=ca6373f702063b85cfd1ccbce7ba79318681b953f387d61417776932e2e5ec6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
