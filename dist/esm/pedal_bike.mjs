export const name="pedal_bike";
export const id="dl_286852d87884f74d485f";
export const url=new URL("../icons/pedal_bike.svg?v=d1800d681bd94fb5ed4be2eeb9ea5bdda43aa9de01c3c545f794fb3595616b3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
