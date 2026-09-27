export const name="uppercase-fill";
export const id="dl_91b6693ed72d4102c7f4";
export const url=new URL("../icons/uppercase-fill.svg?v=1276c97c2b2a1444535d235e4338f4af16b2e253e8358a3aa25c91042a632cfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
