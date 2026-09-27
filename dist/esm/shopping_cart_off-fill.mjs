export const name="shopping_cart_off-fill";
export const id="dl_d82a9a82be7d4576b89d";
export const url=new URL("../icons/shopping_cart_off-fill.svg?v=62fe2d9c74fc4eb937a78f7a95a8ab6bf42a79f1bdad7767584ca0540ae06e51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
