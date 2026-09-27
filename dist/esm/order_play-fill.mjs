export const name="order_play-fill";
export const id="dl_a21039908cd6ffc4f441";
export const url=new URL("../icons/order_play-fill.svg?v=961efa01f8eae0d0367e3d0c4c93b94c9a9391c8716b083656f54284a61e21c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
