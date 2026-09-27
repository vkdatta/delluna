export const name="timer_play-fill";
export const id="dl_62a3a69005d7a8b7195e";
export const url=new URL("../icons/timer_play-fill.svg?v=79133563b253f3350a15b3cc7cfda9fd60bdecbeed25e51ae5492f8827f1c9d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
