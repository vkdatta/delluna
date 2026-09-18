export const name="admin_meds-fill";
export const id="dl_0c64e1187d32416a856d";
export const url=new URL("../icons/admin_meds-fill.svg?v=704898ebe149ddabb5aedbda3f65c0025400ff0c46e908bf974915d8ec923a4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
