export const name="cast_for_education";
export const id="dl_c336d2f167d2416dbfac";
export const url=new URL("../icons/C/cast_for_education.svg?v=fec6feb8460fff3d29fe98d67fb3052cba6bce5277007ada4cc0b0f0bed8b45d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
