export const name="globe-simple-x-light";
export const id="dl_861459b19b8545d891e5";
export const url=new URL("../icons/globe-simple-x-light.svg?v=b0f952f349dda91c48d443fe4078eaa80e164c0bf54f442ff94e34219b0f73d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
