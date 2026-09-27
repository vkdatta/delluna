export const name="sensor_door";
export const id="dl_4254c473b06f5a3d5257";
export const url=new URL("../icons/sensor_door.svg?v=db4aea6dcd1c5e3f0e6516d7a5eea82e6b186c93359fd820b7727ebc40a6a485",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
