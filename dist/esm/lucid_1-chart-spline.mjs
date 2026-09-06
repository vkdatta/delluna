export const name="lucid_1-chart-spline";
export const id="dl_f4a381a364224177bd93";
export const url=new URL("../icons/lucid_1-chart-spline.svg?v=3ac18b7b897ed5ef8a6613454cd5061e13716835f16914ae3526184f49438bad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
