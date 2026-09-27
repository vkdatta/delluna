export const name="calendar-heart-light";
export const id="dl_2a6763c1b7b24106bf86";
export const url=new URL("../icons/calendar-heart-light.svg?v=f4de3fca99792fb9a25906a479944f7ae74e2dab418b0204d205cb7f2b21d19a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
