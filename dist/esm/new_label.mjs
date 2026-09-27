export const name="new_label";
export const id="dl_d645ca718961f2afb47b";
export const url=new URL("../icons/new_label.svg?v=81347a35dda52d59035da4a6aabdb93149bd8895054fca9e5319de1d3d9ab908",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
