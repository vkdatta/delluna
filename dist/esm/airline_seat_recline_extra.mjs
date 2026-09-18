export const name="airline_seat_recline_extra";
export const id="dl_e78f5fc8ae4b44a6ad8a";
export const url=new URL("../icons/airline_seat_recline_extra.svg?v=a0d912f0ce86ce4073b3a2fc03779fd958563fb78f46cfeeff9a90b6a8917003",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
