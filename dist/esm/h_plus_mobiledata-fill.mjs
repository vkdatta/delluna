export const name="h_plus_mobiledata-fill";
export const id="dl_7409d321d0d54d04b033";
export const url=new URL("../icons/h_plus_mobiledata-fill.svg?v=f4d8532d41f3fa0f037b707de19ce50a0372d0b4d6e5f4f8469172397387b4cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
