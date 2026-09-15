export const name="cloud_circle-fill";
export const id="dl_2e46c8a6ca46424292f0";
export const url=new URL("../icons/C/cloud_circle-fill.svg?v=ad8d97390aa177cb188b6b45d44d0497008a8304c0c42cd7d1763a4d3a84e899",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
