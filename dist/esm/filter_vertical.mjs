export const name="filter_vertical";
export const id="dl_07164c89299652ef5489";
export const url=new URL("../icons/filter_vertical.svg?v=81c8d9e727af90d3197e5505651abbd7f48b2f588587baad2183e0c91a93619e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
