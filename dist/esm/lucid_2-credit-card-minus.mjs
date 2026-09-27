export const name="lucid_2-credit-card-minus";
export const id="dl_eb975d6f49d14ad19096";
export const url=new URL("../icons/lucid_2-credit-card-minus.svg?v=fe693283a2d9756ed82101a464751f3b5d4ffb6698731cb1d949b6aa3205621c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
