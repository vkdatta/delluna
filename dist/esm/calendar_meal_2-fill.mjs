export const name="calendar_meal_2-fill";
export const id="dl_61075d69d1a28f739944";
export const url=new URL("../icons/calendar_meal_2-fill.svg?v=d9794803c9b5c102df5a6f6bee93aa8f3b67dea247a0439713ce2f33e5c2138d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
