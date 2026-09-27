export const name="motion_mode-fill";
export const id="dl_422fb7cf4b0c64119c14";
export const url=new URL("../icons/motion_mode-fill.svg?v=06b5b272c74baf88687758a261a05271cd5e05a6091c0be485c352437093aed9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
