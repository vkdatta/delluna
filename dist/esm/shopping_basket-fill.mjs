export const name="shopping_basket-fill";
export const id="dl_481d22a3ace44f30a1a0";
export const url=new URL("../icons/S/shopping_basket-fill.svg?v=4ab3e5b13fef8a6baf0a0ebb4a945dd059c04ce1fde105122e2c1ee47d9e64b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
