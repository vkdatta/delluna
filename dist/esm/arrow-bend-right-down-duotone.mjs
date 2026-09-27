export const name="arrow-bend-right-down-duotone";
export const id="dl_868319f42dba424d963e";
export const url=new URL("../icons/arrow-bend-right-down-duotone.svg?v=91bfc06ea682060a6269fc966147a53cdd7bc8adc0e16cb986976eb85edd9b69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
