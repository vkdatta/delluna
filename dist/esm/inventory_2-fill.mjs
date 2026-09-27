export const name="inventory_2-fill";
export const id="dl_00fbd3837483190f8db5";
export const url=new URL("../icons/inventory_2-fill.svg?v=c545d5c037f02510da7e5a8338c4c0701bf0df0049786e9c3bde715cd57d6766",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
