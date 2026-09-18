export const name="calendar_apps_script-fill";
export const id="dl_5ed97f98a35b48d49d57";
export const url=new URL("../icons/calendar_apps_script-fill.svg?v=20c527946da8e0af4b39368493d1d1525cf9dcb9656bffa7a3d7d4ddc0f9d244",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
