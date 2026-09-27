export const name="slideshow-fill";
export const id="dl_2f3220df6dfb701b14f2";
export const url=new URL("../icons/slideshow-fill.svg?v=ee73611e4700a6937ddbd290ef9bde25714f95e3d671a96c8425362fcfc43d3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
