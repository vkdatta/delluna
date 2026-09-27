export const name="magnet-duotone";
export const id="dl_20428069ccb5427f9b3b";
export const url=new URL("../icons/magnet-duotone.svg?v=d9d9ee8e89bc63ef1a01accf2aeb73bc2aaa84e91922da248c0416a01cc8e9ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
