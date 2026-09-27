export const name="lucid_2-fan";
export const id="dl_a0f935f76cea427295bc";
export const url=new URL("../icons/lucid_2-fan.svg?v=c6f50591dad8a5093f73c0dd283be681cbbbfbd9e3455007e9c4037f889b829d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
