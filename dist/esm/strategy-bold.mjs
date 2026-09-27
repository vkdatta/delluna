export const name="strategy-bold";
export const id="dl_e1e10d71de2c795ca340";
export const url=new URL("../icons/strategy-bold.svg?v=322b3516ef0671cdb12b0ba1aa2be8642150e08c7c9fb9688563693cb67d660b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
