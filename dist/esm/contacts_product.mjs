export const name="contacts_product";
export const id="dl_17f0a0d2a5e2e992f48a";
export const url=new URL("../icons/contacts_product.svg?v=77d31e51ae2c9a171b67641b650b6f4d9d794b651f8db95f70435f712953cfbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
