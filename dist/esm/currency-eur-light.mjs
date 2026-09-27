export const name="currency-eur-light";
export const id="dl_ce217cffc02842b78c94";
export const url=new URL("../icons/currency-eur-light.svg?v=e5171967ffb89a6abb7d590371c7adc1d6aa06b2d42edca28463e38cf14d699b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
