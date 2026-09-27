export const name="lucid_3-shopping-cart-minus";
export const id="dl_11d796659e6648228556";
export const url=new URL("../icons/lucid_3-shopping-cart-minus.svg?v=f5ac8937a8837c3d0d116d0664cccb841908318cc3554db4426f798f2c63e3fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
