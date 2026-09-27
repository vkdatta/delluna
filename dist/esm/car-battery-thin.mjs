export const name="car-battery-thin";
export const id="dl_3da5ed4471fd4c4a9c25";
export const url=new URL("../icons/car-battery-thin.svg?v=de135c73464ba8d12d3377b236f425451a5aa77a2b5919193ed99e8c2b473fef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
