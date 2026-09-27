export const name="lucid_3-shopping-cart-minus";
export const id="dl_11d796659e6648228556";
export const url=new URL("../icons/lucid_3-shopping-cart-minus.svg?v=b796411b0e719c0166bfcc99579d89da4f3ea1f5ab8caf92c28c1e518a85697d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
