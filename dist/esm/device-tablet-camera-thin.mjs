export const name="device-tablet-camera-thin";
export const id="dl_9f60e352a67543879e6d";
export const url=new URL("../icons/device-tablet-camera-thin.svg?v=c62a6f94bb695771fb48f306a0a2185aa265bdcf64d0b8691f7dba46051d3e3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
