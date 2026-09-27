export const name="dropdown_menu-fill";
export const id="dl_9d9470a7b9fb3938f64c";
export const url=new URL("../icons/dropdown_menu-fill.svg?v=c652072398776782d0265606250ca5192e78c25ef3fba1a72894cc81957f0783",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
