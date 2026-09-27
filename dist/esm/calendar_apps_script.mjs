export const name="calendar_apps_script";
export const id="dl_6dc77f98f511d4f516fb";
export const url=new URL("../icons/calendar_apps_script.svg?v=fb0825c016581c9f583be22a6997b5ca4df174bd5cbe0a1c077cde3dbdd1b8b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
