export const name="mobile_dock-fill";
export const id="dl_e7f999150781f50ff055";
export const url=new URL("../icons/mobile_dock-fill.svg?v=199c024225207b2e7b5a6a6a917b44613fb369909da92e21e89495a78a726330",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
