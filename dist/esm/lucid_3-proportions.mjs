export const name="lucid_3-proportions";
export const id="dl_c7d97a87897f430eb2c1";
export const url=new URL("../icons/lucid_3-proportions.svg?v=103b2fb6106403d2020ea0d432a688975f88ec5e00a07ccb850616f12ea181e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
