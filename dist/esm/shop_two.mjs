export const name="shop_two";
export const id="dl_67590e09401fbde725d2";
export const url=new URL("../icons/shop_two.svg?v=8554ef7d1cbed8830608e75d6e4e0303e30580a10d286e2eeaa3229c3a383702",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
