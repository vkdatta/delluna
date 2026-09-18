export const name="mode_fan_off";
export const id="dl_edf061ed24bd4ed5ae16";
export const url=new URL("../icons/mode_fan_off.svg?v=80e7d72482994bb991c300890350912e00a74f586a99f61fcf10dcd0c26f91e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
