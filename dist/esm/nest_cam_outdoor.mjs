export const name="nest_cam_outdoor";
export const id="dl_0ec5dc71bc45c98f8c44";
export const url=new URL("../icons/nest_cam_outdoor.svg?v=a259d619f8713d069e5c7be15bb74f9e62196e6275abc8e3e9bbdddc8b4f89ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
