export const name="scooter-duotone";
export const id="dl_5f16401798e1419fadb0";
export const url=new URL("../icons/S/scooter-duotone.svg?v=e6d8e4093b4be91adb962931ec19cf47ef910ed3d15e3e207409c9cd13686a50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
