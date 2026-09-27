export const name="clock_arrow_down";
export const id="dl_e99a9c8e60cb66065480";
export const url=new URL("../icons/clock_arrow_down.svg?v=0988a097c605f54e3397e1351ab5088d528fe1a116a79ae57816e846bb35b968",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
