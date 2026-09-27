export const name="motion_sensor_idle-fill";
export const id="dl_71b11a096d313d055d2b";
export const url=new URL("../icons/motion_sensor_idle-fill.svg?v=1e4b95edf1300fb799a811f2a28b58403a8d5438cea604d3f1fab8ef1ee6f025",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
