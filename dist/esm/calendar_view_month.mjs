export const name="calendar_view_month";
export const id="dl_93dfd894d52fb2514104";
export const url=new URL("../icons/calendar_view_month.svg?v=284bd56e1832818a3bffe1cc6122308e55a5aa3c55a5918cbde18efb3e5eb506",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
