export const name="emergency_recording-fill";
export const id="dl_8887b8a00126f3ac4eda";
export const url=new URL("../icons/emergency_recording-fill.svg?v=650a198600fbe40e1f2f1b9f1506d35509c0caf4285bfa529639816d887e2128",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
