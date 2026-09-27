export const name="nest_remote_comfort_sensor-fill";
export const id="dl_e9c35970e52680f4214b";
export const url=new URL("../icons/nest_remote_comfort_sensor-fill.svg?v=bc492751f0a9e68c3a0fe03bfd201a0c13efbffb36741d3daad0006f22ae5f1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
