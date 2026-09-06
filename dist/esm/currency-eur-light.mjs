export const name="currency-eur-light";
export const id="dl_ce217cffc02842b78c94";
export const url=new URL("../icons/currency-eur-light.svg?v=338f9a02831af643d201039c791405883ca3b188fc759d0a8524cbf6c9c2f80e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
