export const name="report_off-fill";
export const id="dl_3c58bdee89fa0b9cb277";
export const url=new URL("../icons/report_off-fill.svg?v=58439b26736e1c66007e6517e68290d049b1bb14877047e877bb7e0e09a9bc4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
