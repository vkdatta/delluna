export const name="bar_chart_off-fill";
export const id="dl_7e77bc3608764dc29982";
export const url=new URL("../icons/bar_chart_off-fill.svg?v=ab83490297c92753afb171444a8e4e455809a56258b7b4ea8947c135d759b92f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
