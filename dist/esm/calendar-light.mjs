export const name="calendar-light";
export const id="dl_1d1550866bdb4ca5966e";
export const url=new URL("../icons/calendar-light.svg?v=4f368d6625b0bf0d21fb8ed43bb62827d219b149f41df64a141951613b620216",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
