export const name="fiber_pin-fill";
export const id="dl_2c57e892ce0ee59483c5";
export const url=new URL("../icons/fiber_pin-fill.svg?v=ccbaaaf7ece4c1f0e8478a7fdcfe03b5f9f965995d091ef7530352c57af8b805",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
