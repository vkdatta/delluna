export const name="calendar_apps_script-fill";
export const id="dl_252c5df00894a2f13810";
export const url=new URL("../icons/calendar_apps_script-fill.svg?v=48cecf0d6d9f97fdd7978346b6c62888df726a8b843ea1b798c9a6ed698004f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
