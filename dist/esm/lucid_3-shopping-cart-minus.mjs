export const name="lucid_3-shopping-cart-minus";
export const id="dl_11d796659e6648228556";
export const url=new URL("../icons/lucid_3-shopping-cart-minus.svg?v=f0b6f8fa612341bf1103b5d9d77d8b6fa83db05e7721d1420d622f3508310259",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
