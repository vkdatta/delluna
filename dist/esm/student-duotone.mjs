export const name="student-duotone";
export const id="dl_d5c01de0eff6ba5d2533";
export const url=new URL("../icons/student-duotone.svg?v=aa4243d69aeabdb1b0e79e166f1bced963c632e3f9342cf49fe76bd2bbb194db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
