export const name="phone-call-duotone";
export const id="dl_a15d4ff84b6d48969c52";
export const url=new URL("../icons/phone-call-duotone.svg?v=3d4a77ab87312c6242818e975e5228505c690efd1e492dd66814b2863d9338c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
