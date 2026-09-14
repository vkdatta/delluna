export const name="airline_seat_legroom_normal-fill";
export const id="dl_adfca1334a254320bbfc";
export const url=new URL("../icons/A/airline_seat_legroom_normal-fill.svg?v=140cb45c6aecdb64cf8103fccc03b4d5f046ebb825d6d82bae3709af338e9570",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
