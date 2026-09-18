export const name="settop_component-fill";
export const id="dl_ac8f00a71caf475e8957";
export const url=new URL("../icons/S/settop_component-fill.svg?v=54c2c56b1a948ae2613eae36514260498da061ffc26a34d1ada6372d3f7e5491",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
