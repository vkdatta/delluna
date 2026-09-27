export const name="lucid_2-file-input";
export const id="dl_a07820a6ec3947cf9838";
export const url=new URL("../icons/lucid_2-file-input.svg?v=f918fac3cf35fc787181011d2509c1883c90a9686ec1a0251ff1e0adc5ec9f8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
