export const name="grid_layout_side-fill";
export const id="dl_a5db10c53e2b1897f82e";
export const url=new URL("../icons/grid_layout_side-fill.svg?v=7caeaa9aae7cd9e7007a442eaa63c92fa736506540cd5f34d3d60a872e954406",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
