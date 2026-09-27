export const name="calendar-dots-light";
export const id="dl_7fd0233a125645dda89e";
export const url=new URL("../icons/calendar-dots-light.svg?v=af0cc9cb3725ae5056dbe2c40a6e3987a5b5e689d046aed95ad3aff750f98cd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
