export const name="contacts";
export const id="dl_4c8805a50bcc4f80996a";
export const url=new URL("../icons/contacts.svg?v=869d949a798d9ab717f9a12655de790b951b3b34027a5a8b9b4b77ba3c27ad4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
