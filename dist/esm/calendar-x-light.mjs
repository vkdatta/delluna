export const name="calendar-x-light";
export const id="dl_fa8bee55194a47c28c62";
export const url=new URL("../icons/calendar-x-light.svg?v=45ff64377471b1a85ada2367c7474b5e4f4a10b2240067776602793c31263b8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
