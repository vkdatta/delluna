export const name="currency-dollar-light";
export const id="dl_4cf37938cada44f0a25f";
export const url=new URL("../icons/currency-dollar-light.svg?v=c1fb99cb7a06dd59d4be85f042bb5c3fcefeb8d9058591e89355c503f3e06e50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
