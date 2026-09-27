export const name="tote-duotone";
export const id="dl_cc3bebcc97e32ebad762";
export const url=new URL("../icons/tote-duotone.svg?v=c53a0881dc06864abddb5a90bbe4686e57ad6c59ac890dbd49f5b7c84f8b483c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
