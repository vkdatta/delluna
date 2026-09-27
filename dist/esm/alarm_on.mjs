export const name="alarm_on";
export const id="dl_f3a5fa67a38eff528cf4";
export const url=new URL("../icons/alarm_on.svg?v=a537ee4da43549d32bc931a3c732cfdcd38ad5ae36a425e7a074114d31a16e0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
