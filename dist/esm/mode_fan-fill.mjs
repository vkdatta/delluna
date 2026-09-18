export const name="mode_fan-fill";
export const id="dl_9ba291a9874a47ae9192";
export const url=new URL("../icons/M/mode_fan-fill.svg?v=58f263b52d75317f4202c118eb995558cef4e53f4998a8593ac02cec09fa50ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
