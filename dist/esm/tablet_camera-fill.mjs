export const name="tablet_camera-fill";
export const id="dl_36d5a7f5ebb546cdafe6";
export const url=new URL("../icons/T/tablet_camera-fill.svg?v=3f3ca522df7f509f59e9e1c92b14905d7c8eac7c09dd75ea75e84380703ea17b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
