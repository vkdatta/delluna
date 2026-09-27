export const name="car_lock";
export const id="dl_4fa4ce5ec5654f9cdd10";
export const url=new URL("../icons/car_lock.svg?v=38d28eba3a0f29ffa3d7c04a19cfd839c445898b325431de2b39a17457aac0b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
