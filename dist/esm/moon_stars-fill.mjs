export const name="moon_stars-fill";
export const id="dl_3d1c43055ecbbcb50664";
export const url=new URL("../icons/moon_stars-fill.svg?v=2d64f9f546159525135e8d930ff5125cd2950885e8a20e087787b3c1a207ef2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
