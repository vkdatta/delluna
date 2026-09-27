export const name="forms_add_on-fill";
export const id="dl_f22be7dd2575dcd16524";
export const url=new URL("../icons/forms_add_on-fill.svg?v=8392c9821695d9e46180765d8af7b8778a3fc25e97a63c16efe559a29fdba4bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
