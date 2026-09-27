export const name="calendar_month-fill";
export const id="dl_f3cc91c1fcebe261d2b8";
export const url=new URL("../icons/calendar_month-fill.svg?v=d782279c2371c38af9a656f6e5095b089933e86ca7a02e3fe1a4039534abd747",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
