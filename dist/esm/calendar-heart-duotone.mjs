export const name="calendar-heart-duotone";
export const id="dl_934962d7985545649b63";
export const url=new URL("../icons/calendar-heart-duotone.svg?v=fb0e02d4ef6f155e6909dd32a6cfdd3b777365bbf14fb7eab174da6422f2460b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
