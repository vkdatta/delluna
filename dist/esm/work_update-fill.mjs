export const name="work_update-fill";
export const id="dl_1d1210bc40181149b6ec";
export const url=new URL("../icons/work_update-fill.svg?v=6bb51f410f4c3d6c49cecf6e1b9f98dba4a6d680cb58060c76a630bf6c766093",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
