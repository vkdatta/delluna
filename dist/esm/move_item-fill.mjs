export const name="move_item-fill";
export const id="dl_f5150da9472417133c16";
export const url=new URL("../icons/move_item-fill.svg?v=eec7cdb0076ea8e61a775652fd9953109c7bb74eefac40f5a73970bcbd821acd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
