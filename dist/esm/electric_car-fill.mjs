export const name="electric_car-fill";
export const id="dl_52f386ab2ea24d56b4f1";
export const url=new URL("../icons/electric_car-fill.svg?v=27896087106095be5498fef6166a196b383cca5aada2872c5f780e6a44378224",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
