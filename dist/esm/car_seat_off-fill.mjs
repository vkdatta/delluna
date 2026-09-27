export const name="car_seat_off-fill";
export const id="dl_c365ce9655f8ae90bfc5";
export const url=new URL("../icons/car_seat_off-fill.svg?v=04e6eab74383f4a211a8a79b82d56d1659b2ceb2f1a91389c5c91953d460a2f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
