export const name="call-fill";
export const id="dl_f0b05dbdd933487fd324";
export const url=new URL("../icons/call-fill.svg?v=3d9e867b8305f8d2d6c7fe2893c02484c50003a9fb94fe36abec0f612a0948ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
