export const name="blender-fill";
export const id="dl_c19035c4520fbf03e4cd";
export const url=new URL("../icons/blender-fill.svg?v=4dcd3d36c804b16b689a8da32c059d94b36c0e62835e1fe10428c2006b71c73c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
