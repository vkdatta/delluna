export const name="filter_tilt_shift-fill";
export const id="dl_b4eb471f6975c9833d25";
export const url=new URL("../icons/filter_tilt_shift-fill.svg?v=46624bb4eb7d57a681b01096faf33f59113700da652cbd1c513ce6aa28692693",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
