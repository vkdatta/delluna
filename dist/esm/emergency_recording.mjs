export const name="emergency_recording";
export const id="dl_1abdcfd3a46a54146c56";
export const url=new URL("../icons/emergency_recording.svg?v=454f84aec433a8d6a9df04947f32fcc7dd63e64292391bb0a1199b64528363b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
