export const name="mode_heat_off-fill";
export const id="dl_10d59c6b18e99fe082fe";
export const url=new URL("../icons/mode_heat_off-fill.svg?v=cc017df66f99c1b440551a1a0eb76acb0e2a34238a50cad09a10322bb9c8a85b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
