export const name="calendar-minus-light";
export const id="dl_97eb804be84b42bf81e8";
export const url=new URL("../icons/calendar-minus-light.svg?v=854b59eaf4e046a022f27b966cec2441ffd8d0473025f0765d9a40921d8f8145",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
