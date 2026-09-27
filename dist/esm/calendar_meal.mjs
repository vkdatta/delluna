export const name="calendar_meal";
export const id="dl_57e8f11d484c6c4437eb";
export const url=new URL("../icons/calendar_meal.svg?v=6d7e2c5e00cf46d6c819e9eb1aa3c464b49e2c597bee4ac8a9324e8fa7383d6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
