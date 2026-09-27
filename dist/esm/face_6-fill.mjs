export const name="face_6-fill";
export const id="dl_4e134ccb87515ed40c7d";
export const url=new URL("../icons/face_6-fill.svg?v=8aba11f8d995687df75f075862c9529b0b836a7e33cf67eb278cf32e5250da0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
