export const name="sun";
export const id="dl_c7907b69e669401f9cd6";
export const url=new URL("../icons/S/sun.svg?v=8df1c7b747774f8b2c1fe353b1b785c74aac35bfa50f2ed7d8d9a85a4191b2ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
