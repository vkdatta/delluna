export const name="calendar_clock";
export const id="dl_b706149acdb578d8f8f5";
export const url=new URL("../icons/calendar_clock.svg?v=a566932eb9cd6da4a17535d91da745dcd0695389309d8e7829e59d8a1743711b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
