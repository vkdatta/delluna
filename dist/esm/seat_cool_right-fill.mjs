export const name="seat_cool_right-fill";
export const id="dl_901c0eeac33f627aa992";
export const url=new URL("../icons/seat_cool_right-fill.svg?v=92d653adeea5577e5a23550134f2c6971986ce75272c3f568223e42df4d45fe1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
