export const name="speed_4-fill";
export const id="dl_14cb9102b6d84c5ea212";
export const url=new URL("../icons/speed_4-fill.svg?v=2d47924cd4f81064e2f92b1f4b909a731b13c5720ae14f780c1c0261556213cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
