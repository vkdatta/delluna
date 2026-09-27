export const name="flights_and_hotels-fill";
export const id="dl_b3276364e081969dc07f";
export const url=new URL("../icons/flights_and_hotels-fill.svg?v=0d6c46fb4eca438b5966480e7be5a3e805db66b374855d41cc981e2499065c90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
