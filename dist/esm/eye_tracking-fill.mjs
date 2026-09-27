export const name="eye_tracking-fill";
export const id="dl_31ebc35c4d4898d8e1eb";
export const url=new URL("../icons/eye_tracking-fill.svg?v=9190cf486c671057a898b974218432cb3ab33c2fed14d5001df44b3d35532cbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
