export const name="weather_snowy";
export const id="dl_f9a5242a8f524b86ab53";
export const url=new URL("../icons/W/weather_snowy.svg?v=f78f010c5b0b610aeed0ab1093af95bd7a80308aeca1b929db7fa8d3930be5b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
