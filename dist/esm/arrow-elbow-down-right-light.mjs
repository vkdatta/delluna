export const name="arrow-elbow-down-right-light";
export const id="dl_f62840b01d2f4678b438";
export const url=new URL("../icons/arrow-elbow-down-right-light.svg?v=dd13814280919cd0af6b217d23962e91e2fe82c64effec0a7aad25de60ee7430",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
