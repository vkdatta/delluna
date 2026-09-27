export const name="airline_seat_flat";
export const id="dl_e81513d2aa3859f98077";
export const url=new URL("../icons/airline_seat_flat.svg?v=865ff775edf12e156b10d9a9f78ffd4f1d764831e9255436c9456898f7e0e4d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
