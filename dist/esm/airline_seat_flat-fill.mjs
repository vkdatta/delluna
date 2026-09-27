export const name="airline_seat_flat-fill";
export const id="dl_4d5ef56889bc43daf853";
export const url=new URL("../icons/airline_seat_flat-fill.svg?v=3769a12fee14daf25af468c5b84d7100db988facd954f8994bd99f1d055bfdef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
