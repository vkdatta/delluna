export const name="text-h-five-bold";
export const id="dl_c136d0ca01384f7db54a";
export const url=new URL("../icons/T/text-h-five-bold.svg?v=50668988861b3c94f09e0ed12d08ef4e6ff59404d8dc98ca19a280985202863d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
