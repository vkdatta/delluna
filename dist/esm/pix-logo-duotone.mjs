export const name="pix-logo-duotone";
export const id="dl_10ac3011d66040d3be9f";
export const url=new URL("../icons/pix-logo-duotone.svg?v=ff310c0c7983ed542c572c8092c7060e9fd30e7764b51428f19b8eb08b45bd1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
