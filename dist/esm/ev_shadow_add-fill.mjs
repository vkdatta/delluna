export const name="ev_shadow_add-fill";
export const id="dl_418355d8e9e342f39d9c";
export const url=new URL("../icons/ev_shadow_add-fill.svg?v=29ec31c59fbf05cbb8a034546cf9b2f057ec99cdb57d57d1833c106563b28558",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
