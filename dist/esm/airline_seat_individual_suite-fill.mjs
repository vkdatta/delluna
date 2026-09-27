export const name="airline_seat_individual_suite-fill";
export const id="dl_f6fcc1708adc3bd187d8";
export const url=new URL("../icons/airline_seat_individual_suite-fill.svg?v=64089b3850db36bcd83f858cf35e29961d061e8721ce9c7b11b610ea09706eca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
