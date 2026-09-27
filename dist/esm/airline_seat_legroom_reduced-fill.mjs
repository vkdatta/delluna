export const name="airline_seat_legroom_reduced-fill";
export const id="dl_81aaecfd9fa39c01f252";
export const url=new URL("../icons/airline_seat_legroom_reduced-fill.svg?v=e9c8ce05881e9cea0b4666afb9fb2a4215833d37d461751144130efeec3b6afb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
