export const name="shopping_bag_speed-fill";
export const id="dl_0505344e56d816819ce5";
export const url=new URL("../icons/shopping_bag_speed-fill.svg?v=0df16066a005b3040545ca82127f86dd330e62f43c061d74a6a71f104f141bea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
