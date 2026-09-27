export const name="avg_time-fill";
export const id="dl_047920759cad41f425a4";
export const url=new URL("../icons/avg_time-fill.svg?v=166793def7f7617429cf51fc8d2538c839fc157fcdbfe2107d353064ac42d9ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
