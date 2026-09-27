export const name="laptop_car-fill";
export const id="dl_e4b335e70da6cba47324";
export const url=new URL("../icons/laptop_car-fill.svg?v=0bb8080763324c93c93271702bd4adc2edbaa0de7beda9b1173151b58f8b2b5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
