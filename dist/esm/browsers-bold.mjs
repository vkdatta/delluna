export const name="browsers-bold";
export const id="dl_e3d59ffb033c43b38501";
export const url=new URL("../icons/browsers-bold.svg?v=c1fbd83cb77f8c55bf62a80863a3db78a1c47ae57c0629d6265ccde85ea4e739",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
