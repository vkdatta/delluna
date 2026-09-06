export const name="folder-plus-light";
export const id="dl_f5c75d45aff548f2a5b4";
export const url=new URL("../icons/folder-plus-light.svg?v=5f03a9abfc079a24e77afb2bf78183948ac46e11366f5e2da509a13735106c7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
