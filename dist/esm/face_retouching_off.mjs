export const name="face_retouching_off";
export const id="dl_0567e7c8a7807be3a880";
export const url=new URL("../icons/face_retouching_off.svg?v=bad0552782fcfdea6fa4ce04b189bf2239375f3402bf2a583eb6bdbbe81aa3fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
