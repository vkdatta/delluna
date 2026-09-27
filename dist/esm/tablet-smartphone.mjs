export const name="tablet-smartphone";
export const id="dl_deab320d1d8f4a4fb8c4";
export const url=new URL("../icons/tablet-smartphone.svg?v=9add07f6085c23c16516043a07037e18913b724d4f950bd6afa99166334a4b23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
