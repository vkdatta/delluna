export const name="currency-eur-bold";
export const id="dl_689a196d792646dcad59";
export const url=new URL("../icons/currency-eur-bold.svg?v=04f433289cfb7c180c8bb0d3c7089c533d303e6041fcb57e48ccc9f5ae64cdf3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
