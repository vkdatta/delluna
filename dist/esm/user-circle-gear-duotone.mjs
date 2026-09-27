export const name="user-circle-gear-duotone";
export const id="dl_9d300a81730f3b78b1fc";
export const url=new URL("../icons/user-circle-gear-duotone.svg?v=8e876431794ea79d995a699eb9c9956bab1e808763a3cfc0bd05005c6d771ce7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
