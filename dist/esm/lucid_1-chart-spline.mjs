export const name="lucid_1-chart-spline";
export const id="dl_f4a381a364224177bd93";
export const url=new URL("../icons/lucid_1-chart-spline.svg?v=b22b08d2de2f6f29ce7274ca3a784b3076ca0dfc0be613e896f2b0001b9e9d78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
