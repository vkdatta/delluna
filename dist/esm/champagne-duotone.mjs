export const name="champagne-duotone";
export const id="dl_3e19508a9c2641ad8f4e";
export const url=new URL("../icons/champagne-duotone.svg?v=f39c744a28f44952cc54f1484d75b31c9176332e6da4f25eae686a7e3d3f5c69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
