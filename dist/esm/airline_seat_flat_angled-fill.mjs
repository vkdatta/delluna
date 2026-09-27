export const name="airline_seat_flat_angled-fill";
export const id="dl_4ded4e397716ffdcd05e";
export const url=new URL("../icons/airline_seat_flat_angled-fill.svg?v=fb27e0e9c235115f096851472f7e244c83b82729ae27797324a76b6a0073d1fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
