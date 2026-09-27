export const name="airline_seat_flat_angled";
export const id="dl_b58eed2f28d01863a7b0";
export const url=new URL("../icons/airline_seat_flat_angled.svg?v=7dcaf091a26d215a5dcd7cc11a276188fd928c59116add8231bccd7219e03284",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
