export const name="grid_view-fill";
export const id="dl_7283d64133024a75632f";
export const url=new URL("../icons/grid_view-fill.svg?v=e31f4bd67e74910bf7882e1787fa9ca2130bbf5d51648aafa71653c64bf292ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
