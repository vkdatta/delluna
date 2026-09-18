export const name="mobile_wrench";
export const id="dl_e2cebfde58f544eb98cd";
export const url=new URL("../icons/M/mobile_wrench.svg?v=373b58883dc758fd4217cd97cb5f3a8c69f1ab32e7d94f64fc0a499f65ab389f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
