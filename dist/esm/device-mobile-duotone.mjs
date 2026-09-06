export const name="device-mobile-duotone";
export const id="dl_506802de147446a0a105";
export const url=new URL("../icons/device-mobile-duotone.svg?v=dd1f130cc18a988d9e606f5253fb96f2c2b9502f1153b3685a4dd49628995b87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
