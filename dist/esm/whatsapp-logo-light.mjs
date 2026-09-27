export const name="whatsapp-logo-light";
export const id="dl_62aeed94c0ccf5150c5b";
export const url=new URL("../icons/whatsapp-logo-light.svg?v=4daa6d909a72b638631c07fc088756f4c88111406b348f31410d140d9d29183d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
