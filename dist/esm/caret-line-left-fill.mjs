export const name="caret-line-left-fill";
export const id="dl_c758d2e4ce7949fcba2f";
export const url=new URL("../icons/caret-line-left-fill.svg?v=bf9572db7ebd3d8fa9ee676b4fd23beaed5ff09b617d5f7cc43817cacfc31c1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
