export const name="currency-gbp-light";
export const id="dl_3eeb953d14da4bb8993f";
export const url=new URL("../icons/currency-gbp-light.svg?v=859657e6329e875c0cca68663cf12a3960feb86be729db73ea04d8e3b9253a7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
