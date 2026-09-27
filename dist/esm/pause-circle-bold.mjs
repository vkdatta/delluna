export const name="pause-circle-bold";
export const id="dl_db455caf8fce432caef1";
export const url=new URL("../icons/pause-circle-bold.svg?v=61b3a52e239bd90daf2b099a478792fd0ef0afb799c3d5d4483ffd046e37ad09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
