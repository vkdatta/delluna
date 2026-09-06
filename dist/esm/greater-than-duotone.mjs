export const name="greater-than-duotone";
export const id="dl_56ab0670ba5f40ebb32f";
export const url=new URL("../icons/greater-than-duotone.svg?v=f9b0a32b519e8c1cd2fa78c1f9cb20eaa1265cf59538df9e1d6beff1fed449c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
