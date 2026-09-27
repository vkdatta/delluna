export const name="calendar_check";
export const id="dl_dc50dbdd0fcc8072d59f";
export const url=new URL("../icons/calendar_check.svg?v=1e990c865aa097fa5d15d8eacd37d98ab60b4575fd680c0cc7c696f6b0fc394b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
