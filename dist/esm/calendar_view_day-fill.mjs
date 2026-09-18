export const name="calendar_view_day-fill";
export const id="dl_63564bc51dbc4defbfd3";
export const url=new URL("../icons/calendar_view_day-fill.svg?v=0e46b3551215cbbafac970a7c6263dcbc11e517881b93890cec38f96f1e603f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
