export const name="triangle-thin";
export const id="dl_f03757a1bfa243588b09";
export const url=new URL("../icons/T/triangle-thin.svg?v=b9bcd95b1037b9927fac5799d35d8d1ae8cbda567ad6f119adedbfa9e0d80c97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
