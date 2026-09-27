export const name="signal_wifi_off";
export const id="dl_07e70f9d71eed7bb5118";
export const url=new URL("../icons/signal_wifi_off.svg?v=d190c3febe09d8233a09900d98cfed2de8f580d999ea3f9adc677b7c9ae288d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
