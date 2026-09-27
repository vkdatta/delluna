export const name="face_down-fill";
export const id="dl_8f2d88efb820cc316745";
export const url=new URL("../icons/face_down-fill.svg?v=60f553b73000c47f5982ea597b68802e10870ade87383b41116e3e6f26918c21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
