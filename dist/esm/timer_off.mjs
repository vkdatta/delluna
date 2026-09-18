export const name="timer_off";
export const id="dl_7b468f15a7a140a38b31";
export const url=new URL("../icons/T/timer_off.svg?v=c8a1bfff241b7882b7929340046e7b42a58f2ba90ecb7880f90ab06c5ac530fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
