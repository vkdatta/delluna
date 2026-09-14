export const name="airline_seat_legroom_extra-fill";
export const id="dl_618502e170634f59a87a";
export const url=new URL("../icons/A/airline_seat_legroom_extra-fill.svg?v=d93e49568a913493b35eaac2bf796b242a36d17c9b62de8ad2c46642450ac422",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
