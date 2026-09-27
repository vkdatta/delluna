export const name="data_thresholding-fill";
export const id="dl_76e86714640465c1dfef";
export const url=new URL("../icons/data_thresholding-fill.svg?v=ed4377aae4ff4b8cf597652f739a9fc2ccdd505e6143a2bfeca7d9839d8c7a81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
