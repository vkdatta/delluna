export const name="unfold_more";
export const id="dl_301825a050ea4589a357";
export const url=new URL("../icons/all_60_named_svgs/unfold_more.svg?v=06ea30349db2ca0df49bc953e3decada4498e3257440625dd4c853abc60b140a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
