export const name="parent_child_dining-fill";
export const id="dl_7a6e6f653940b3049996";
export const url=new URL("../icons/parent_child_dining-fill.svg?v=0f6674c679d3e2dd411c92a9a9cbcf9d06d2db1b778a15e058c3dae638a4e730",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
