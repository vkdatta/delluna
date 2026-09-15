export const name="eraser_size_3-fill";
export const id="dl_7f2ce30ef5214b34ae84";
export const url=new URL("../icons/E/eraser_size_3-fill.svg?v=8990ab3e13d63ec45640fa2f7fb5ebcd68761e15372da547c8b8701d8e490a9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
