export const name="admin_meds-fill";
export const id="dl_f01284b2654c1d1cb3c4";
export const url=new URL("../icons/admin_meds-fill.svg?v=94b5a0e2ccc69c0142ae8ce532f8b54762d5ee1a10068302dd2e609e1bd603f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
