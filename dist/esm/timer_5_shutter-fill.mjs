export const name="timer_5_shutter-fill";
export const id="dl_96313bc99da3948c6610";
export const url=new URL("../icons/timer_5_shutter-fill.svg?v=c38608f3e3286ff6ca7437f408a8b5aa4f9521e1118be5a21930d026013c7b03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
