export const name="import_contacts-fill";
export const id="dl_a5812663bd65dff7a1ad";
export const url=new URL("../icons/import_contacts-fill.svg?v=257b59d592293f314fa9b2435cf5501feaf8cd731ec1a394e026165cbb1bc87b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
