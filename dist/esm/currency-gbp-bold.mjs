export const name="currency-gbp-bold";
export const id="dl_5d261030fb5f4489ac6a";
export const url=new URL("../icons/currency-gbp-bold.svg?v=6c35be974f651211a8884d42be055588930adb83ab4b4beb925e714fca6f2fe5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
