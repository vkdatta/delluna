export const name="file-plus-duotone";
export const id="dl_6bee82b70f394b978d67";
export const url=new URL("../icons/file-plus-duotone.svg?v=df9d4b4276e7c6b9de7b3e208bcc41a3dc9b6eab011be751aed0ffad94c288a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
