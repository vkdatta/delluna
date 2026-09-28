export const name="sensor_door";
export const id="dl_4b13862b4b45c9edc03b";
export const url=new URL("../icons/sensor_door.svg?v=abaac2c1a640e33d73a682f81ef41c6124ceeed7e80df8592584b53f946f13cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
