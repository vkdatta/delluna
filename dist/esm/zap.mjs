export const name="zap";
export const id="dl_b7554e601ec84c9dba78";
export const url=new URL("../icons/zap.svg?v=1086be1abeb0bb05cf2c8487e2493532425957041db1840ecc4c76baf8521a73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
