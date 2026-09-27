export const name="schedule";
export const id="dl_0d76a3e420b250695185";
export const url=new URL("../icons/schedule.svg?v=33785ccc59d368c709667b3a107afabee23b667487c2721fc49f096de6f1a4cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
