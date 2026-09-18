export const name="app_registration";
export const id="dl_75ea17cf9b114f68934d";
export const url=new URL("../icons/app_registration.svg?v=c6b73ae7ac9a025dabd48d8b7f8fd65c1d761c69b2102a5625bab0c0b8522ba7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
