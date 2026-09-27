export const name="arrows-horizontal-duotone";
export const id="dl_642bce23dccc416f855b";
export const url=new URL("../icons/arrows-horizontal-duotone.svg?v=f9e91c1ae5f962461d8b43a2b5f51dc92ccf8b64d440dc6c35f481ba4036b2a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
