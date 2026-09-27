export const name="sensor_door";
export const id="dl_c5762c60d2e669ac3855";
export const url=new URL("../icons/sensor_door.svg?v=96545e1f8e2ee3e9d152054bdc6217e6e3ebbfc580e87326abe4ee034ea92fe6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
