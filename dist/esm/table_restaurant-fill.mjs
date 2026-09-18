export const name="table_restaurant-fill";
export const id="dl_e1fe8444f22640cf872a";
export const url=new URL("../icons/table_restaurant-fill.svg?v=32e3007368ff24400a92aa95d3476a30bb29a84877d4645eef243113bddeb0e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
