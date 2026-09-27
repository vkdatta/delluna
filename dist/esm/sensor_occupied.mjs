export const name="sensor_occupied";
export const id="dl_8fe36c9bc2afaef73152";
export const url=new URL("../icons/sensor_occupied.svg?v=2dcf38750a4c204c56b8356167007d098368265436aafa56e5c1977c8601e112",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
