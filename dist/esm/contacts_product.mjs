export const name="contacts_product";
export const id="dl_393e0d1422453129e0aa";
export const url=new URL("../icons/contacts_product.svg?v=bb16341153f6728c7426e303e96c8cab1677ad02b97191ef4f3eca8b37b1bbd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
