export const name="cloud-fog-thin";
export const id="dl_efbc83d5d8d34fa6acbb";
export const url=new URL("../icons/cloud-fog-thin.svg?v=3d323d1dbd0437370e8c8574dbddfb1934e6f87269f391169c620a3287cfad55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
