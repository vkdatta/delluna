export const name="currency-eur-bold";
export const id="dl_689a196d792646dcad59";
export const url=new URL("../icons/currency-eur-bold.svg?v=feae0d27ff0352473aceddbea40cf1bf22d53f2da18af2458e1765a7171c4e9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
