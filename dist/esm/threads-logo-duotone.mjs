export const name="threads-logo-duotone";
export const id="dl_d73e7ce3284f4196b6ad";
export const url=new URL("../icons/T/threads-logo-duotone.svg?v=00bf91a3dcdd508169b19fdf383139d450b7814b967cb311c469cbbbcf0ce5ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
