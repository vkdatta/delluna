export const name="food_bank";
export const id="dl_bdbef40b44eb2b003218";
export const url=new URL("../icons/food_bank.svg?v=002c2e61fde86ba3282f41ef75899268f11ba26ef674adfe4c6bef9f8d8d9530",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
