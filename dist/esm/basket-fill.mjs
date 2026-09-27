export const name="basket-fill";
export const id="dl_78db43ec672e44cc9d24";
export const url=new URL("../icons/basket-fill.svg?v=edc84fe3dc2a737015f0f51f5d6d0a0b1e05ffa555b4fe0c0a2a4d81833e9e77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
