export const name="table_restaurant-fill";
export const id="dl_ce51c1ea1c78169c07ac";
export const url=new URL("../icons/table_restaurant-fill.svg?v=d0b98f84096bb91a874f9d574434e8d6baee9426b55f7fdddbb307e8500cefc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
