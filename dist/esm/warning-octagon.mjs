export const name="warning-octagon";
export const id="dl_897e10621d3a3a259748";
export const url=new URL("../icons/warning-octagon.svg?v=47db99799b11ee693baa8437f3cd1122f844b2dc28ec8abaafc3ca572cb9c35a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
