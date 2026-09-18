export const name="car_mirror_heat";
export const id="dl_9a0aa312fc24452180dc";
export const url=new URL("../icons/car_mirror_heat.svg?v=3a511784b27fcfce9457023bf06104345c806d9b90be68ca6f407dbae695c7cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
