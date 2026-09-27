export const name="trail_length_medium-fill";
export const id="dl_4ef342fb0fe39d688c89";
export const url=new URL("../icons/trail_length_medium-fill.svg?v=c2698c9600a12f836f3d15debd8c1a8e0b12ef819d68d49d21ca99a4fc78d0b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
