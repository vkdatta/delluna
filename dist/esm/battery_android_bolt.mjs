export const name="battery_android_bolt";
export const id="dl_5b56a65851d34dda2123";
export const url=new URL("../icons/battery_android_bolt.svg?v=f063428827ea6c0c82f43aef351878509c96f0b4c14a105a01a0223bd8a8e0f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
