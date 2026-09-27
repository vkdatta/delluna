export const name="lucid_1-chart-spline";
export const id="dl_f4a381a364224177bd93";
export const url=new URL("../icons/lucid_1-chart-spline.svg?v=a9f3d1513fc4ad755a3c903dce3253045a814c9a102db55e885b46f73e6269a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
