export const name="motion_sensor_urgent";
export const id="dl_eb20ce6debc5eed7ddf0";
export const url=new URL("../icons/motion_sensor_urgent.svg?v=3feff2f0991fa7c7fc4e3dde122072282f7fe4315a5c75bf3085ed9feb1d943b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
