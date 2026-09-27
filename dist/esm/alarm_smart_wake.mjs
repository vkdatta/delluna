export const name="alarm_smart_wake";
export const id="dl_f0ec41cc966d8621c177";
export const url=new URL("../icons/alarm_smart_wake.svg?v=c55b4ec30ffa4fce0209ffb27346331e3ebaf19e122394ecd557f18eea95dd5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
