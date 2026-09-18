export const name="nest_farsight_dual-fill";
export const id="dl_3d66928251d544efbe50";
export const url=new URL("../icons/nest_farsight_dual-fill.svg?v=8447b4485b6ca5383d4e9c302be83e70671c6f2e2b86091fc0083929abd64216",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
