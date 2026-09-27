export const name="timer_5_shutter";
export const id="dl_84651b6746d773382be1";
export const url=new URL("../icons/timer_5_shutter.svg?v=77861e3e21075c122d744a0d369e1bf08e52531c5f4ea7902f57c301fbc8410d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
