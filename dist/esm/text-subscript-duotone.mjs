export const name="text-subscript-duotone";
export const id="dl_23dfb7f114761a0b370e";
export const url=new URL("../icons/text-subscript-duotone.svg?v=114da17cbc594101376eb2b114d806df3a1aca081fc10dffb5c498e8d82a616e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
