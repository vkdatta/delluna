export const name="perm_contact_calendar-fill";
export const id="dl_ba97ae96d3996a20ecaa";
export const url=new URL("../icons/perm_contact_calendar-fill.svg?v=02c0afc73ee7912dc85e8c5f6156813708b22c3732cc1bf5880e9adebde28776",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
