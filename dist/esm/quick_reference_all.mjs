export const name="quick_reference_all";
export const id="dl_c8b5101e9fec790dd842";
export const url=new URL("../icons/quick_reference_all.svg?v=4cac9ef7aa7f6c82698a72d023443f658e9f7db8ecbf413a5dec0e6966ea2987",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
