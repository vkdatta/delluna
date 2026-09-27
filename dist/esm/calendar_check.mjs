export const name="calendar_check";
export const id="dl_94611e1d632c2e78560d";
export const url=new URL("../icons/calendar_check.svg?v=d76e1a43f88af3c25b167b80240138a8ad4f0cc7cface44e3f1c9e2fa1a4eeef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
