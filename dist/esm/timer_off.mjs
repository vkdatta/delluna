export const name="timer_off";
export const id="dl_11d2fc344f499da6b82d";
export const url=new URL("../icons/timer_off.svg?v=8fca560280ee41beca67e4a95fd215cd7aecc7e610a5399fa4595b0c2bf6473a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
