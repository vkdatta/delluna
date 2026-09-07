export const name="shopping-cart-light";
export const id="dl_501e07b1fb9a49c4b588";
export const url=new URL("../icons/S/shopping-cart-light.svg?v=519b7bbad28c686c9de727e7c5bbf6339d2061bc95e51a2ac777cb587f59dbc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
