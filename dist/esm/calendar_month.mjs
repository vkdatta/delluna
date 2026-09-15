export const name="calendar_month";
export const id="dl_00c9d61a80db4403809a";
export const url=new URL("../icons/C/calendar_month.svg?v=9bb57747213cf403a7bafa706d3eab57f21ca381bef910737457836b6d2af20a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
