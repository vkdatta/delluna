export const name="alarm_smart_wake-fill";
export const id="dl_24e3d97de5187bbbc438";
export const url=new URL("../icons/alarm_smart_wake-fill.svg?v=c027280b8a3cc51e78ee0c0eea89c2a3a3f5704cbfbb5e4e17cdf9c8b43fb4e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
