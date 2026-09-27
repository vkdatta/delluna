export const name="calendar_meal";
export const id="dl_7c0fbc2a3fcd5ecd9357";
export const url=new URL("../icons/calendar_meal.svg?v=dd3e166bc3b8a2c62fab9b771afd68329617ca5f6a9d9e9ab9faf3195ca2268c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
