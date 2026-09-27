export const name="flight";
export const id="dl_a9ec649ae4c3d46e5af3";
export const url=new URL("../icons/flight.svg?v=4bd6d61fc436c8841bfa037e0b89d6741b656c5583bfc67190a21910872bc247",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
