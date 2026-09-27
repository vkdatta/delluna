export const name="calendar-heart-fill";
export const id="dl_20ec28df513344859e32";
export const url=new URL("../icons/calendar-heart-fill.svg?v=3baa23a9464d9523788b1fa9bb59dcfff764709894555efadb5d08011c7b2a7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
