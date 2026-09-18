export const name="directions_off-fill";
export const id="dl_699f93c73cb543b2b15b";
export const url=new URL("../icons/directions_off-fill.svg?v=dd91c4b6c425f19c8e5f87cc0a91d7cd142be7472fdb721df6d0d1674592ffcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
