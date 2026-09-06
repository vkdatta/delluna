export const name="address-book";
export const id="dl_a29f32c2b9864b82b83c";
export const url=new URL("../icons/address-book.svg?v=5fc4bb47b2d193e3b7239ce2fec26a97f2675ea21dab502e3207df6bbe6c849d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
