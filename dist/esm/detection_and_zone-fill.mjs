export const name="detection_and_zone-fill";
export const id="dl_570e932eb5f8d51f9f3c";
export const url=new URL("../icons/detection_and_zone-fill.svg?v=3593aed52196a2aa87aa7c845a857c8d6fbf2b0c2b73eeaff0d29aaf2d894c27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
