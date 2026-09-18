export const name="screenshot_frame-fill";
export const id="dl_48088aec28924be79655";
export const url=new URL("../icons/S/screenshot_frame-fill.svg?v=b7eed2e134eba055b4212ae1ad375b4fdee122b3d148857c3ed6fa74ad99ca6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
