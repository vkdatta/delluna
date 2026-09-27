export const name="swipe_vertical-fill";
export const id="dl_7e126f7ba0b01e7c5ba4";
export const url=new URL("../icons/swipe_vertical-fill.svg?v=1df0b9cc1e30ac98a71ab95db3d6466f021059508c62f5d3bf7b65a170f8ee59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
