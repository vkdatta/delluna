export const name="design_services";
export const id="dl_3a350a0934f235cfd382";
export const url=new URL("../icons/design_services.svg?v=c56cf66e082909eb702913c2367526d066691284b2f1f02a11e899b7713aad07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
