export const name="tile_large-fill";
export const id="dl_66d163498b3423ae160f";
export const url=new URL("../icons/tile_large-fill.svg?v=ff7caf1f58637e4aecb0d7092efc3f19291339e48f6622f0cb8e24192f1aa39d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
