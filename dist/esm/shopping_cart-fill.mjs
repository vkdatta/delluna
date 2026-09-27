export const name="shopping_cart-fill";
export const id="dl_bfa81143325e7463d3fd";
export const url=new URL("../icons/shopping_cart-fill.svg?v=4e3f74589fb06ad7173a45c6b6cfb2c03871a58a6071858e822adb4c9e1006d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
