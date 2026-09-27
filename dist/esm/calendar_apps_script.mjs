export const name="calendar_apps_script";
export const id="dl_4e434fff0bc4bd0e072e";
export const url=new URL("../icons/calendar_apps_script.svg?v=6a369531700eb4cbc5327c99f6d54e1642e93245296c91023154a81b8263c7fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
