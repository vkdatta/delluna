export const name="waveform-thin";
export const id="dl_60a3a8724c684b48a5ec";
export const url=new URL("../icons/W/waveform-thin.svg?v=d7e65eeea429eafaa3f757dd375941f15ac6d9572af3203d6bef5bf8707ec02f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
