export const name="calendar_meal";
export const id="dl_c906ca8ca2a2c7177716";
export const url=new URL("../icons/calendar_meal.svg?v=cbe034edc0c06b8eb352790e045402e3e6e4054da55598aec21cc855deec2386",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
