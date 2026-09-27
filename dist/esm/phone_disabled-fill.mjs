export const name="phone_disabled-fill";
export const id="dl_d9fa2621278f164adb48";
export const url=new URL("../icons/phone_disabled-fill.svg?v=e0ec5ed306055a24fa80fba3e0b2207b24a246b8dff7f302a7057ac392b428ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
