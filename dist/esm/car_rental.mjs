export const name="car_rental";
export const id="dl_8fed6c9ace4ca988282d";
export const url=new URL("../icons/car_rental.svg?v=1e4d40cfd2779eaaee31ace2f4e0c4755071d890067c45786f5cdfddc1e9f014",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
