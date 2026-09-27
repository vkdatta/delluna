export const name="dishwasher_gen-fill";
export const id="dl_a6f9f8dfa95d6a6cfb39";
export const url=new URL("../icons/dishwasher_gen-fill.svg?v=58baeedac3c884853872b66b81a442f30088f353a619f991130748bb20512cf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
