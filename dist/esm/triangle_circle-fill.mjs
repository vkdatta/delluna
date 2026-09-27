export const name="triangle_circle-fill";
export const id="dl_8ba8e58a1780b8115f54";
export const url=new URL("../icons/triangle_circle-fill.svg?v=a9ee40e09408a51b44db91f61bb0ad5d1853a4304573c6434e3eea8bd404ff9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
