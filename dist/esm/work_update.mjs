export const name="work_update";
export const id="dl_edb238b46695d05f9c01";
export const url=new URL("../icons/work_update.svg?v=63206597fedbbf3ab3567befc14e0764e89563e9f11c1b6ecad0dea2bddce188",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
