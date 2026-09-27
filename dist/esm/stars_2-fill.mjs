export const name="stars_2-fill";
export const id="dl_66adb985112be1d411f0";
export const url=new URL("../icons/stars_2-fill.svg?v=440c5971ef905a3891280596e81e1e3c87da1127618cdb083beacd074233d696",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
