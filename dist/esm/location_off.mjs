export const name="location_off";
export const id="dl_886de5b295aeb38929b3";
export const url=new URL("../icons/location_off.svg?v=47cce1f28f90a097d6f502d628876cb8ebeb2c95b54cb8d2e26ea29ad19b2cd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
