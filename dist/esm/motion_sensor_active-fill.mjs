export const name="motion_sensor_active-fill";
export const id="dl_995ecb748851c0dc4560";
export const url=new URL("../icons/motion_sensor_active-fill.svg?v=9231b298e635c329f722a33d7d551b9996ed663682dd58930cf59b02c9f36d01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
