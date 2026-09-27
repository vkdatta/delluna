export const name="lucid_1-calendar-plus";
export const id="dl_d9c632799a074fdd8851";
export const url=new URL("../icons/lucid_1-calendar-plus.svg?v=5ee21d760ce536977d38e998ee80f8a644563818c9d9715d0a6b70616c00691b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
