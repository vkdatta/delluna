export const name="receipt_long";
export const id="dl_135aee988b3c41159674";
export const url=new URL("../icons/R/receipt_long.svg?v=7a25c637e9092187007863d2b56020ee5ab8f86fadeb6d7ddb4d4fed20b4acf3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
