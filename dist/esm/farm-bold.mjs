export const name="farm-bold";
export const id="dl_ad49bfd308354c16a1c6";
export const url=new URL("../icons/farm-bold.svg?v=1e782bc832d98eea1afa09c987f2c8afbe41b27406223f385ed5d2f9e1f8194e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
