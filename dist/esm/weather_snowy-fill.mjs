export const name="weather_snowy-fill";
export const id="dl_05b347c60b42a0f50d82";
export const url=new URL("../icons/weather_snowy-fill.svg?v=a6d8b58c25a38ce111476357ce0eb119aa47c58e59d858f475b376f3af5ece3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
