export const name="mail_shield-fill";
export const id="dl_67d163173762016301cd";
export const url=new URL("../icons/mail_shield-fill.svg?v=8a76902803fce2708ea75d81aadd8b478bbda9414d5475b0682e99526e3d8616",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
