export const name="thermometer-hot-fill";
export const id="dl_29c858ffdf433908b9da";
export const url=new URL("../icons/thermometer-hot-fill.svg?v=b9f0582b6b647b4df82a7e8257f79204f038d1b363ba28f0e5c3b8f239640a04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
