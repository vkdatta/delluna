export const name="nest_remote_comfort_sensor";
export const id="dl_4920fed088ad16d255b9";
export const url=new URL("../icons/nest_remote_comfort_sensor.svg?v=ae5887ca6633a53981af361b45a2432e8dd625e3e8325496f9e7cdab9798f56e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
