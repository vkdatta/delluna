export const name="magnify_docked-fill";
export const id="dl_b68c45724833401baf33";
export const url=new URL("../icons/magnify_docked-fill.svg?v=fc7f1c9c4f99db8443ec5a58d03e438b2e7fcd205e9f6866cccb146fe079d09f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
