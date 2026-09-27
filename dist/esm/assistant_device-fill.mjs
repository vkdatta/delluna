export const name="assistant_device-fill";
export const id="dl_b7200cc0a542582cbb53";
export const url=new URL("../icons/assistant_device-fill.svg?v=c04211989046dd6c00fcee8e745b390054db99b68d6396e824ef590b8ceabbc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
