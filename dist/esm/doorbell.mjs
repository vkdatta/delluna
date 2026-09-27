export const name="doorbell";
export const id="dl_c2d8cc0c10cce36533ee";
export const url=new URL("../icons/doorbell.svg?v=5e3fa3df5d22047fb64a50a2a52d9096bc3498eb895a17cbbf4ea9d75a8b68f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
