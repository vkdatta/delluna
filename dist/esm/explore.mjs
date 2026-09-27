export const name="explore";
export const id="dl_d3493aba096808478c45";
export const url=new URL("../icons/explore.svg?v=b7a2f88595359385f28f55c41ce429dbd0a0fc5797c8ae74d98b2ee956e16855",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
