export const name="car-simple-thin";
export const id="dl_5e50963350b841969335";
export const url=new URL("../icons/car-simple-thin.svg?v=2a06673a75c62b8ad480142a1876fd0021f0945d5f57726d81ad18604d65d8d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
