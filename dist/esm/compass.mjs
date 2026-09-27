export const name="compass";
export const id="dl_dbe3efeb59d7452780a9";
export const url=new URL("../icons/compass.svg?v=c33da421daf4839cf5747d3d4bb2d04b69971a49a102c17543356927f572688c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
