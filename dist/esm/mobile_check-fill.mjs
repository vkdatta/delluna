export const name="mobile_check-fill";
export const id="dl_8d6f24d16ec418e0a042";
export const url=new URL("../icons/mobile_check-fill.svg?v=0feef94c5ac32f152c34c6fab09f00178c17798e48ff5914a4ce98bfef642ac0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
