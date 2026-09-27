export const name="calendar-check";
export const id="dl_368550e72cb04fa9babe";
export const url=new URL("../icons/calendar-check.svg?v=e60693e27409231f9d88c3ebf90a38b46a5c22ee71d514c285241dcf946c2b0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
