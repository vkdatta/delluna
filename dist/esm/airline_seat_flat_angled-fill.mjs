export const name="airline_seat_flat_angled-fill";
export const id="dl_3378f19319b3426898bf";
export const url=new URL("../icons/A/airline_seat_flat_angled-fill.svg?v=21b4defc8c84ef724cc2d7f56b67ae7ffbfd93ba10583bbd70ecc1e7d7eb9582",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
