export const name="grid_3x3_off-fill";
export const id="dl_73c1e1b4d85901e93a46";
export const url=new URL("../icons/grid_3x3_off-fill.svg?v=9376c3b418055329f603e72c663a3af6e3a04c50737a95bb54d064cd3e115363",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
