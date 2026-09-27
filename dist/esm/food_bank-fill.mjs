export const name="food_bank-fill";
export const id="dl_f01f073165720cb092dd";
export const url=new URL("../icons/food_bank-fill.svg?v=dc3f692a046654f1f91d94a94c8ac4607a41f26ce2f324a989dedabbab68d39d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
