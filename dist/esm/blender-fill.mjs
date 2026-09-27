export const name="blender-fill";
export const id="dl_cce07f208b7b52e30e28";
export const url=new URL("../icons/blender-fill.svg?v=7f61d67d3bf4b59b9eb0deb0aea43f3d5f4817150a4c14402a001594b266c1e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
