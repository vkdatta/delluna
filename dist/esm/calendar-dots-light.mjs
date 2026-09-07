export const name="calendar-dots-light";
export const id="dl_7fd0233a125645dda89e";
export const url=new URL("../icons/calendar-dots-light.svg?v=73d5f0bfd4c838bbd10fc70b6c88e035810bf6f5d34a2c8a9afce9832e00f889",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
