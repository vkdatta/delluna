export const name="pinwheel-duotone";
export const id="dl_b33c7ebe149443c19155";
export const url=new URL("../icons/pinwheel-duotone.svg?v=f0191aec50e15c7c7dec109616280b89831ec2ad676f73a7779bc02b92222c84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
