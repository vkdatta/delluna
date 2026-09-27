export const name="database_upload";
export const id="dl_00ed219d8579f0ad331f";
export const url=new URL("../icons/database_upload.svg?v=489888bd07de35f7b9ccbc1951f840c3ef69bbd81ab830fb088487874c4809fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
