export const name="weather_snowy";
export const id="dl_f88ce27e670c8186acde";
export const url=new URL("../icons/weather_snowy.svg?v=ff0a3cf9859e14b8c29baa5c1b91ae835031473273d767b8aabdd65b7f3bffba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
