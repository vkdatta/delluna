export const name="broadcast_on_personal-fill";
export const id="dl_43e5e669fafdbfa75752";
export const url=new URL("../icons/broadcast_on_personal-fill.svg?v=83faf577c01f6fe6fc9c30e6111ae4868f9f917349d71f11472208fd1928ddce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
