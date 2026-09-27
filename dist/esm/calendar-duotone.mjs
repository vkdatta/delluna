export const name="calendar-duotone";
export const id="dl_a782051958c1450f9969";
export const url=new URL("../icons/calendar-duotone.svg?v=7d23055f147e92320ca45d03c3b2da02dc9e62bc83e892514f657ca0170583ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
