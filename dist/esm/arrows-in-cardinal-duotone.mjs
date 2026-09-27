export const name="arrows-in-cardinal-duotone";
export const id="dl_b28d45a29d64403e8502";
export const url=new URL("../icons/arrows-in-cardinal-duotone.svg?v=38237655af1c5f90092fcffc90d3eca1f5c9ec65f019bab78960afd922122584",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
