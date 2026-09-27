export const name="encrypted_off-fill";
export const id="dl_e8d4e09ba83cc3301922";
export const url=new URL("../icons/encrypted_off-fill.svg?v=5b1b2d2b04da20ed727ef854e2ff0cf395e795c6896b6a0facd7dda5834851e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
