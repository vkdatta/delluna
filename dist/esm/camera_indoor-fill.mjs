export const name="camera_indoor-fill";
export const id="dl_96cd23e6db49a7319439";
export const url=new URL("../icons/camera_indoor-fill.svg?v=1360fa36e05e49f08b0eaafa1f406ce55f91858563f19bfb5b68f7524cef760f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
