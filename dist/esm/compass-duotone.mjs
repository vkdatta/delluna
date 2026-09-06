export const name="compass-duotone";
export const id="dl_d110075939f24b5e9775";
export const url=new URL("../icons/compass-duotone.svg?v=00b82ffc59e709c6605a7fe02a0c541c49e2d26c4d58f5dad557ddaeae76e745",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
