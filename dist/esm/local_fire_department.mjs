export const name="local_fire_department";
export const id="dl_6113bb84e4f646908129";
export const url=new URL("../icons/L/local_fire_department.svg?v=2573992d380fdb544ebe7ba350110dc33443747a65b9bbd2f5dd4a4d92675973",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
