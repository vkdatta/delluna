export const name="receipt_long_off-fill";
export const id="dl_6f1c33e102ea477ea8c1";
export const url=new URL("../icons/R/receipt_long_off-fill.svg?v=05e7b7ee597625f3eddce43bd56057544341232475e465be72c25d02088255b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
