export const name="weather_hail-fill";
export const id="dl_69982be54f79a7b20d2e";
export const url=new URL("../icons/weather_hail-fill.svg?v=92584f8733daa763ec17e5f6e545649c95074d360c9c26d8967b46ca8f17b32f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
