export const name="basket-fill";
export const id="dl_78db43ec672e44cc9d24";
export const url=new URL("../icons/basket-fill.svg?v=eb651801723626afb92071b860c8c4af916f8521607a13632877763a61cb9c51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
