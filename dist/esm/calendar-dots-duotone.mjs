export const name="calendar-dots-duotone";
export const id="dl_2b491caacc0f4e058959";
export const url=new URL("../icons/calendar-dots-duotone.svg?v=4df73b0825e9f504d47701cad4f4b26fbbf7e66f1093af700712e275cdf79fa8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
