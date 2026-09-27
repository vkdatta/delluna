export const name="sensors_krx_off";
export const id="dl_a6a0334e9815bbe474d1";
export const url=new URL("../icons/sensors_krx_off.svg?v=24f518622dd6b17e12a527b7bb420d23137c8ff7f3d0ccaa7fbd06bd24e47023",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
