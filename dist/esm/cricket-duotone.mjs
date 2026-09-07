export const name="cricket-duotone";
export const id="dl_1f6f447a09dd48f8a8b3";
export const url=new URL("../icons/cricket-duotone.svg?v=25c0e58db99aab968c8cd8deadd580bf89f726843ee1cfbc96834f5ec625c57a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
