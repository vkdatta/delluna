export const name="arrow-bend-left-down-fill";
export const id="dl_73e74e7696f54315a6e9";
export const url=new URL("../icons/arrow-bend-left-down-fill.svg?v=d7193623485c822e08362e5e0d122369cedcb9654c69910230f9f175582008fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
