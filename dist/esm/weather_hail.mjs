export const name="weather_hail";
export const id="dl_1d35507a131c4e7fae1c";
export const url=new URL("../icons/weather_hail.svg?v=0eb111d99d835da24d0488c2e8cdb327455b5c60503410d561a67b20f6faf02f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
