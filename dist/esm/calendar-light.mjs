export const name="calendar-light";
export const id="dl_1d1550866bdb4ca5966e";
export const url=new URL("../icons/calendar-light.svg?v=510795b02fe2ca50c79af0212b4b97dbfabaaea52f110a4b47513bfa7ee92405",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
