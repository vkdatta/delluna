export const name="mobile_camera_rear-fill";
export const id="dl_0bcf3d4ca9aad17665ed";
export const url=new URL("../icons/mobile_camera_rear-fill.svg?v=4eebacb9517fc5fb3f07a627d8294d390a318f267cb7fce758342ed4fe0edcbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
