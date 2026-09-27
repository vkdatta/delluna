export const name="mobile_lock_portrait";
export const id="dl_c4689e4289de72c3cdfe";
export const url=new URL("../icons/mobile_lock_portrait.svg?v=af486b20c3a8c19006a699991d0839917c197947d12a2c4e24421dc2c3180bdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
