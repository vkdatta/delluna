export const name="upload-simple-fill";
export const id="dl_574c7e97f90ce3f405d9";
export const url=new URL("../icons/upload-simple-fill.svg?v=7207e6d5563e3124563fc15bd34cc14214a5142974401f0380e1988ea4eb9b27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
