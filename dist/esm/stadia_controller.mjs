export const name="stadia_controller";
export const id="dl_35961b3bcc824805a43c";
export const url=new URL("../icons/stadia_controller.svg?v=28594305fe05386c405dc2b5e464b2c33c020ed6ec3164779465e4fb51b2c61b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
