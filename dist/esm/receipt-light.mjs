export const name="receipt-light";
export const id="dl_c94b2b711e78498ea4f6";
export const url=new URL("../icons/receipt-light.svg?v=976c6032feefc41e2acef4990d78d04071fa16ac3dda0728395d038b640243c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
