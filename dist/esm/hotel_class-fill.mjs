export const name="hotel_class-fill";
export const id="dl_2e861c6c107166b72f32";
export const url=new URL("../icons/hotel_class-fill.svg?v=0144c2910843f41d458871ebb9a33ae2feab2ba738e819babb1b14cef9f29c02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
