export const name="calendar-check";
export const id="dl_368550e72cb04fa9babe";
export const url=new URL("../icons/calendar-check.svg?v=a1da9fb3d77b79ac25d063640c649927cc465ba754e877a8087e5eaeb6523bcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
