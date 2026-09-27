export const name="spiral-light";
export const id="dl_eb830582dd6d9613cf64";
export const url=new URL("../icons/spiral-light.svg?v=9094d63318be8acc50a0426b7ef701098b5970d8366895d5789510df4eaaeb0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
