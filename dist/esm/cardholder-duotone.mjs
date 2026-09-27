export const name="cardholder-duotone";
export const id="dl_60bb83cb6ef540a882a1";
export const url=new URL("../icons/cardholder-duotone.svg?v=af66ab257e34ba2b227050125d05570cfa66005e7724b7f0be6d57476f52f4ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
