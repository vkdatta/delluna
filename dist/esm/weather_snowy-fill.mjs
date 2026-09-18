export const name="weather_snowy-fill";
export const id="dl_296a788e20304e748355";
export const url=new URL("../icons/W/weather_snowy-fill.svg?v=ecd5b644991c42b0a426bf57a7366f33362d85c91783d3e600d81a94367f259b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
