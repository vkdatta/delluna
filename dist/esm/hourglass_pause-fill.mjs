export const name="hourglass_pause-fill";
export const id="dl_708a7483b13c8eceb24d";
export const url=new URL("../icons/hourglass_pause-fill.svg?v=188feefc8b4650083af646458909a3abc66ed3cf8d58c4f1bcd145e89e516c4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
