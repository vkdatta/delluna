export const name="view_day";
export const id="dl_9c38df0e4fcb2ceb76fb";
export const url=new URL("../icons/view_day.svg?v=d269690017d45ad95005bcc2ba37453605814b0468fcd7b9780f86d01f47ad6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
