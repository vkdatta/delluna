export const name="thermometer-sun";
export const id="dl_0da0a292502b4b2abbc6";
export const url=new URL("../icons/thermometer-sun.svg?v=dc7d0ad03ff14aa94b1ce8408352f34adbf59e1e269347182e51b673429e3338",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
