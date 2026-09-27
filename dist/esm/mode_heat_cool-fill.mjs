export const name="mode_heat_cool-fill";
export const id="dl_c9d70e0b6fce8bf77bbb";
export const url=new URL("../icons/mode_heat_cool-fill.svg?v=64bc73076eebaafdec8150d21f1d95bbd91b2fdb08d918f1829237c11a044df2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
