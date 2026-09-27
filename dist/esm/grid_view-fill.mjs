export const name="grid_view-fill";
export const id="dl_eaac81790e1d8313be5b";
export const url=new URL("../icons/grid_view-fill.svg?v=b643176e31e07af55458badd660f559085dfeb97ed4748334c0179370c0a1031",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
