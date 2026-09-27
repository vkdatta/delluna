export const name="monitor-arrow-up";
export const id="dl_3862fcb12169469ab7e8";
export const url=new URL("../icons/monitor-arrow-up.svg?v=bf3970ddfe8b88be09301739a6c0696e5c3d16cef90293b81b702b01c1e0a91c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
