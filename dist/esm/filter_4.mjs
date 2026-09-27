export const name="filter_4";
export const id="dl_06f15bb6767d6bc64611";
export const url=new URL("../icons/filter_4.svg?v=193cc010529ae0ef9fed06cf32207d79069d9f85d9bb119e99eb586e65381106",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
