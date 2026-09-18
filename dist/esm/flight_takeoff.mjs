export const name="flight_takeoff";
export const id="dl_0b81f62923334882be1e";
export const url=new URL("../icons/flight_takeoff.svg?v=9a2417ea876de63a04327804fd32bfb4c2a744687c42588cb5b3d852d525ce92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
