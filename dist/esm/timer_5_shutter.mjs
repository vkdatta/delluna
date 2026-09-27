export const name="timer_5_shutter";
export const id="dl_5805502412c5b63f7201";
export const url=new URL("../icons/timer_5_shutter.svg?v=7319f18310b9d6b90c9d2ee80856c7281944fc77792aa319ff1771f179f8bdea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
