export const name="drop-half-bottom";
export const id="dl_16b598fc404247009192";
export const url=new URL("../icons/drop-half-bottom.svg?v=37a9b8fd3a63246775fba2b30e41d3e93ef030a2ddf5563ca13b273e8b6b14f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
