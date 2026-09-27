export const name="contrast_square-fill";
export const id="dl_31bd58c1a6eeb0ac51d3";
export const url=new URL("../icons/contrast_square-fill.svg?v=912942a06de0e42b9f950bfa1ae85387eb0174bd6ea99a6eae3a3b2c2d636460",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
