export const name="mode_dual-fill";
export const id="dl_4e0c0aff882f41739f81";
export const url=new URL("../icons/M/mode_dual-fill.svg?v=e64a02caa2beebfc3aeed33ce6d52adbb84d392e3a5bff3eb3d13607ae8c6d86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
