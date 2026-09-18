export const name="nest_cam_floodlight";
export const id="dl_a3eb0127209d46b4a8e3";
export const url=new URL("../icons/N/nest_cam_floodlight.svg?v=75668f4b9031c28ff640da4477ecefbab09d01ca77f9e94c15769f0be78f0ff5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
