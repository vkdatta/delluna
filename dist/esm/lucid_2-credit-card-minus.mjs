export const name="lucid_2-credit-card-minus";
export const id="dl_eb975d6f49d14ad19096";
export const url=new URL("../icons/lucid_2-credit-card-minus.svg?v=3e695553589398a05337fe503e0f34915ea0bc9e3d1bcd61047cb91da9874aec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
