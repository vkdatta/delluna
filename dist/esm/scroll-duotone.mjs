export const name="scroll-duotone";
export const id="dl_60397feb3573c6575a15";
export const url=new URL("../icons/scroll-duotone.svg?v=9a33a1b60a2db9345445fb2ade88c910b05cd0a3f8a9aef49fcd4efd737e0609",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
