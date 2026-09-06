export const name="barbell-duotone";
export const id="dl_35e2a6c5c7b441809730";
export const url=new URL("../icons/barbell-duotone.svg?v=58d87d273b065f93cf10442dec8e7bdc168e4e5fab76b926a8b9985e8da824da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
