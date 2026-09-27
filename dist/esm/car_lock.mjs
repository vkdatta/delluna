export const name="car_lock";
export const id="dl_2d037a28227aae622d1a";
export const url=new URL("../icons/car_lock.svg?v=39f1e9344c3a8302653a39d376f6428fa9a7cf929b060f924448968b6d885114",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
