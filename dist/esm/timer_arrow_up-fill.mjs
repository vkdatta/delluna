export const name="timer_arrow_up-fill";
export const id="dl_3cf5d0f7063f3d76ebc8";
export const url=new URL("../icons/timer_arrow_up-fill.svg?v=ac5deddf6c0281ebb8cdbf901a0754bb98adcbae993a05c0f2adb97c68b62eef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
