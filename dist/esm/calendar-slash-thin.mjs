export const name="calendar-slash-thin";
export const id="dl_d898f3e32f264df8ae73";
export const url=new URL("../icons/calendar-slash-thin.svg?v=d467e590eb98c11ce7e567490b62c2bdf6d03b86c8ec8a9c467ed085c79a35c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
