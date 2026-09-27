export const name="cheese-duotone";
export const id="dl_a411837c83124b11b3ba";
export const url=new URL("../icons/cheese-duotone.svg?v=3e61a234fafbdd40c10b73dd5530a334bd000f0329fb01d0dec83d78d6a7cf0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
