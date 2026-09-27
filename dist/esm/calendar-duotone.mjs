export const name="calendar-duotone";
export const id="dl_a782051958c1450f9969";
export const url=new URL("../icons/calendar-duotone.svg?v=9e40df4d78085f4d2492eea0d511f7fec007e1f62be3b886bed42614e88f78be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
