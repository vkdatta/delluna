export const name="thermostat-fill";
export const id="dl_4a9dcbf54078d1023bf1";
export const url=new URL("../icons/thermostat-fill.svg?v=3bad9ea335be5a3ed52e2264d1b793fc99af62dfee72f23d19d024c10e7ccf0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
