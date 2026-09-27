export const name="add_reaction-fill";
export const id="dl_51744911fa86718d63ab";
export const url=new URL("../icons/add_reaction-fill.svg?v=9c39a0dc6ffbccaf48972cfcf609e5fb04bc5373978058468d8838faccad4fd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
