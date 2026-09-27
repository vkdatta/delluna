export const name="airline_seat_individual_suite-fill";
export const id="dl_0338ba246b3f7f48b81e";
export const url=new URL("../icons/airline_seat_individual_suite-fill.svg?v=c48808b8b0f1ab3a6cc78dd9eb7ed48694abcfbf237710ff065d02341c84a03d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
