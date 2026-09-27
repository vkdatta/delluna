export const name="bike_lane-fill";
export const id="dl_0243adae37d09abe8c5b";
export const url=new URL("../icons/bike_lane-fill.svg?v=63ceadadab135656aaad2bca0f240fef39a15ea55cf8633e4298bfbb1ab9ef11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
