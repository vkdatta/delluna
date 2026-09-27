export const name="slab_serif-fill";
export const id="dl_c48422357861818a8faa";
export const url=new URL("../icons/slab_serif-fill.svg?v=da0176111da61cafcc55316b8710c9e8d2139944bd845340d8167b02877b5525",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
