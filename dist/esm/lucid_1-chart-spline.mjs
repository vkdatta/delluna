export const name="lucid_1-chart-spline";
export const id="dl_f4a381a364224177bd93";
export const url=new URL("../icons/lucid_1-chart-spline.svg?v=adaf77df89df4187d21f8b930d2cfd099a6df9b0a4d925df770551a5a3d41475",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
