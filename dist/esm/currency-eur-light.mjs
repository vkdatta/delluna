export const name="currency-eur-light";
export const id="dl_ce217cffc02842b78c94";
export const url=new URL("../icons/currency-eur-light.svg?v=8de17d95e5085327e61b215fd0a3c3cdb0c58a12934dd19cca9464d00e0eb37f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
