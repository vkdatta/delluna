export const name="mobile_sensor_hi";
export const id="dl_84f4f7bc99b8c0b341fd";
export const url=new URL("../icons/mobile_sensor_hi.svg?v=64703c472f2cf81572d3f845dea22f3148a7d5d827dacbe955745812d9ef1f7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
