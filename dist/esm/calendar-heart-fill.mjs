export const name="calendar-heart-fill";
export const id="dl_20ec28df513344859e32";
export const url=new URL("../icons/calendar-heart-fill.svg?v=5bf84ee4a1a5acd37490ba896e98a792547f51bd394b9688f01e926f65f54480",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
