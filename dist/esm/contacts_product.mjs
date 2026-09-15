export const name="contacts_product";
export const id="dl_e3e2541857224579bbd5";
export const url=new URL("../icons/C/contacts_product.svg?v=a300043037187ea52457bb9928c0743d58d930ef9460b5d055fefeb3ea2b1ea7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
