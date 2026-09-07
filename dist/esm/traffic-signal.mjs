export const name="traffic-signal";
export const id="dl_e6ddda6d4c384828af04";
export const url=new URL("../icons/T/traffic-signal.svg?v=44982fb6086009f97a4f3a77d241b2fcf0b6e7b27a893627fa20747f0acef097",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
