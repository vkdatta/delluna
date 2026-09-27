export const name="credit_score";
export const id="dl_29887144a135583014c7";
export const url=new URL("../icons/credit_score.svg?v=f2b98f62eda90b3fa0e768423479df9a73e34b5a44fadd963cac8a41ff0a7160",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
