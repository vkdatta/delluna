export const name="lucid_2-credit-card-minus";
export const id="dl_eb975d6f49d14ad19096";
export const url=new URL("../icons/lucid_2-credit-card-minus.svg?v=1d1ff32da6f21d755cb179d01ebb8a4031bf12de207420c5eafdd59691b252e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
