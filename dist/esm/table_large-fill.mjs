export const name="table_large-fill";
export const id="dl_8b58288fd18946e0a26b";
export const url=new URL("../icons/table_large-fill.svg?v=2637a6ceb5bdeb52480918a3048c93d2083cfb61a79edd0a1791847ff8cf650e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
