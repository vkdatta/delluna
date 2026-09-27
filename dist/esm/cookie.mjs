export const name="cookie";
export const id="dl_60e855f3943e102bf01e";
export const url=new URL("../icons/cookie.svg?v=346aaef780a977e26af972c4329b6093993b6e7ff528968e9afc8144b3c55dd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
