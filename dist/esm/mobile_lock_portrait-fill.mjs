export const name="mobile_lock_portrait-fill";
export const id="dl_563e89bf39b3b1135fe1";
export const url=new URL("../icons/mobile_lock_portrait-fill.svg?v=f2263f3d2c94bd3b2bd0f24ed54952c533acbb99205d5cb82dd98011e593de24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
