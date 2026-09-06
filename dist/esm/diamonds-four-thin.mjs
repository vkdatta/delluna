export const name="diamonds-four-thin";
export const id="dl_3ea7d2eedc034c8e9f3d";
export const url=new URL("../icons/diamonds-four-thin.svg?v=f93f04cc2a48039941229df55971762edbf96bbe55cf51cff0b836e760f8930a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
