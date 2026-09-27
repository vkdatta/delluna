export const name="partly_cloudy_day-fill";
export const id="dl_0578c10aecf9612ff1fc";
export const url=new URL("../icons/partly_cloudy_day-fill.svg?v=a73ff5ee7d3cdb911830bff33b3182fd69fe82e38ba5c7f552271b24b5e0ac95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
