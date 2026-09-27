export const name="flights_and_hotels-fill";
export const id="dl_4a5d442e02aa097bd783";
export const url=new URL("../icons/flights_and_hotels-fill.svg?v=ace6dea1052cba0267edcca0e418ab7e986b84838b70253ea746f190acdaa3c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
