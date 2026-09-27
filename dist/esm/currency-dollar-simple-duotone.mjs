export const name="currency-dollar-simple-duotone";
export const id="dl_55cc32094c004043a59a";
export const url=new URL("../icons/currency-dollar-simple-duotone.svg?v=24abcf607deb835627b1bf13084ff4b69a582fcc1e7455364b07e4da692b2115",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
