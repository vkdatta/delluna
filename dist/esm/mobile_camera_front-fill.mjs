export const name="mobile_camera_front-fill";
export const id="dl_0a47b7cbc34ed23a5da1";
export const url=new URL("../icons/mobile_camera_front-fill.svg?v=567b8bb05eff84dbeae40c51a5f9bd253e23cda97942d5f7ba167ee1f2d82a11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
