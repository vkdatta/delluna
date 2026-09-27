export const name="control_point_duplicate";
export const id="dl_e83deb721f4000e16005";
export const url=new URL("../icons/control_point_duplicate.svg?v=6a9674671b79eb780d115eeaf2c6508c7ff034308382c882f38b202863ef522e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
