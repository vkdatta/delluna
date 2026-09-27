export const name="shopping_cart_off-fill";
export const id="dl_0e5717862644095463a8";
export const url=new URL("../icons/shopping_cart_off-fill.svg?v=55ccb5a264251f0f015eb97f7457ac98cde629d3d92b54293b43f387214ac8f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
