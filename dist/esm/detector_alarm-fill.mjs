export const name="detector_alarm-fill";
export const id="dl_eb385cf8ec09a3bff869";
export const url=new URL("../icons/detector_alarm-fill.svg?v=5bddf6ece45f769f76f94e3f146854b96ab13af7e95cce75e9d98a69b5d5a9cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
