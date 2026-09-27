export const name="shopping_bag_speed";
export const id="dl_f1af41410d25397ae3ce";
export const url=new URL("../icons/shopping_bag_speed.svg?v=11f50053a1eeb78277ebfd7a13b57705de9b5df103e97e92c5d3dcf6208fc4bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
