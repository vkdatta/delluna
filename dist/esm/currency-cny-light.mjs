export const name="currency-cny-light";
export const id="dl_89f62209b75d4c609d5e";
export const url=new URL("../icons/currency-cny-light.svg?v=ad576cb3eddcf0c6a4ec5d4c66f21d468e0d549ec3c72cadd94bd091e79cf7f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
