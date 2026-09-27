export const name="cloud-check-duotone";
export const id="dl_7a8f9b4204ea4785b30c";
export const url=new URL("../icons/cloud-check-duotone.svg?v=453f764973f2b26bdc39fca72796466de8eeca80f63394f015d1e99501c7ea97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
