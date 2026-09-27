export const name="e911_emergency";
export const id="dl_edccdccbaeea182655a7";
export const url=new URL("../icons/e911_emergency.svg?v=3835f05ad2d78859d05d1e7720c1ef0f676e40f40f0ec0ba138fb3d6a777819f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
