export const name="lucid_2-heart-plus";
export const id="dl_4beff44932b045a9ba30";
export const url=new URL("../icons/lucid_2-heart-plus.svg?v=4298b3634c22a89f729254b686febfb1c2a1381116e639c60efa605d2005a498",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
