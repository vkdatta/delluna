export const name="list-bold";
export const id="dl_d2697430c8bc47cb9a2f";
export const url=new URL("../icons/list-bold.svg?v=9f59b992480c4f11a07ec0d0657b9de7733f0bc38558dcdff442d892da6ed999",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
