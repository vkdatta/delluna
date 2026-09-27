export const name="holiday_village";
export const id="dl_5daf7eb336521fc52bbf";
export const url=new URL("../icons/holiday_village.svg?v=e315a31757d703b41105baa7bf61d4fa5ca1607cb3ac785a1152774a98d1fc96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
