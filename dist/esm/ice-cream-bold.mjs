export const name="ice-cream-bold";
export const id="dl_a5db2543bf494a3da6cc";
export const url=new URL("../icons/ice-cream-bold.svg?v=dde01d8c25077636d6a85549ffa07c76f99aa663f05cf053d1407b4a36cebcad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
