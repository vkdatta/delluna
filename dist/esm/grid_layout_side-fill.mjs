export const name="grid_layout_side-fill";
export const id="dl_5a76862a73f64f509fc4";
export const url=new URL("../icons/grid_layout_side-fill.svg?v=3e394769896c278cdfece310c3f2164f81daa8b3da19682722eeee36437bb183",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
