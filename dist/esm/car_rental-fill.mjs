export const name="car_rental-fill";
export const id="dl_3573378c214842799e87";
export const url=new URL("../icons/car_rental-fill.svg?v=7bfdf944fc65f68b7a745eb15f1d3612cd365b02b3a732da83e820f84d0a502c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
