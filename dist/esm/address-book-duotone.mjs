export const name="address-book-duotone";
export const id="dl_6e17cc7345204594a909";
export const url=new URL("../icons/address-book-duotone.svg?v=541031a31a3cd64245027dc2b3c243fc70b38e82b5884bc4dd8974c632ec03af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
