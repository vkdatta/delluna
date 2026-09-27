export const name="calendar_apps_script";
export const id="dl_f54fa39f929933767e28";
export const url=new URL("../icons/calendar_apps_script.svg?v=4e2d365ec5f87ea1af0f82aef194efbd1494d7898e56188aa2c4e2034557d9c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
