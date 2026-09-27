export const name="medication_liquid";
export const id="dl_138812bd4353eddfb1e4";
export const url=new URL("../icons/medication_liquid.svg?v=5388236b1db386c95ac66aa751ceeec27586873ffa8cb2a5cf16e29f5006275b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
