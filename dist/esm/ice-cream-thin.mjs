export const name="ice-cream-thin";
export const id="dl_733e587f11ef46699f95";
export const url=new URL("../icons/ice-cream-thin.svg?v=0db44da85a2726dafe1f33cbc0648c845dae7136407f50ad218a13130dd23636",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
