export const name="eye_tracking";
export const id="dl_fae74e490c354e9fc304";
export const url=new URL("../icons/eye_tracking.svg?v=89357c8642d16707fcd1e8ae666d1b484155919ce2de381be6933ee10f08c930",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
