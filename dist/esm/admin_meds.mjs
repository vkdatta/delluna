export const name="admin_meds";
export const id="dl_b68c722f9ddbfcbfb496";
export const url=new URL("../icons/admin_meds.svg?v=d0b5fb32045641e66a0b9b5fa03ea04c17b7d64a1a4944cc459bf2b014423139",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
