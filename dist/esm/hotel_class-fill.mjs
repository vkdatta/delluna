export const name="hotel_class-fill";
export const id="dl_e50aad81ac6bc52366d2";
export const url=new URL("../icons/hotel_class-fill.svg?v=6b6803262a56ba76a6885d7ed84d9876f9e922fa674b7278a34182d405251475",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
