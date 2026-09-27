export const name="schedule_send-fill";
export const id="dl_f1f582cfb33d072c234b";
export const url=new URL("../icons/schedule_send-fill.svg?v=55955fdc3c04d585946b7176c39f228cb13db30e1ee40c4bd80e1c55c5365391",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
