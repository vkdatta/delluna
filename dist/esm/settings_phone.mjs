export const name="settings_phone";
export const id="dl_e7e9afed69df65d50a87";
export const url=new URL("../icons/settings_phone.svg?v=3966bb0ef9d10314f5736a1e949e681b9a0e6a2387079f0314b73f4e295b280b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
