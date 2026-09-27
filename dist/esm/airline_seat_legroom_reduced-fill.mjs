export const name="airline_seat_legroom_reduced-fill";
export const id="dl_2f8838bea34d4d7d99d4";
export const url=new URL("../icons/airline_seat_legroom_reduced-fill.svg?v=3bc5618db40d5bc48eadc869525b503fe65627b6218c6fdb306b48e898086926",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
