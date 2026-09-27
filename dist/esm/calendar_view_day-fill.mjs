export const name="calendar_view_day-fill";
export const id="dl_2472b9f7e6abedf18747";
export const url=new URL("../icons/calendar_view_day-fill.svg?v=ef5208d22bfa0e9710cceed4a65f57584f8c1b21895839af910f958e368ac662",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
