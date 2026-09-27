export const name="move_location-fill";
export const id="dl_dfdc5f9e201e36cf540a";
export const url=new URL("../icons/move_location-fill.svg?v=405e95b1c1d16968ffe87b072b9b4a804622cf89b81d4de57d43bd83c2445f35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
