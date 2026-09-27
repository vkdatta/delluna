export const name="badge_critical_battery-fill";
export const id="dl_abead85828228bab0cfc";
export const url=new URL("../icons/badge_critical_battery-fill.svg?v=492d9cbdb01c21042a370d35ee875c85ff811b6e4b00e4fa0fce49942fea2ae6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
