export const name="shapes-fill";
export const id="dl_7bbf5420f808fcff69d3";
export const url=new URL("../icons/shapes-fill.svg?v=0fdf533b1843a93adbb5bb0e0de173f9add38ffc375a8995b8f0e1cb8e75ce96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
