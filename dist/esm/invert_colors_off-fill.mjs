export const name="invert_colors_off-fill";
export const id="dl_95f925a1d7dabde5e5d2";
export const url=new URL("../icons/invert_colors_off-fill.svg?v=ec9548e2724380a2e3fd25ac2009b5c560f3aed376d864aa6ae85277be4a7ac2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
