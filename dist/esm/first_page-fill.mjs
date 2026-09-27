export const name="first_page-fill";
export const id="dl_6b9e6da03bc64a3a78cd";
export const url=new URL("../icons/first_page-fill.svg?v=ad08ee1c72adb9600ce2b19fd9d6eccb97a167442387ced85f5a8960cea75f78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
