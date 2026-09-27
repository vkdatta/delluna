export const name="restore_page-fill";
export const id="dl_a2a31295c184203f3ad4";
export const url=new URL("../icons/restore_page-fill.svg?v=2ac58b0593346b7b8081886c9d5e3b0450c761dfca8ab28be27bc4a8cd1944e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
