export const name="add_notes-fill";
export const id="dl_88559ae32ec399cc35de";
export const url=new URL("../icons/add_notes-fill.svg?v=e48e5e2c4aab974398ccb84676ec94c66393baf1302017b9b53a198210b4df82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
