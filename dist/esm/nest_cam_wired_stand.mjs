export const name="nest_cam_wired_stand";
export const id="dl_8675dfec57dd4dc6af4b";
export const url=new URL("../icons/nest_cam_wired_stand.svg?v=b87a6882eb48a482cc16eb7785d91d10b5fb89fb94a4dbb409717fcd92b8ce5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
