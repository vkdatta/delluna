export const name="explore_nearby-fill";
export const id="dl_de41ec3422a372110a2b";
export const url=new URL("../icons/explore_nearby-fill.svg?v=fe60f416656ada2e09ea8e2e1077fc3c988f2018e4dad26cde69546198517e9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
