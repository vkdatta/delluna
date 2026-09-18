export const name="eye_tracking";
export const id="dl_5b43731ae31b44198a2b";
export const url=new URL("../icons/eye_tracking.svg?v=f0cf3a2d3c2e2e364d2182b515e60dd90b27f773adb424263bd66085bfb26a42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
