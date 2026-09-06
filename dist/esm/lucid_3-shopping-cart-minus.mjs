export const name="lucid_3-shopping-cart-minus";
export const id="dl_11d796659e6648228556";
export const url=new URL("../icons/lucid_3-shopping-cart-minus.svg?v=4cbd951cc9ec02daf239294d17fef9664acab5ad068836cfb081b35457269b64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
