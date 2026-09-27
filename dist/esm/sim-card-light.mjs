export const name="sim-card-light";
export const id="dl_177ceb8c21b73e2c3257";
export const url=new URL("../icons/sim-card-light.svg?v=c96f5c6e9a0e88b6f66fefc3a7275d13a9cbb684d3ac2a728bcb5166731905c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
