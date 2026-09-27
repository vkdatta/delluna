export const name="airline_seat_legroom_normal-fill";
export const id="dl_9a1d8ebe81d8814c083c";
export const url=new URL("../icons/airline_seat_legroom_normal-fill.svg?v=eadaaf2c6dfd95479f4215cf5918e240925e18cb5924a07a8045a29af2fde0d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
