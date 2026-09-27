export const name="control_point_duplicate";
export const id="dl_b39a276feff74451dc98";
export const url=new URL("../icons/control_point_duplicate.svg?v=b2b7ceea10445fc39c3346ae91a5e2ae11b1b7486103d9fcc89bd168b23d698b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
