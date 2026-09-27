export const name="nest_eco_leaf-fill";
export const id="dl_5f37dd03b731322b5047";
export const url=new URL("../icons/nest_eco_leaf-fill.svg?v=cbd224dc9720b44496ad0122cc15cf75654acc5a4c46faed1e7a41db1ed7462f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
