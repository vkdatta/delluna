export const name="timer-fill";
export const id="dl_51a158343a2de7fa4e87";
export const url=new URL("../icons/timer-fill.svg?v=eb81247a8924a73837cbfd429169c06abae971f393505d35e32b1af8272abd8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
