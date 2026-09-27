export const name="calendar-minus-thin";
export const id="dl_dcf417f6f64e4ba5b67f";
export const url=new URL("../icons/calendar-minus-thin.svg?v=5bfd026f59b48d8c765a1eb28d6af589e8aa93f9338fcfef15e156c127525fa2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
