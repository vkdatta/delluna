export const name="timer_5-fill";
export const id="dl_444bfa4024c64383964b";
export const url=new URL("../icons/timer_5-fill.svg?v=d5d30a490cc2441bf8cf76ec4b0e300b3263907885bd380ab7a3632200d5bef9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
