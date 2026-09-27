export const name="tag-duotone";
export const id="dl_d3969bea5e7aad4aee70";
export const url=new URL("../icons/tag-duotone.svg?v=f95ed45e9ebcc1100bad7764905c71e80e43003a66bb90090f404fd69f9fba8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
