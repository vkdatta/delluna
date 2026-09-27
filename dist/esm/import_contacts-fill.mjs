export const name="import_contacts-fill";
export const id="dl_57edc7b68dd2d776fcff";
export const url=new URL("../icons/import_contacts-fill.svg?v=63a98f60f16a1c3a8c5925cc98179862e1c11bb5923d5196ed25aed0055885cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
