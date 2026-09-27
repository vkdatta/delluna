export const name="arrow_upward";
export const id="dl_ae21119adeacd0f03558";
export const url=new URL("../icons/material_symbols/arrow_upward.svg?v=8c19f0dae81b06cb0f83755d71cda7b8ad9fc203aab8a98ea2e8ae4951925416",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
