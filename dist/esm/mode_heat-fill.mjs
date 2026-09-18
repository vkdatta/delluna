export const name="mode_heat-fill";
export const id="dl_23332a66d0e14d3daebc";
export const url=new URL("../icons/mode_heat-fill.svg?v=b85e54a69e22b6af15e8bef60a60dd49a6885e6d977e2615fe420bfe36ea0411",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
