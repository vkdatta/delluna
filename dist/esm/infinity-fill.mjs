export const name="infinity-fill";
export const id="dl_b1ddef7fb66346b6863a";
export const url=new URL("../icons/infinity-fill.svg?v=06c2c95c655ea78ecd5a3d00edbfca8364db2907df89eabe3e87b1b62d40b0fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
