export const name="flights_and_hotels-fill";
export const id="dl_fa9593a192c54adbb891";
export const url=new URL("../icons/F/flights_and_hotels-fill.svg?v=ace6dea1052cba0267edcca0e418ab7e986b84838b70253ea746f190acdaa3c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
