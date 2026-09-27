export const name="car-battery-thin";
export const id="dl_3da5ed4471fd4c4a9c25";
export const url=new URL("../icons/car-battery-thin.svg?v=55b63f87acf0fbe76288c7b6ef05595e8520b9233c24ce5fbf2d0d15e293da1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
