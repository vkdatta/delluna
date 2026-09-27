export const name="weather_mix-fill";
export const id="dl_e71731b646bc45fa01ec";
export const url=new URL("../icons/weather_mix-fill.svg?v=1e1ec0516a2e2bf8124e96f1b787a2e60943e7d97cdf4fbd2d6469e8cc88ea05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
