export const name="filter_none-fill";
export const id="dl_25bcb74a747322b8baa5";
export const url=new URL("../icons/filter_none-fill.svg?v=13e5101598b6bcd6d6bf649ec391f596a335cc0077fc2fb5e1d80091c5ad7384",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
