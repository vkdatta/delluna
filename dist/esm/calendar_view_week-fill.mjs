export const name="calendar_view_week-fill";
export const id="dl_36341564a79b9bad306c";
export const url=new URL("../icons/calendar_view_week-fill.svg?v=2fcfd9da7b8e419d2c9d69664253ee12fbd6842ff15686b33962d009d7de76cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
