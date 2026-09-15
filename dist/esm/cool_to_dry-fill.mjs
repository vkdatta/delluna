export const name="cool_to_dry-fill";
export const id="dl_067ba50a493f4f96975e";
export const url=new URL("../icons/C/cool_to_dry-fill.svg?v=f50aab402e225feac4d36886403a1b19eaf74c6a5708308ba08fce4afed6ae91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
