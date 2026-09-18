export const name="transit_ticket-fill";
export const id="dl_735ef47082234a279955";
export const url=new URL("../icons/T/transit_ticket-fill.svg?v=f3021edce75aa3de0e087212f92c74dc91a53f236dd492b5456597c9fd26d33f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
