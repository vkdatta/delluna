export const name="shopping_bag_speed-fill";
export const id="dl_b3c30f871df8487ab568";
export const url=new URL("../icons/shopping_bag_speed-fill.svg?v=4e1605d7cd970a0fe26b1b7a42fb6c07c558bdd1c25daab95ba9f0aa30207bdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
