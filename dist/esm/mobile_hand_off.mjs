export const name="mobile_hand_off";
export const id="dl_78ec84b733bd467089b8";
export const url=new URL("../icons/M/mobile_hand_off.svg?v=c9c1bc2993e2b4bc608705883097c3ec8235dd753f0de36c1c1d8ebb11c5ec44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
