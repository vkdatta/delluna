export const name="shield_lock";
export const id="dl_0128ee016b30433bbbc4";
export const url=new URL("../icons/S/shield_lock.svg?v=7ac67bc203ceae69036616b606d33b4fe2c82fbbd2c3e64619f13cf1a1f4914c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
