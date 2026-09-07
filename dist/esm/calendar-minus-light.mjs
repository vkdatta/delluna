export const name="calendar-minus-light";
export const id="dl_97eb804be84b42bf81e8";
export const url=new URL("../icons/calendar-minus-light.svg?v=0c2400fc314725aa4513ed31617243e1e224b28dc63fbc435c685bcafafe7525",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
