export const name="water_full";
export const id="dl_91d42cc12687f8482c49";
export const url=new URL("../icons/water_full.svg?v=0a2c493a1a50303f31be2878344885355f417a85da11ffb6a4d4effdf9995356",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
