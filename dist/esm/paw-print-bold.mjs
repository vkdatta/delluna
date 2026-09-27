export const name="paw-print-bold";
export const id="dl_a701a8d6207f4d678c31";
export const url=new URL("../icons/paw-print-bold.svg?v=2ae99894ae33ed2b9514271508ac4e36e21b2846999f12083efed091800cdd8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
