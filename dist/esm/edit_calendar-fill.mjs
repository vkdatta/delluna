export const name="edit_calendar-fill";
export const id="dl_ee066566b7eda7c65d6f";
export const url=new URL("../icons/edit_calendar-fill.svg?v=8f08b544cf9df21016cb56e3d439e4eef37b31ad339101d0124b1471b82d0310",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
