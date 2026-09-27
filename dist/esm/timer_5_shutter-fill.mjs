export const name="timer_5_shutter-fill";
export const id="dl_1459fa410c42dde3e0ea";
export const url=new URL("../icons/timer_5_shutter-fill.svg?v=2e61cbfdab61d447139dc089f738681cfa7ce905de2464c961bb6d6488e3595d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
