export const name="clock_loader_80-fill";
export const id="dl_eaf3781d42f25e8025ab";
export const url=new URL("../icons/clock_loader_80-fill.svg?v=3b584793637e696dd3a0486063af58c94326451914573e1c3846bdcac23290a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
