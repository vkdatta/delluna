export const name="airline_seat_flat_angled";
export const id="dl_e4772658a21d48b28cf2";
export const url=new URL("../icons/A/airline_seat_flat_angled.svg?v=edca0bb61d542dc70781f1d943d52c34f0ae4d6048e06a4d5a3cd40f8c31d2dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
