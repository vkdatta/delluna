export const name="thermometer-snowflake";
export const id="dl_e445b60371df43fead84";
export const url=new URL("../icons/thermometer-snowflake.svg?v=c1ceee12c84b91580fc0712454eb5dda2f7bb2bf880ba60042c76cef4abf12da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
