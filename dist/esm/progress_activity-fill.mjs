export const name="progress_activity-fill";
export const id="dl_45335a1921e3b0717ee2";
export const url=new URL("../icons/progress_activity-fill.svg?v=cb77853e033997cfcfecd48a8e0038192bd3a6808bf42d5a579f6f9e24986d9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
