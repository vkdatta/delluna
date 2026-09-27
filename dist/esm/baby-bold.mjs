export const name="baby-bold";
export const id="dl_2c0755145d5043489800";
export const url=new URL("../icons/baby-bold.svg?v=3350bbe2735d01164918b2932369f780eef3c13996c336f15b5ad01a0499d45e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
