export const name="shopping-cart-simple-fill";
export const id="dl_c532d5f506edb445418e";
export const url=new URL("../icons/shopping-cart-simple-fill.svg?v=d35ae2f3dc8aeef3d4ffa5344b405e9588d476f7748ba1f4dda5877886ed28b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
