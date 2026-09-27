export const name="box_edit-fill";
export const id="dl_dcff5827ca8b2b545a1d";
export const url=new URL("../icons/box_edit-fill.svg?v=9d01247664c1537013caed0bc91c88b745f3be8fa0ff0546d04bca25474b55b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
