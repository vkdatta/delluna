export const name="detector_alarm";
export const id="dl_5185bfb5bc0b33607fa4";
export const url=new URL("../icons/detector_alarm.svg?v=3d01a95cc51086b7dd575c64925ca3529ac12351f1e4c945fbb6fa9a6869957f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
