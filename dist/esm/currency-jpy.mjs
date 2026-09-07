export const name="currency-jpy";
export const id="dl_465930ca2660477d87cc";
export const url=new URL("../icons/currency-jpy.svg?v=721f5fecae49bf2ca8a1b55751b977e65c5e0d7033b5897188beff3701fe98ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
