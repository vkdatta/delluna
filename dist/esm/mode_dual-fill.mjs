export const name="mode_dual-fill";
export const id="dl_e94ff40b137ad8b7d424";
export const url=new URL("../icons/mode_dual-fill.svg?v=e64a02caa2beebfc3aeed33ce6d52adbb84d392e3a5bff3eb3d13607ae8c6d86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
