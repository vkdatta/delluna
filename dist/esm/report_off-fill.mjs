export const name="report_off-fill";
export const id="dl_cba00343387a790bef4b";
export const url=new URL("../icons/report_off-fill.svg?v=6510ba3fb975b3916aef777e618d03b05b551cd65a5bcb55e3e82bf407a61cb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
