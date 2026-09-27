export const name="calendar-dot-fill";
export const id="dl_ae34a40528f54a94a924";
export const url=new URL("../icons/calendar-dot-fill.svg?v=1066d6a4178fb3ac5f9543f964718affae28a955cc818354af1d3e1fca456344",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
