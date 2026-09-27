export const name="bar_chart_4_bars-fill";
export const id="dl_168f52928c9e6951b3d1";
export const url=new URL("../icons/bar_chart_4_bars-fill.svg?v=a940001382474b1398a3374f8b62daa21dc4b258eb22680c840ca8ec8fb1ed01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
