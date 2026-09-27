export const name="nest_farsight_heat-fill";
export const id="dl_6bb13285b9abf9941709";
export const url=new URL("../icons/nest_farsight_heat-fill.svg?v=eefd22e7c2c16d3dba25770760ecf083c18d3d96a1107f777b6afb79098353b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
