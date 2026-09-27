export const name="detector_alarm-fill";
export const id="dl_a3f3bc731c3399a6c63f";
export const url=new URL("../icons/detector_alarm-fill.svg?v=e423278bdf0ffefffc0a7e7f5f143f8ed268b964ff76215f1869fa5bbecd9f88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
