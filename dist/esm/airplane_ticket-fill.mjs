export const name="airplane_ticket-fill";
export const id="dl_506600774caf06eaa75a";
export const url=new URL("../icons/airplane_ticket-fill.svg?v=7a700980a44ad64e8b9d91c67a93b7ecae0bb2753dffb2960530606eafde049d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
