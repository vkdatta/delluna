export const name="mobile_lock_portrait-fill";
export const id="dl_e80ee4aa6db602e0b8a6";
export const url=new URL("../icons/mobile_lock_portrait-fill.svg?v=45ab1c5104cddd12e7ac1ffbf204d72472e9c2db0270a49627fda07ff568d8b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
