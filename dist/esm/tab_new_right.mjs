export const name="tab_new_right";
export const id="dl_ccf93e56007534fcafce";
export const url=new URL("../icons/tab_new_right.svg?v=d44302304702c28de01957cd8029c524fbf5a34d179ac2a3910bad537d5eaa41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
