export const name="currency-eur-fill";
export const id="dl_8b00ef08adc74989977a";
export const url=new URL("../icons/currency-eur-fill.svg?v=b3bd56860674ec9f1a0c56f7be99078b442bc057c9e9b8370184cef215c59272",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
