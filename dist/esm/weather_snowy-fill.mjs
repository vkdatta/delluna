export const name="weather_snowy-fill";
export const id="dl_eeabee99a07c3aeae63b";
export const url=new URL("../icons/weather_snowy-fill.svg?v=b98a6ebc2e8c38b76d10f2a50e947d42f82d40b7526bbb6fdad4b4eedf0beda8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
