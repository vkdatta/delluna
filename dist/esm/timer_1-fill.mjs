export const name="timer_1-fill";
export const id="dl_e79d646b5ebc4313b19e";
export const url=new URL("../icons/T/timer_1-fill.svg?v=67de46272248de7d5b6f9b2b52bd824331d5e1d8b1cb3d7f64bf1d3d976a1a56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
