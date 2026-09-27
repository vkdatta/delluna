export const name="hourglass_empty-fill";
export const id="dl_c161d1d84b8e399715c3";
export const url=new URL("../icons/hourglass_empty-fill.svg?v=831e0264ae65ff01fcb5a1ed2d2d5668bd639c131fd37e8581d34b330d577890",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
