export const name="system_update_alt-fill";
export const id="dl_8d00b7d06ad948648bc1";
export const url=new URL("../icons/system_update_alt-fill.svg?v=b44d833ff46725d0092b9f4468693792c8da9743064eb5078f03fef287f4c4c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
