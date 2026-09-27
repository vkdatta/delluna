export const name="swimming-pool-fill";
export const id="dl_5c8ec136e066be19898b";
export const url=new URL("../icons/swimming-pool-fill.svg?v=cae7f0246db2e5008884800ec1a5c771cc77222eda57d2c9fd1bf847636f38ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
