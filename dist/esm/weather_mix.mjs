export const name="weather_mix";
export const id="dl_ef54b1c2061432f94f60";
export const url=new URL("../icons/weather_mix.svg?v=be5ed805276fbddab57fbb9f8ba5530a4e745681a9a57cddc32151255f67229a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
